import { describe, expect, it } from "vitest"
import { colService } from "../col.service"

describe("it should test the CRUD actions of the COL service", () => {
  it("should create a cost of living for a user", async () => {
    const createdCostOfLiving = await colService.createCostOfLiving('clmflch3r000008l53cixf8it')
    expect(createdCostOfLiving).toBeDefined()
  })

  it("should get a cost of living for a user", async () => {
    const costOfLivingForUser = await colService.getCostOfLiving('clmflch3r000008l53cixf8it')
    console.log(costOfLivingForUser)
    expect(costOfLivingForUser).toBeDefined()
  })
})
