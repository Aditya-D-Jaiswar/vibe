import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        name: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.create({
        data: {
          email: input.email,
          name: input.name,
        },
      });
    }),

  getById: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return ctx.db.user.findUnique({
        where: { id: input },
        include: { projects: true },
      });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.user.findMany({
      include: { projects: true },
    });
  }),
});