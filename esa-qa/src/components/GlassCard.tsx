// src/components/GlassCard.tsx

import React from 'react';
import { cn } from '../utils/cn';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
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
    >
      {children}
    </div>
  );
};

export default GlassCard;