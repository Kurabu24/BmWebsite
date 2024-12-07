/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/landing.html",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'icon-pattern': "url('./assets/img/Frame 7 (1).svg')",
      },
      fontFamily: {
        sugoBold: ['sugobold'],
        sugoLight: ['sugolight'],
        sugoClassic: ['sugoclassic'],
        smooth: ['smooth'],
        rounded: ['rounded'],
        holimount: ['Holimount'],
      },
    },
  },
  plugins: [
  ],
}

