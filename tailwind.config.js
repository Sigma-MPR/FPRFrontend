/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
    daisyui: {
      themes: [
        {
          mytheme: {
  
            // blue: "#1C1258",
            // red: "#EE4166",
            // pink: "#EABFCB",
            // light: "#CACAEA",
            // dark: "#293747",
            // Mustard: "#FF9B00",
            // yellow: "#FFD28C",
            // "base-100": "#ffffff",
          },
        }
      ],
    },
    }
