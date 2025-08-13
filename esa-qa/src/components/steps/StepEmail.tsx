// src/components/steps/StepEmail.tsx

import React, { useState } from 'react';
import GlassCard from '../GlassCard';
import { Button } from '../Button';
import AlertModal from '../AlertModal'; // ۱. پاپ‌آپ جدید را ایمپورت می‌کنیم

interface StepEmailProps {
  onNext: (data: { email: string }) => void;
}

const StepEmail: React.FC<StepEmailProps> = ({ onNext }) => {
  const [email, setEmail] = useState('');
  
  // ۲. استیت‌های لازم برای مدیریت پاپ‌آپ را اضافه می‌کنیم
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // یک تابع کمکی برای نمایش پاپ‌آپ
  const showAlert = (message: string) => {
    setAlertMessage(message);
    setAlertOpen(true);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      // ۳. به جای setError، تابع showAlert را فراخوانی می‌کنیم
      showAlert('لطفاً ایمیل خود را وارد کنید.');
      return;
    }
    
    if (!validateEmail(email)) {
      showAlert('فرمت ایمیل وارد شده صحیح نیست.');
      return;
    }

    onNext({ email });
  };

  return (
    // ۴. همه چیز را داخل یک Fragment قرار می‌دهیم
    <>
      <div className="w-full max-w-lg">
        <GlassCard>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-center">
            <h2 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">
              عالیه! حالا ایمیلت رو وارد کن.
            </h2>
            
          <div>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-white/50 dark:bg-black/20 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-accent-blue dark:focus:ring-accent-yellow text-left" // ۱. کلاس text-left اضافه شد
              inputMode="email"
              dir="ltr" // ۲. این ویژگی جهت را درست می‌کند
            />
          </div>

            <Button type="submit" variant="primary-glass" size="lg">
              بعدی
            </Button>
          </form>
        </GlassCard>
      </div>

      {/* ۵. کامپوننت AlertModal را اینجا رندر می‌کنیم */}
      <AlertModal 
        isOpen={isAlertOpen} 
        onClose={() => setAlertOpen(false)} 
        message={alertMessage} 
      />
    </>
  );
};

export default StepEmail;