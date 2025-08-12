// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // رنگ‌های اصلی و تأکیدی
        'accent-blue': '#3b82f6',
        'accent-yellow': '#facc15',

        // --- رنگ‌های حالت روشن (Light Mode) ---
        'background-light': '#f3f4f6',
        'surface-light': '#ffffff',
        'text-primary-light': '#111827',
        'text-secondary-light': '#6b7280',

        // --- رنگ‌های حالت تاریک (Dark Mode) ---
        'background-dark': '#0d1117',
        'surface-dark': '#161b22',
        'text-primary-dark': '#e6edf3',
        'text-secondary-dark': '#8d9098',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}