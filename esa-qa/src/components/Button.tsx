// src/components/Button.tsx

import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'liquid' | 'primary-glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const variants = {
    primary: 'bg-accent-blue dark:bg-accent-yellow text-white dark:text-background-dark shadow-lg hover:opacity-90',
    secondary: 'bg-surface-light dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark hover:bg-gray-200 dark:hover:bg-slate-700',
    ghost: 'bg-transparent text-text-primary-light dark:text-text-primary-dark hover:bg-black/5 dark:hover:bg-white/10',
    liquid: 'bg-white/40 dark:bg-surface-dark/50 backdrop-blur-xl text-text-primary-light dark:text-text-primary-dark border border-white/20 dark:border-white/10 hover:bg-white/60 dark:hover:bg-surface-dark/60 shadow-lg shadow-black/5 dark:shadow-black/20',
    
    // ۱. رنگ‌ها را بر اساس توضیح جدید شما اصلاح می‌کنیم
    'primary-glass': 
        // استایل‌های مشترک
        'backdrop-blur-lg font-bold border shadow-xl shadow-black/20 ' +

        // // استایل‌های حالت روشن (تم آبی)
        // 'bg-blue-700 text-white border-blue-400/50 hover:bg-blue-500/30 ' +

        // استایل‌های حالت تاریک (تم زرد)
        'bg-yellow-400/80 text-black border-yellow-400/50 hover:bg-yellow-400/30'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-xl',
    md: 'px-4 py-2 text-base rounded-2xl',
    
    // ۲. برای دکمه بزرگ، از گوشه‌های کاملاً گرد (کپسولی) استفاده می‌کنیم
    lg: 'px-8 py-3 text-lg rounded-full',
  };

  return (
    <button
      className={cn(
        'font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 active:scale-95',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};