/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      'jamjuree': ['"Bai Jamjuree"', 'sans-serif'],
      'bakbak': ["'Bakbak One'", 'sans-serif']
    },
    fontSize:{
      'logo' : ['28px']
    },
    extend: {
      colors: {
        'lemon': '#39E168',
        'purple': '#6D64D3',
        'toggle': '#252F45',
        'dark-light': "#847798",
        'bg-light': '#1B2335',
        'primary-bg': 'OF172A'
      },
    },
  },
  plugins: [],
}

