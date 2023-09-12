/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createRouter } from 'next-connect'
import  { type NextApiRequest, type NextApiResponse } from 'next'
import { userProfileService } from './user-profile.service'
import { type Prisma } from 'billian-prisma'

const router = createRouter<NextApiRequest, NextApiResponse>()

router.post('/api/user-profile/create', async (req, res) => {
  // eslint-disable-next-line @typescript-eslint/dot-notation, @typescript-eslint/no-unsafe-member-access
  const createUserProfileParams: Prisma.UserProfileUncheckedCreateInput = req.body?.['data']?.['id']
  const createdUserProfile = await userProfileService.createUserProfile(createUserProfileParams)
  res.status(201).json(createdUserProfile)
})

export const handler = router.handler({
  onError: (_err, req, res) => {
    // console.error(err.stack);
    res.status(500).end('Something broke!')
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found')
  },
})
