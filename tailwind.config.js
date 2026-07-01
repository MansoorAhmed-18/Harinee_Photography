/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F9F6EE',
          DEFAULT: '#D4AF37',
          dark: '#AA7C11',
          premium: '#C5A880',
          rich: '#B89742',
        },
        darkbg: '#000000',
        cardbg: '#121212',
        graybg: '#1A1A1A',
        lightgray: '#E5E5E5',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Outfit"', 'sans-serif'],
      },
      animation: {
        'kenburns-1': 'kenburns1 20s ease-in-out infinite',
        'kenburns-2': 'kenburns2 20s ease-in-out infinite',
        'kenburns-3': 'kenburns3 20s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        kenburns1: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.15) translate(-1%, -1%)' },
          '100%': { transform: 'scale(1) translate(0, 0)' },
        },
        kenburns2: {
          '0%': { transform: 'scale(1.1) translate(1%, 1%)' },
          '50%': { transform: 'scale(1.2) translate(-1%, -2%)' },
          '100%': { transform: 'scale(1.1) translate(1%, 1%)' },
        },
        kenburns3: {
          '0%': { transform: 'scale(1.15) translate(-2%, 0)' },
          '50%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.15) translate(-2%, 0)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
