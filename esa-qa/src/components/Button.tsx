// src/components/Button.tsx
import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'liquid';
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
    // شخصی‌سازی شده برای پروژه ما
    primary: 'bg-accent-blue dark:bg-accent-yellow text-white dark:text-background-dark shadow-lg hover:opacity-90',
    secondary: 'bg-surface-light dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark hover:bg-gray-200 dark:hover:bg-slate-700',
    ghost: 'bg-transparent text-text-primary-light dark:text-text-primary-dark hover:bg-black/5 dark:hover:bg-white/10',
    // این همان استایل شیشه‌ای برای دکمه‌های داخل هدر است
    liquid: 'bg-white/40 dark:bg-surface-dark/40 backdrop-blur-xl text-text-primary-light dark:text-text-primary-dark border border-white/50 dark:border-white/25 hover:bg-white/60 dark:hover:bg-surface-dark/60 shadow-lg shadow-black/5 dark:shadow-black/20',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-4 py-2 text-base rounded-xl',
    lg: 'px-8 py-3 text-lg rounded-2xl', // سایز بزرگتر برای دکمه اصلی
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