import {type inferRouterInputs, type inferRouterOutputs} from "@trpc/server"
import {type AppRouter} from "./src/root"

// export * from './src/prisma'

export { appRouter, type AppRouter } from "./src/root"

export { createTRPCContext } from "@billian/trpc"

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;

