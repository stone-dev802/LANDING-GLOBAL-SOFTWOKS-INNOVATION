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
          950: '#040912',
          900: '#07101E',
          850: '#0B172E',
          800: '#0F2140',
          700: '#162F5C',
          600: '#1E3E7B',
        },
        brand: {
          primary: '#0284C7',     // Electric blue / sky
          primaryHover: '#0369A1',
          accent: '#F59E0B',      // Amber CTA yellow
          accentHover: '#D97706',
          cyan: '#38BDF8',
          dark: '#07101E',
          surface: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 4px 10px -3px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 40px -10px rgba(2, 132, 199, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 25px rgba(56, 189, 248, 0.25)',
      }
    },
  },
  plugins: [],
}
