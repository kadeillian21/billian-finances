import { type Prisma, type Food, type PrismaClient } from "billian-prisma"

async function createFood(createFoodRequest: Prisma.FoodUncheckedCreateInput, billian_prisma: PrismaClient): Promise<Food> {
  const createdFood = await billian_prisma.food.create({
    data: createFoodRequest
  })
  return createdFood
}

async function updateFood(updateFoodRequest: Prisma.FoodUpdateInput, billian_prisma: PrismaClient): Promise<Food> {
  const updatedFood = await billian_prisma.food.update({
    where: {
      id: updateFoodRequest?.id?.toString() ?? '',
    },
    data: updateFoodRequest
  })

  return updatedFood
}

async function deleteFood(foodId: string, billian_prisma: PrismaClient): Promise<Food> {
  const deletedFood = await billian_prisma.food.delete({
    where: {
      id: foodId,
    }
  })

  return deletedFood
}

export const foodService = {
  createFood,
  updateFood,
  deleteFood
}