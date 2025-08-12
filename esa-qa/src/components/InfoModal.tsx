// src/components/InfoModal.tsx

import GlassCard from './GlassCard';
import { X } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // یک لایه تیره پشت پاپ‌آپ
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center" onClick={onClose}>
      <GlassCard className="max-w-md w-full relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 left-4 text-white/70 hover:text-white">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-white mb-4 text-center">درباره آزمون</h2>
        <p className="text-white/80">
          این آزمون به شما کمک می‌کند تا با شناخت بهتر سبک یادگیری و ویژگی‌های شخصیتی خود، بهترین مسیر آموزشی را انتخاب کنید. در پایان، بر اساس پاسخ‌های شما، اساتیدی که بیشترین هماهنگی را با شما دارند، پیشنهاد داده خواهند شد.
        </p>
      </GlassCard>
    </div>
  );
};

export default InfoModal;