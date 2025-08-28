import { initTRPC } from "@trpc/server"
import superjson from "superjson"
import { ZodError } from "zod"

import { userRouter } from "./routers/user"
import { projectRouter } from "./routers/project"

const t = initTRPC.create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
})

export const createTRPCRouter = t.router

export const publicProcedure = t.procedure

export const appRouter = createTRPCRouter({
  user: userRouter,
  project: projectRouter,
})

export type AppRouter = typeof appRouter