// src/components/TeacherCard.tsx

import React, { useState } from 'react';
import { Button } from './Button';
import Confetti from 'react-confetti';

interface TeacherCardProps {
  name: string;
  specialty: string;
  isRecommended?: boolean;
}

export const TeacherCard: React.FC<TeacherCardProps> = ({ name, specialty, isRecommended = false }) => {
  const [isGiftClaimed, setGiftClaimed] = useState(false);

  const handleClaimGift = () => {
    setGiftClaimed(true);
  };

  return (
    <div className={`bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md rounded-2xl p-4 text-center border ${isRecommended ? 'border-accent-yellow' : 'border-transparent'}`}>
      {isGiftClaimed && <Confetti recycle={false} numberOfPieces={200} />}
      <img src={`https://i.pravatar.cc/150?u=${name}`} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-white" />
      <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">{name}</h3>
      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-4">{specialty}</p>
      <Button onClick={handleClaimGift} disabled={isGiftClaimed} variant={isGiftClaimed ? 'secondary' : 'primary'} size="sm">
        {isGiftClaimed ? 'دریافت شد!' : 'دریافت جلسه رایگان'}
      </Button>
    </div>
  );
};