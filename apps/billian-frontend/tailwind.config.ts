import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        navy_blue: {
          1: "hsl(209, 86%, 25%)",
        },
        gray_blue: {
          1: "hsl(210, 43%, 41%)",
          9: "hsl(210, 43%, 90%)",
        },
        light_blue: {
          1: "hsl(193, 100%, 68%)",
        },
        gold: {
          1: "hsl(49, 100%, 65%)",
        },
        sand_orange: {
          1: "hsl(34, 100%, 50%)",
        },
      }
    },
  },
  plugins: [],
}
export default config
