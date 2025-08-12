// src/components/Header.tsx

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Button } from './Button';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto max-w-lg bg-surface-light/60 dark:bg-surface-dark/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/10 px-4 py-3">
        {/* قدم ۱: با افزودن flex-row-reverse چیدمان را به حالت اول برمی‌گردانیم */}
        <div className="flex items-center justify-between flex-row-reverse">
          
             <div className="" id="logo-container">
             {/* این کد را برای نمایش لوگو اضافه کن */}
             <img
                src="/esa-logo.png" // آدرس فایل لوگو در پوشه public
                alt="لوگوی علم و صنعت آریا"
                // با این کلاس‌ها اندازه لوگو را کنترل می‌کنیم
                className="h-14 w-14 mx-auto" 
             />
          </div>

          <Button
            variant="liquid"
            size="sm"
            onClick={toggleTheme}
            
            // قدم ۳: پدینگ دکمه را برای ناحیه لمس بزرگ‌تر، افزایش می‌دهیم
            className="p-3 rounded-full" // قبلا p-2.5 بود
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              // قدم ۴: اندازه آیکون را برای وضوح بیشتر، بزرگ‌تر می‌کنیم
              <Moon size={24} className="text-text-primary-light" /> // قبلا ۲۲ بود
            ) : (
              <Sun size={24} className="text-accent-yellow" /> // قبلا ۲۲ بود
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};