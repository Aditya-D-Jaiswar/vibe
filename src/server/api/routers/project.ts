import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const projectRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        description: z.string().optional(),
        userId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.project.create({
        data: {
          name: input.name,
          description: input.description,
          userId: input.userId,
        },
      });
    }),

  getById: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return ctx.db.project.findUnique({
        where: { id: input },
        include: { 
          user: true, 
          messages: true 
        },
      });
    }),

  getByUserId: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return ctx.db.project.findMany({
        where: { userId: input },
        include: { messages: true },
        orderBy: { updatedAt: "desc" },
      });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.project.findMany({
      include: { 
        user: true, 
        messages: true 
      },
      orderBy: { updatedAt: "desc" },
    });
  }),
});