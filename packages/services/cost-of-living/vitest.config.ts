import { defineProject } from "vitest/config"

export default defineProject({
  test: {
    include: ["src/test/*.{spec,unit}.ts"],
    environment: "jsdom",
    testTimeout: 2000000000,
    hookTimeout: 2000000000,
    // "reporters" is not supported in a project config,
    // so it will show an error,
    globalSetup: '../../../vitest.timeConfig.ts',
  },
})
