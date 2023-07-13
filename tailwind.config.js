/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  content: [],
  theme: {
    extend: {
      colors:{
        'calculator': '#2D4356',
        'buttonc': '#526D82',
        'buttony':'#6527BE',
        'buttonj': '#B6EADA',
        'buttonf': '#F0CAA3'
      },
      fontFamily:{
        arvo: ['Arvo','sans-serif'],
        courgette:['COurgette','cursive']
      }
    },
  },
  plugins: [],
}

