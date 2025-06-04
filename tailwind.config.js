import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: '#EE7A23',
        secondary: '#444444',
        background: '#E6E7E8',
      },
      fontFamily: {
        helvetica: ['"Helvetica Neue"', 'sans-serif'],
        sans: ['"Helvetica Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
})
