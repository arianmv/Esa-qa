// src/App.tsx

import LandingPage from './pages/LandingPage';

function App() {
  return (
    // اینجا جادوی اصلی اتفاق می‌افتد
    // به صورت پیش‌فرض از رنگ‌های light استفاده می‌کند
    // و وقتی کلاس .dark فعال شود، از رنگ‌های dark استفاده می‌کند
    <div className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-sans transition-colors duration-300">
      <LandingPage />
    </div>
  );
}

export default App;