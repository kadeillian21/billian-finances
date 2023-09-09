import { describe, expect, it } from "vitest"
import { colService } from "../col.service"
import { type Prisma } from "../../../../db/billian-prisma"

describe("it should test the CRUD actions of the COL service", () => {
  it("should create a food for a user's cost of living", async () => {
    const createFoodParams: Prisma.FoodUncheckedCreateInput = {
      name: 'Milk',
      cost: 12,
      costOfLivingId: 'sdfojkojklasdfojklwesdf'
    }
    const createdFood = await colService.postFoodCost(createFoodParams)
    expect(createdFood).toBeDefined()
  })
})
