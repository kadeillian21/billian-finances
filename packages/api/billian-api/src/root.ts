import { colTRPCRouter } from '@billian/col-service'
import { createTRPCRouter } from "../../trpc/src/trpc"

/**
 * primary router for starter app
 */
export const appRouter: any = createTRPCRouter({
  col: colTRPCRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter;
