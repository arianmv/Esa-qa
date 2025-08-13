// src/components/steps/StepQuestion.tsx

import React, { useState } from 'react';
import GlassCard from '../GlassCard';
import { Button } from '../Button';

// ... (اینترفیس‌ها بدون تغییر باقی می‌مانند)
interface QuestionOption {
  text: string;
  trait: string;
}
interface Question {
  id: number;
  questionText: string;
  options: QuestionOption[];
  skill: string;
}

interface StepQuestionProps {
  question: Question;
  onNext: (answer: { questionId: number, trait: string }) => void;
  currentQuestionIndex: number; // پراپ جدید برای نوار پیشرفت
  totalQuestions: number;      // پراپ جدید برای نوار پیشرفت
}

const StepQuestion: React.FC<StepQuestionProps> = ({ question, onNext, currentQuestionIndex, totalQuestions }) => {
  // ۱. استیت برای نگهداری گزینه انتخاب شده
  const [selectedTrait, setSelectedTrait] = useState<string | null>(null);

  const handleOptionClick = (trait: string) => {
    // ۲. گزینه انتخاب شده را در استیت ذخیره می‌کنیم تا رنگش عوض شود
    setSelectedTrait(trait);

    // ۳. با یک تاخیر کوتاه، به سوال بعدی می‌رویم تا کاربر تغییر رنگ را ببیند
    setTimeout(() => {
      onNext({ questionId: question.id, trait });
      setSelectedTrait(null); // استیت را برای سوال بعدی ریست می‌کنیم
    }, 400); // تاخیر ۴۰۰ میلی‌ثانیه‌ای
  };

  // ۴. محاسبه درصد پیشرفت
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="w-full max-w-lg">
      <GlassCard>
        <div className="flex flex-col gap-6 text-center">

          <h2 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark leading-relaxed">
            {question.questionText}
          </h2>
          
          <div className="flex flex-col gap-4">
            {question.options.map((option) => (
              <Button 
                key={option.trait}
                // ۶. تغییر استایل دکمه بر اساس انتخاب کاربر
                variant={selectedTrait === option.trait ? 'primary' : 'secondary'}
                size="md"
                className="w-full text-right"
                onClick={() => handleOptionClick(option.trait)}
              >
                {option.text}
              </Button>
            ))}
          </div>
        </div>
                  {/* ۵. نوار پیشرفت */}
          <div className="w-full bg-white/10 rounded-full h-2">
            <div 
              className="bg-accent-yellow h-2 rounded-full transition-all duration-500 mt-3"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
      </GlassCard>
      
    </div>
  );
};

export default StepQuestion;