/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{vue,html}","./pages/**/*.{vue,html}","./components/*.{vue,html}", "./components/**/*.{vue,html}"],
  theme: {
    extend: {},
    fontSize: {
      'base': '1.2rem',
      'large': '1.4rem',
      'text-lg': '1.125rem',
      'text-xl': '1.25rem'
    }
  },
  plugins: [],
}
