/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'blue': '#fdf8f6',
      "blue":"#1C1258",
      "red":"#EE4166",
      "pink":"#EABFCB",
      "light": "#CACAEA",
      "dark": "#293747",
      "Mustard": "#FF9B00",
      "yellow": "#FFD28C",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
    daisyui: {
      themes: [
        {
          mytheme: {
  
            // primary: "#a991f7",
            // secondary: "#f6d860",
            // accent: "#37cdbe",
            // neutral: "#3d4451",
            // "base-100": "#ffffff",
          },
        }
      ],
    },
    }
