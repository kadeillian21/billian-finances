/* eslint-disable @typescript-eslint/no-unsafe-return */
import { env } from "@billian/env"
import axios from 'axios'

async function getCostOfLiving(userProfileId: string) {
  const costOfLivingForUser = await axios.get(`localhost:3000/api`, { params: { userProfileId }})
  return costOfLivingForUser.data
}

export const colClient = {
  getCostOfLiving
}