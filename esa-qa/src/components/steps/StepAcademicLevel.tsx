// src/components/steps/StepAcademicLevel.tsx

import React, { useState } from 'react';
import GlassCard from '../GlassCard';
import { Button } from '../Button';
import AlertModal from '../AlertModal';
import { ChevronDown } from 'lucide-react'; // ۱. آیکون جدید برای دراپ‌داون

interface StepAcademicLevelProps {
  onNext: (data: { academicLevel: string }) => void;
}

const StepAcademicLevel: React.FC<StepAcademicLevelProps> = ({ onNext }) => {
  const [academicLevel, setAcademicLevel] = useState('');
  const [isAlertOpen, setAlertOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!academicLevel) {
      setAlertOpen(true);
      return;
    }
    onNext({ academicLevel });
  };

  // ۲. پایه‌های جدید را به لیست اضافه می‌کنیم
  const academicLevels = ["هفتم", "هشتم", "نهم", "دهم", "یازدهم", "دوازدهم", "فارغ‌التحصیل"];

  return (
    <>
      <div className="w-full max-w-lg">
        <GlassCard>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-center">
            <h2 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">
              در کدام پایه تحصیل می‌کنی؟
            </h2>
            {/* ۳. ظاهر select را با این ساختار جدید بازطراحی می‌کنیم */}
            <div className="relative w-full">
              <select
                value={academicLevel}
                onChange={(e) => setAcademicLevel(e.target.value)}
                className="w-full p-4 bg-white/50 dark:bg-black/20 rounded-xl text-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-accent-blue dark:focus:ring-accent-yellow text-center appearance-none"
              >
                <option value="" disabled className="text-gray-500">پایه تحصیلی خود را انتخاب کنید</option>
                {academicLevels.map(level => (
                  <option key={level} value={level} className="bg-surface-light dark:bg-surface-dark">{level}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-text-primary-light dark:text-text-primary-dark">
                <ChevronDown size={24} />
              </div>
            </div>
            <Button type="submit" variant="primary-glass" size="lg">
              بعدی
            </Button>
          </form>
        </GlassCard>
      </div>
      <AlertModal 
        isOpen={isAlertOpen} 
        onClose={() => setAlertOpen(false)} 
        message="لطفاً پایه تحصیلی خود را انتخاب کنید." 
      />
    </>
  );
};

export default StepAcademicLevel;