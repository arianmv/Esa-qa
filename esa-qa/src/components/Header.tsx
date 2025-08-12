// src/components/Header.tsx
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from './Button'; // <-- استفاده از کامپوننت جدید
import { useTheme } from '../context/ThemeContext'; // <-- استفاده از هوک تم

export const Header: React.FC = () => {
  // به سادگی تم و تابع تغییرش را از کانتکست می‌خوانیم
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-3">
      {/* این کانتینر، ظاهر شیشه‌ای خود هدر را می‌سازد */}
      <div className="mx-auto max-w-lg bg-surface-light/60 dark:bg-surface-dark/60 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 px-4 py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
            Esa-qa
          </h1>
          <Button
            variant="liquid" // <-- استفاده از استایل liquid
            size="sm"
            onClick={toggleTheme}
            className="p-2 rounded-full"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
        </div>
      </div>
    </header>
  );
};