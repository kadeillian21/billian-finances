import { PrismaClient } from '@prisma/client'

export * from '@prisma/client'

const globalForPrisma = globalThis as { billian_prisma?: PrismaClient }

export const billian_prisma =
  globalForPrisma.billian_prisma ||
  new PrismaClient({
    log: process.env.NEXT_ENVIRONMENT === 'production' ? ["error"] : ["query", "error", "warn"],
  })

if (process.env.NEXT_ENVIRONMENT !== 'production') globalForPrisma.billian_prisma = billian_prisma
