import { NextRequest } from 'next/server'
import {authMiddleware, redirectToSignIn} from "@clerk/nextjs"

export default authMiddleware({
  afterAuth: (auth, req: NextRequest) => {
    if (!auth.userId && !auth.isPublicRoute) {
      if(req.nextUrl.searchParams.get('redirectUrl')) {
        const redirectUrl = req.nextUrl.searchParams.get('redirectUrl') || '/'
        return redirectToSignIn({ returnBackUrl: new URL(redirectUrl, req.url).toString() });
      }
      return redirectToSignIn({ returnBackUrl: req.url });
    }
  },
  publicRoutes: ["/api/(.*)", "/bcn-sign-in", "/bcn-sign-up", "/sign-in/","/sign-up/"],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
