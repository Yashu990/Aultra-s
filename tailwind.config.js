/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050A18',
          900: '#080F1F',
          800: '#0D1630',
          700: '#132040',
        },
        gold: {
          400: '#D4AF37',
          500: '#C9A02A',
          600: '#B8860B',
        },
        steel: {
          300: '#B0BEC5',
          400: '#90A4AE',
          500: '#607D8B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px #D4AF37, 0 0 20px #D4AF37' },
          '100%': { textShadow: '0 0 20px #D4AF37, 0 0 40px #C9A02A, 0 0 60px #B8860B' },
        }
      },
    },
  },
  plugins: [],
}
