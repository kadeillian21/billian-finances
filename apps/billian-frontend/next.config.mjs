import {configEnv} from "billian-prisma/node_modules/@billian/env/src/env.nextjs.mjs"

const {serverConfig,publicConfig} = configEnv()

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  serverRuntimeConfig: serverConfig,
  publicRuntimeConfig: publicConfig,
  /** Enables hot reloading for local packages without a build step */
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com']
  },
  transpilePackages: ['ui']
  // eslint: { ignoreDuringBuilds: !!process.env.CI },
  // typescript: { ignoreBuildErrors: !!process.env.CI },
  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     config.plugins = [...config.plugins, new PrismaPlugin()]
  //   }
  //   return config
  // },
};
export default config;
