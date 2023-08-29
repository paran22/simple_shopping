import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    color: {
      'primary': '#1D5D9B',
      'secondary': 'F4D160',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

