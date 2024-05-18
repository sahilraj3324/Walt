/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'sel':'#9400FF',
        'grey': '#4D4D4D',
        'first' : '#FF69B4',
        'sec':'#717171' ,
        'blue':'#00FFFF',
        'yello':'#FEE715',
        'green':'#99F443',
        'dark': '#FFFFDD',
        'hov':'#040D12',
        'dblue':'#1640D6'
      }
    },
    
    fontFamily: {
      abc: ['DM Sans', 'sans-serif']
    }
  },
  plugins: [],
}

