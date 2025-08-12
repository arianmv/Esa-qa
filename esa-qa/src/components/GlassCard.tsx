// src/components/GlassCard.tsx
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string; // برای افزودن کلاس‌های دلخواه دیگر
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`
        bg-surface-light/50 dark:bg-surface-dark/50  // کلید اصلی افکت شیشه!
        backdrop-blur-xl // تاری پس‌زمینه (می‌توانید sm, md, lg, xl را امتحان کنید)
        rounded-3xl      // گوشه‌های گردتر برای حس مدرن
        border border-white/20 // حاشیه نازک و روشن برای لبه شیشه
        shadow-2xl       // سایه قوی‌تر برای عمق بیشتر
        p-8              // فاصله داخلی
        transition-all duration-300 // انیمیشن نرم برای هر تغییر
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;