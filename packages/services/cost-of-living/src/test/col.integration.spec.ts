import { describe, expect, it } from "vitest"
import { colService } from "../col.service"

describe("it should test the CRUD actions of the COL service", () => {
  it("should create a food for a user's cost of living", async () => {
    const createdFood = await colService.postFoodCost()
    expect(createdFood).toBeDefined()
  })
})
