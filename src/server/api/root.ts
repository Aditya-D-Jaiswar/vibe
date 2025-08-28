import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { userRouter } from "@/server/api/routers/user";
import { projectRouter } from "@/server/api/routers/project";

export const appRouter = createTRPCRouter({
  user: userRouter,
  project: projectRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);