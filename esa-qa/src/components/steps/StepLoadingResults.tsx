// src/components/steps/StepLoadingResults.tsx

import React from 'react';
import GlassCard from '../GlassCard';
import { Loader2 } from 'lucide-react'; // ۱. آیکون برای اسپینر لودینگ

const StepLoadingResults: React.FC = () => {
  return (
    <div className="w-full max-w-lg">
      {/* ۲. یک کلاس برای دادن ته‌رنگ زرد به کارت اضافه می‌کنیم */}
      <GlassCard className="bg-yellow-400/10 dark:bg-yellow-500/10 border-yellow-500/20">
        <div className="flex flex-col items-center justify-center gap-6 text-center p-8">
          
          {/* ۳. آیکون لودینگ با انیمیشن چرخش */}
          <Loader2 
            className="text-accent-yellow animate-spin"
            size={48} 
          />
          
          <h2 className="text-2xl font-bold text-text-primary-light dark:text-yellow-100">
            در حال تحلیل پاسخ‌ها...
          </h2>
          <p className="text-text-secondary-light dark:text-yellow-100/70">
            هوش مصنوعی در حال بررسی شخصیت شماست. لطفاً کمی صبر کنید!
          </p>
        </div>
      </GlassCard>
    </div>
  );
};

export default StepLoadingResults;