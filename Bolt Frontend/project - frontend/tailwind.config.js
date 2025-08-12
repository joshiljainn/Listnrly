/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 3s ease-in-out infinite',
        'spin': 'spin 20s linear infinite',
        'bounce': 'bounce 2s infinite',
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      transform: {
        'rotate-3d': 'perspective(1000px) rotateY(-15deg) rotateX(15deg)',
        'rotate-3d-hover': 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-6': 'rotateY(6deg)',
        'y-12': 'rotateY(12deg)',
      },
    },
  },
  plugins: [],
};