import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),

  createUser: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
        passwordConfirmation: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        if (
          await ctx.prisma.user.findFirst({ where: { email: input.email } })
        ) {
          throw new Error("User already exists");
        } else if (input.password.length < 8) {
          throw new Error("Password must be at least 8 characters");
        } else if (input.name.length < 3) {
          throw new Error("Name must be at least 3 characters");
        } else if (
          input.email.length < 3 ||
          !input.email.includes("@") ||
          !input.email.includes(".")
        ) {
          throw new Error("Email must be at least 3 characters");
        }

        const user = await ctx.prisma.user.create({
          data: {
            name: input.name,
            email: input.email,
            password: hasToken(input.password),
          },
        });

        return user;
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
      }
    }),
});
