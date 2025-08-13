// src/components/steps/StepName.tsx

import React, { useState } from 'react'; // ۱. فقط useState را از React ایمپورت می‌کنیم
import GlassCard from '../GlassCard';
import { Button } from '../Button';

// تعریف پراپ‌ها بدون تغییر باقی می‌ماند
interface StepNameProps {
  onNext: (data: { fullName: string }) => void;
}

const StepName: React.FC<StepNameProps> = ({ onNext }) => {
  // ۲. به جای useForm، از useState برای نگهداری مقدار فیلد استفاده می‌کنیم
  const [fullName, setFullName] = useState('');
  // یک استیت برای نمایش پیام خطا
  const [error, setError] = useState('');

  // ۳. یک تابع برای مدیریت ارسال فرم
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // جلوگیری از رفرش شدن صفحه
    
    // اعتبارسنجی ساده: آیا فیلد خالی است؟
    if (!fullName.trim()) {
      setError('لطفاً نام خود را وارد کنید.');
      return; // اگر خالی بود، ادامه نده
    }
    
    // اگر معتبر بود، خطا را پاک کن و به مرحله بعد برو
    setError('');
    onNext({ fullName });
  };

  return (
    <div className="w-full max-w-lg">
      <GlassCard>
        {/* ۴. فرم به تابع handleSubmit جدید ما متصل می‌شود */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-center">
          <h2 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">
            سلام! اسمت چیه؟
          </h2>
          
          <div>
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              value={fullName} // مقدار فیلد از استیت خوانده می‌شود
              onChange={(e) => setFullName(e.target.value)} // با هر تغییر، استیت آپدیت می‌شود
              className="w-full p-4 bg-white/50 dark:bg-black/20 rounded-xl text-center text-lg focus:outline-none focus:ring-2 focus:ring-accent-blue dark:focus:ring-accent-yellow"
            />
            {/* نمایش خطا در صورت وجود */}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>

          <Button type="submit" variant="primary-glass" size="lg">
            بعدی
          </Button>
        </form>
      </GlassCard>
    </div>
  );
};

export default StepName;