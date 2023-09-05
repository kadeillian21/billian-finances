/*
 * Do Not Manually Modify
 * Generated with env.types.generator.ts
 */

import {z} from 'zod'

export const BillianRuntimeConfigSchema = z.object({
  NEXT_PUBLIC_ENV: z.string().min(1),
  APP_URL: z.string().min(1),
  BILLIAN_NEON_URL: z.string().min(1),
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  CLERK_SECRET_KEY: z.string().min(1),
  NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1),
  NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().min(1),
  NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string().min(1),
  NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string().min(1),

})

export type BillianRuntimeConfig = z.infer<typeof BillianRuntimeConfigSchema>

export const getRuntimeConfig = (cfg: BillianRuntimeConfig): BillianRuntimeConfig => ({
  NEXT_PUBLIC_ENV: cfg.NEXT_PUBLIC_ENV,
  APP_URL: cfg.APP_URL,
  BILLIAN_NEON_URL: cfg.BILLIAN_NEON_URL,
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: cfg.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY: cfg.CLERK_SECRET_KEY,
  NEXT_PUBLIC_CLERK_SIGN_IN_URL: cfg.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
  NEXT_PUBLIC_CLERK_SIGN_UP_URL: cfg.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
  NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: cfg.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
  NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: cfg.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL
})
