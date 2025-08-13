// src/components/steps/StepFieldOfStudy.tsx

import React, { useState } from 'react';
import GlassCard from '../GlassCard';
import { Button } from '../Button';
import AlertModal from '../AlertModal';
import { ChevronDown } from 'lucide-react'; // آیکون جدید

interface StepFieldOfStudyProps {
  onNext: (data: { fieldOfStudy: string }) => void;
}

const StepFieldOfStudy: React.FC<StepFieldOfStudyProps> = ({ onNext }) => {
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [isAlertOpen, setAlertOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fieldOfStudy) {
      setAlertOpen(true);
      return;
    }
    onNext({ fieldOfStudy });
  };

  const fields = ["ریاضی و فیزیک", "علوم تجربی", "ادبیات و علوم انسانی"];

  return (
    <>
      <div className="w-full max-w-lg">
        <GlassCard>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-center">
            <h2 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">
              و رشته تحصیلیت چیه؟
            </h2>
            <div className="relative w-full">
              <select
                value={fieldOfStudy}
                onChange={(e) => setFieldOfStudy(e.target.value)}
                className="w-full p-4 bg-white/50 dark:bg-black/20 rounded-xl text-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-accent-blue dark:focus:ring-accent-yellow text-center appearance-none"
              >
                <option value="" disabled>رشته تحصیلی خود را انتخاب کنید</option>
                {fields.map(field => (
                  <option key={field} value={field} className="bg-surface-light dark:bg-surface-dark">{field}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-text-primary-light dark:text-text-primary-dark">
                <ChevronDown size={24} />
              </div>
            </div>
            <Button type="submit" variant="primary-glass" size="lg">
              شروع سوالات آزمون
            </Button>
          </form>
        </GlassCard>
      </div>
      <AlertModal 
        isOpen={isAlertOpen} 
        onClose={() => setAlertOpen(false)} 
        message="لطفاً رشته تحصیلی خود را انتخاب کنید." 
      />
    </>
  );
};

export default StepFieldOfStudy;