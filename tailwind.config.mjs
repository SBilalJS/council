/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        play: ['Playwrite CO Guides', 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      'x-s': { max: '575px' }, 
      's-m': { max: '767px' }, 
      'm-d': { max: '991px' }, 
      'l-g': { max: '1199px' }, 
      'x-l': { max: '1399px' }, 
      '2x-l': { min: '1400px' }, 
    },
    container: {
      center: true, 
      screens: {
        'x-s': '100%',    
        's-m': '540px',   
        'm-d': '720px',   
        'l-g': '960px',   
        'x-l': '1140px',  
        '2x-l': '1200px',
      },
    },
  },
  plugins: [],
};
