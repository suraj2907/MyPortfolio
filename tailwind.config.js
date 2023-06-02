/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
        'primary' : '#5B78F6',
        'dark' : '#323232',
        'background' : '#0F0F0F',
        'text' : '#9f9f9f',
        'white': '#ffffff'
    },
    extend: {
      fontFamily: {
        'Inter': ['Inter','Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

