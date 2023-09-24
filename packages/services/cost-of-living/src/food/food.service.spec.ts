import { describe, expect, it } from "vitest"
import { type Prisma, billian_prisma } from "billian-prisma"
import { foodService } from "./food.service"

describe("it should ensure that we are able to create, read, and update foods for a given Cost of Living", () => {
  let createdFoodId: string

  it("create a food for a given cost of living", async () => {
    const createFoodParams: Prisma.FoodUncheckedCreateInput = {
      name: 'Pizza',
      cost: 21,
      costOfLivingId: 'clmflch3r000008l53cixf8it'
    }
    const createdFood = await foodService.createFood( createFoodParams, billian_prisma)
    createdFoodId = createdFood.id
    expect(createdFood).toBeDefined()
  })

  it("update a food for a given cost of living", async () => {
    const updateFoodParams: Prisma.FoodUpdateInput = {
      id: createdFoodId,
      name: 'Pizza',
      cost: 23,
    }
    const updatedFood = await foodService.updateFood( updateFoodParams, billian_prisma)
    expect(updatedFood).toBeDefined()
  })

  it("delete a food for a given cost of living", async () => {
    const deletedFood = await foodService.deleteFood( createdFoodId, billian_prisma)
    expect(deletedFood).toBeDefined()
  })
})
