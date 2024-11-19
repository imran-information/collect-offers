/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      img: "url('../collect-offers/src/assets/image.png')",
    },
    fontFamily: {
      "Work Sans": [
        "Work Sans", "sans - serif",
      ]
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

