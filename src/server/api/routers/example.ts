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

  getAllItems: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.item.findMany({});
  }),

  registration: publicProcedure
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
            password: input.password,
          },
          select: {
            name: true,
            email: true,
          }
        });

        return user;
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
      }
    }),

  createNewItem: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        price: z.string(),
        image: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const item = await ctx.prisma.item.create({
          data: {
            name: input.name,
            description: input.description,
            price: input.price,
            image: input.image,
            userId: input.userId,
          },
        });

        return item;
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
      }
    }),

  getItemOwner: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        const user = await ctx.prisma.user.findUnique({
          where: { id: input.userId },
        });

        return user;

      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
      }
    }),

    getItem: publicProcedure
    .input(z.object({ itemId: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        const item = await ctx.prisma.item.findUnique({
          where: { id: input.itemId },
        });

        return item;

      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
      }
    }),
});
