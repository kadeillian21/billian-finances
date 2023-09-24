import { billian_prisma, type CostOfLiving } from "billian-prisma"

async function createCostOfLiving(userProfileId: string): Promise<CostOfLiving> {
  return await billian_prisma.costOfLiving.upsert({
    create: {
      userProfileId,
    },
    update: {
      userProfileId,
    },
    where: {
      userProfileId
    }
  })
}

async function getCostOfLiving(userProfileId: string): Promise<CostOfLiving | null> {
  return await billian_prisma.costOfLiving.findUnique({
    where: {
      userProfileId
    },
    include: {
      housing: true,
      food: true,
      healthCare: true,
      transportation: true,
      subscriptions: true,
      miscellaneousCosts: true,
    }
  }) ?? null
}

export const colService = {
  createCostOfLiving,
  getCostOfLiving
}