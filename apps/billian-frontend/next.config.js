/** @type {import('next').NextConfig} */
import {configEnv} from "../../packages/config/env/src/env.nextjs.mjs"

const { serverConfig, publicConfig } = configEnv()

const nextConfig = {
  serverRuntimeConfig: serverConfig,
  publicRuntimeConfig: publicConfig,
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com']
  }
}

module.exports = nextConfig
