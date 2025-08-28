import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../root"
import { db } from "@/lib/db"

export const userRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    return await db.user.findMany({
      include: {
        projects: true,
      },
    })
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return await db.user.findUnique({
        where: { id: input.id },
        include: {
          projects: true,
        },
      })
    }),

  create: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        name: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      return await db.user.create({
        data: {
          email: input.email,
          name: input.name,
        },
      })
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        email: z.string().email().optional(),
        name: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { id, ...data } = input
      return await db.user.update({
        where: { id },
        data,
      })
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      return await db.user.delete({
        where: { id: input.id },
      })
    }),
})