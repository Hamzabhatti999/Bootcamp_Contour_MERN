/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero' : "url('/src/logo.jpg')",
      },
      backgroundColor:{
        'indi' : "#0A4D68"
      }
    },
  },
  plugins: [],
}

