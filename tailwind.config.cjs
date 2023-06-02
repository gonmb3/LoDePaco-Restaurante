/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        fontBody:"Roboto"
      },
      backgroundImage: {
        'salones-banner': "url('/src/assets/img/salonesBanner.jpg')",

      }
    },
  },
  plugins: [],
}
