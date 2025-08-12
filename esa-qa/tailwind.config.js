/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // فعال‌سازی حالت تاریک بر اساس کلاس CSS
  theme: {
    extend: {
      colors: {
        // --- رنگ‌های اصلی برنامه ---
        'accent-blue': '#3b82f6',   // آبی برای حالت روشن
        'accent-yellow': '#facc15', // زرد برای حالت تاریک (یا به انتخاب)

        // --- حالت روشن (Light Mode) ---
        'background-light': '#f3f4f6', // یک سفید مایل به خاکستری برای پس‌زمینه
        'surface-light': '#ffffff',    // سطح اصلی (سفید خالص)
        'text-primary-light': '#111827',     // متن اصلی (مشکی)
        'text-secondary-light': '#6b7280', // متن دوم (خاکستری)
        'glass-bg-light': 'rgba(255, 255, 255, 0.5)', // پس‌زمینه شیشه در حالت روشن

        // --- حالت تاریک (Dark Mode) ---
        'background-dark': '#0d1117', // یک مشکی مایل به سرمه‌ای (شبیه گیت‌هاب)
        'surface-dark': '#161b22',    // سطح اصلی
        'text-primary-dark': '#e6edf3',      // متن اصلی (سفید)
        'text-secondary-dark': '#7d8590',  // متن دوم (خاکستری)
        'glass-bg-dark': 'rgba(30, 41, 59, 0.5)', // پس‌زمینه شیشه در حالت تاریک
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }, // کمی بیشتر برای تاکید
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite', // زمان طولانی‌تر برای حرکت نرم‌تر
      }
    },
  },
  plugins: [],
}