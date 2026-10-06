/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#dbe5f3',
          200: '#b6cce7',
          300: '#84a8d4',
          400: '#527fbc',
          500: '#365f9e',
          600: '#284980',
          700: '#1e3a6b',
          800: '#16294b',
          900: '#0f1d36',
          950: '#0a1424',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
};
