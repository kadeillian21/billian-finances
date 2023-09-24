import { createTRPCProxyClient, httpBatchLink, loggerLink } from "@trpc/client"
import { createTRPCNext } from "@trpc/next"
import superjson from "superjson"
import { getAPIUrl, isProduction } from '@billian/env'
import { type AppRouter } from "@billian/trpc"

export const api = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: `${getAPIUrl}/api/trpc`,
    }),
  ],
})


export const trpc = createTRPCNext<AppRouter>({
    config( ) {
    return {
      transformer: superjson,
      links: [
        loggerLink({
          enabled: (opts) => !isProduction() || (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getAPIUrl}/api/trpc`,
        }),
      ],
    }
  },
  ssr: false,
})
