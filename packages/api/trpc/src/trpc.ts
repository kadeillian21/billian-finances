import { type SignedInAuthObject, type SignedOutAuthObject } from "@clerk/nextjs/api"
import { getAuth} from "@clerk/nextjs/server"
import { initTRPC } from "@trpc/server"
import { type CreateNextContextOptions } from "@trpc/server/adapters/next"
import { type NextApiRequest } from 'next/types'
import superjson from "superjson"
import { ZodError } from "zod"

/**
 * get the baseUrl to call backend with
 */

/**
 * defines the trpc context that is available in the backend
 */
interface CreateContextOptions {
  auth: SignedInAuthObject | SignedOutAuthObject
  req: NextApiRequest
}

/**
 * creates the "internals" for a tRPC context.
 */
const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    auth: opts.auth,
    req: opts.req,
  }
}

/**
 * create the tRPC contect
 */
export const createTRPCContext = (opts: CreateNextContextOptions) => {
  // const { req, res } = opts
  const {req} = opts

  return createInnerTRPCContext({
    auth: getAuth(opts.req),
    req,
  })
}

/**
 * initialize the trpc api connecting the context and transformer
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
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

/**
 * determine if user is authenticated
 */
const isAuthenticated = t.middleware(({next, ctx}) => {
  return next({
    ctx: {
      req: ctx.req,
      auth: ctx.auth,
    },
  })
})

/**
 * used to create new routers and subrouters in a tRPC API
 */
export const createTRPCRouter = t.router

/**
 * public (unauthed) procedure
 */
export const publicProcedure = t.procedure

/**
 * protected (authenticated) procedure
 */
export const protectedProcedure = t.procedure.use(isAuthenticated)
