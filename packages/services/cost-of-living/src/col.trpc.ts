/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createTRPCRouter, protectedProcedure } from "@billian/trpc"
import { colService } from "./col.service"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const colTRPCRouter: any = createTRPCRouter({
  getCostOfLiving: protectedProcedure
    .mutation( async () => {
      await colService.getCostOfLiving('3')
    })
})
