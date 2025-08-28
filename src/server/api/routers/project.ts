import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../root"
import { db } from "@/lib/db"

export const projectRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    return await db.project.findMany({
      include: {
        user: true,
        messages: true,
      },
    })
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return await db.project.findUnique({
        where: { id: input.id },
        include: {
          user: true,
          messages: true,
        },
      })
    }),

  getByUserId: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      return await db.project.findMany({
        where: { userId: input.userId },
        include: {
          messages: true,
        },
      })
    }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string().optional(),
        userId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await db.project.create({
        data: input,
      })
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { id, ...data } = input
      return await db.project.update({
        where: { id },
        data,
      })
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      return await db.project.delete({
        where: { id: input.id },
      })
    }),

  addMessage: publicProcedure
    .input(
      z.object({
        projectId: z.string(),
        content: z.string(),
        role: z.enum(["user", "assistant", "system"]),
      })
    )
    .mutation(async ({ input }) => {
      return await db.message.create({
        data: input,
      })
    }),
})