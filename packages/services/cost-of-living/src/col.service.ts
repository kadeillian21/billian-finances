import { billian_prisma, type Food, type Prisma } from "../../../db/billian-prisma"

async function postFoodCost(foodCreateInput: Prisma.FoodUncheckedCreateInput): Promise<Food> {
  const createdFoodCost = await billian_prisma.food.create({
    data: foodCreateInput
  })
  return createdFoodCost
}

export const colService = {
  postFoodCost
}