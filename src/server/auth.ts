import type { GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "../env.mjs";
import { prisma } from "./db";
import { User } from "@prisma/client";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = (await prisma.user.findUnique({
          where: { email: email },
        })) as User;

        if (!user) {
          throw new Error("User not found");
        } else if (user.email !== email || user.password !== password) {
          throw new Error("Invalid email or password");
        } else {
          // console.log(user);
          return user;
        }
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      console.log("########session callback", { session });
      session.user.id = String(token.id);
      return session;
    },
    jwt({ token, user }) {
      console.log("########jwt callback", { token });
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the
 * `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 **/
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
