import getConfig from 'next/config'
import {type BillianRuntimeConfig, getRuntimeConfig} from './env.types'

const ENVIRONMENT_NAMES = {
  local: 'local',
  test: 'test',
  development: 'development',
  staging: 'staging',
  production: 'production',
}

interface NextRuntimeConfig {
  serverRuntimeConfig:unknown,
  publicRuntimeConfig:unknown,
}
const nextConfig:NextRuntimeConfig = getConfig() as NextRuntimeConfig

export const isNext = !!nextConfig
export const isNode = (typeof window === 'undefined')
export const hasWindow = !isNode
// export const isJest = !!process.env.JEST_WORKER_ID;
// export const isServerless = isNode && !process.env.POD_NAME;
export const isVercel = (process.env.VERCEL_URL !== undefined)

const rtconfig = !isNext ? process.env : isNode ? nextConfig.serverRuntimeConfig : nextConfig.publicRuntimeConfig
export const env:BillianRuntimeConfig = getRuntimeConfig(rtconfig as BillianRuntimeConfig)

export const isProduction = () => env.NEXT_PUBLIC_ENV === ENVIRONMENT_NAMES.production
export const isStaging = () => env.NEXT_PUBLIC_ENV === ENVIRONMENT_NAMES.staging
export const isDevelopment = () => env.NEXT_PUBLIC_ENV === ENVIRONMENT_NAMES.development
export const isLocal = () => env.NEXT_PUBLIC_ENV === ENVIRONMENT_NAMES.local
export const isTest = () => env.NEXT_PUBLIC_ENV === ENVIRONMENT_NAMES.test

const vercelOrDefaultUrl = isVercel ? `https://${process.env.VERCEL_URL}` : `http://localhost:3000`
const appUrl = env.APP_URL != 'VERCEL' ? env.APP_URL : vercelOrDefaultUrl                                                                                                                                                                      
export const getAPIUrl = hasWindow ? '' : appUrl

// console.info(JSON.stringify(env, null, 2))
export const warn = (warnCallback: (msg: string) => void) => {
  Object.entries(env).forEach(([key, value]) => {
    if (value === undefined) {
      if (isNode || key.startsWith('NEXT_PUBLIC_')) {
        // console.error(`Missing key ${key} in env.env`);
        warnCallback(`ENVIRONMENT:  Missing key ${key}`)
      }
    }
  })
}

