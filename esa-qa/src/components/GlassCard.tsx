// src/components/GlassCard.tsx

import React from 'react';
import { cn } from '../utils/cn';

// ۱. پراپ‌های جدید را به اینترفیس اضافه می‌کنیم
interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', ...props }) => {
  return (
    <div
      className={cn(
        'bg-surface-light/50 dark:bg-surface-dark/50', // کلید اصلی افکت شیشه
        'backdrop-blur-xl',
        'rounded-3xl',
        'border border-white/20',
        'shadow-2xl shadow-black/10',
        'p-8',
        'transition-all duration-300',
        className
      )}
            // ۲. تمام پراپ‌های اضافی (مثل onClick) را به div اصلی منتقل می‌کنیم
      {...props} 
    >
      {children}
    </div>
  );
};

export default GlassCard;