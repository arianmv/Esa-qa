// src/components/AlertModal.tsx

import React from 'react';
import GlassCard from './GlassCard';
import { Button } from './Button';
import { AlertTriangle } from 'lucide-react';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const AlertModal: React.FC<AlertModalProps> = ({ isOpen, onClose, message }) => {
  // اگر پاپ‌آپ باز نباشد، هیچی نمایش نده
  if (!isOpen) {
    return null;
  }

  return (
    // یک لایه نیمه‌شفاف برای پس‌زمینه
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* با کلیک روی خود کارت، پاپ‌آپ بسته نمی‌شود */}
      <div onClick={(e) => e.stopPropagation()}>
        <GlassCard className="text-center flex flex-col items-center gap-4 max-w-sm">
          <div className="text-red-500 bg-red-500/10 p-3 rounded-full">
            <AlertTriangle size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
            خطا!
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            {message}
          </p>
          <Button onClick={onClose} variant="primary" size="md" className="mt-4">
            متوجه شدم
          </Button>
        </GlassCard>
      </div>
    </div>
  );
};

export default AlertModal;