/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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

