
/**@type {import('tailwindcss').Config}  */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
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
      'white':'#fff',
    },
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
      }
    },
    fontFamily: {
      'body': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    }
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

