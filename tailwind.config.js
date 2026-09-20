/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gilroy', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      transformOrigin: {
        'left-center': 'left center',
        'top-left': 'top left',
        'bottom-left': 'bottom left',
      },
      keyframes: {
        glow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.2)', opacity: '0.5' },
        },
      },
      animation: {
        glow: 'glow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

