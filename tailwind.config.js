/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
    },
    extend: {
      height: {
        '116': '29rem',
      },
      width: {
        '224': '56rem',
      },
    },
  },
  plugins: [],
}

