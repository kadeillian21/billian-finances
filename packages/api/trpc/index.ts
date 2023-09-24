import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server"
import { type AppRouter } from "../billian-api/src/root"

export { appRouter, type AppRouter } from "../billian-api/src/root"

export { createTRPCContext } from "./src/trpc"
export * from "./src/trpc"

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;

