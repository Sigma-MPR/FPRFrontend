// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//     require("daisyui"),
//   ],
// }


/**@type {import('tailwindcss').Config}  */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'light-beige': '#fdf8f6',
      'blue':"#1C1258",
      'red':'#EE4166',
      'pink':'#EABFCB',
      'light': '#CACAEA',
      'dark': '#293747',
      'Mustard': '#FF9B00',
      'yellow': "#FFD28C",
      'lavender':'#BAB7CD',
      'black':'#000',
      
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
  
          },
        }
      ],
    },
    }

