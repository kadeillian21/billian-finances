import { PrismaClient } from '@prisma/client'
import { env } from '@billian/env'

export * from '@prisma/client'

const globalForPrisma = globalThis as { billian_prisma?: PrismaClient }

export const billian_prisma =
  globalForPrisma.billian_prisma ||
  new PrismaClient({
    log: env.NEXT_PUBLIC_ENV === 'production' ? ["error"] : ["query", "error", "warn"],
  })

if (env.NEXT_PUBLIC_ENV !== 'production') globalForPrisma.billian_prisma = billian_prisma
