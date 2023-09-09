import { describe, expect, it } from "vitest"
import { userProfileService } from "../user-profile.service"
import { type Prisma } from "billian-prisma"

describe("it should test the CRUD actions of the user-profile service", () => {
  it("should create a user profile", async () => {
    const createUserProfileParams: Prisma.UserProfileUncheckedCreateInput = {
      clerkUserId: 'ohjkdasojkjkasdp',
    }
    const createdUserProfile = await userProfileService.createUserProfile(createUserProfileParams)
    expect(createdUserProfile).toBeDefined()
  })
})
