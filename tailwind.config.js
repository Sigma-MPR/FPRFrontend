
/**@type {import('tailwindcss').Config}  */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'light-beige': '#F8F7F7',
      'blue': "#D50032",    //it is red
      'red': '#EE4166',
      'pink': '#EABFCB',
      'light': '#0389FF',    //it is blue
      'dark': '#293747',
      'Mustard': '#FF9B00',
      'yellow': "#FFD28C",
      'lavender': '#BAB7CD',
      'black': '#000',
      'white': '#fff',
      'gray': '#a6a6a6',
      "primary": "#6419E6",
      "secondary": "#D926A9",
      "accent": "#1FB2A6",
      "neutral": "#191D24",
      "base-100": "#2A303C",
      "info": "#3ABFF8",
      "success": "#36D399",
      "warning": "#FBBD23",
      "error": "#F87272",
    },
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }
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
          "primary": "#6419E6",
          "secondary": "#D926A9",
          "accent": "#1FB2A6",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      }
    ],
  },
  plugins: [
    require('daisyui'),
  ],

}

