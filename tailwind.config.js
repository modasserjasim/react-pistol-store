/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f43ab6",

          "secondary": "#95f9a4",

          "accent": "#3df7cf",

          "neutral": "#221B2C",

          "base-100": "#ECF1F3",

          "info": "#4385C7",

          "success": "#17A682",

          "warning": "#A15202",

          "error": "#EA717D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
