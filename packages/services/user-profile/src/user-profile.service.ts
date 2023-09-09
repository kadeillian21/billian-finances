import { billian_prisma, type UserProfile, type Prisma } from "billian-prisma"

async function createUserProfile(userProfileCreateInput: Prisma.UserProfileUncheckedCreateInput): Promise<UserProfile> {
  const createdUserProfile = await billian_prisma.userProfile.create({
    data: userProfileCreateInput
  })
  return createdUserProfile
}

export const userProfileService = {
  createUserProfile
}
