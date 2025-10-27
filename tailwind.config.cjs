/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#4f46e5', // Indigo-600 accent
        accent: '#4338ca',
        background: '#fafafa',
      },
      boxShadow: {
        card: '0 10px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
