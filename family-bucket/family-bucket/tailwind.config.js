/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'navbar-white': '#FAFAFA',
      },
      width: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
