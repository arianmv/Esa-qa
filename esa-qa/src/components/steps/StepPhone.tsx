// src/components/steps/StepPhone.tsx

import React, { useState } from 'react';
import GlassCard from '../GlassCard';
import { Button } from '../Button';
import AlertModal from '../AlertModal';

interface StepPhoneProps {
  onNext: (data: { phone: string }) => void;
}

const StepPhone: React.FC<StepPhoneProps> = ({ onNext }) => {
  const [phone, setPhone] = useState('');
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (message: string) => {
    setAlertMessage(message);
    setAlertOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || !/^\d{11}$/.test(phone)) {
      showAlert('لطفاً یک شماره موبایل ۱۱ رقمی و معتبر وارد کنید.');
      return;
    }
    onNext({ phone });
  };

  return (
    <>
      <div className="w-full max-w-lg">
        <GlassCard>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-center">
            <h2 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">
              و در آخر، شماره تماست؟
            </h2>
            <div>
              <input
                type="tel"
                placeholder="09123456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-4 bg-white/50 dark:bg-black/20 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-accent-blue dark:focus:ring-accent-yellow text-left"
                dir="ltr"
                inputMode="tel"
              />
            </div>
            <Button type="submit" variant="primary-glass" size="lg">
              ادامه
            </Button>
          </form>
        </GlassCard>
      </div>
      <AlertModal isOpen={isAlertOpen} onClose={() => setAlertOpen(false)} message={alertMessage} />
    </>
  );
};

export default StepPhone;