// src/pages/QuestionnaireFlow.tsx

import React, { useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion'; // ایمپورت‌ها حذف شدند
import StepName from '../components/steps/StepName';
import StepEmail from '../components/steps/StepEmail';
import StepAcademicLevel from '../components/steps/StepAcademicLevel';
import StepFieldOfStudy from '../components/steps/StepFieldOfStudy';
import StepPhone from '../components/steps/StepPhone';

const QuestionnaireFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    academicLevel: '',
    fieldOfStudy: '',
  });

  const handleNextStep = (data: Partial<typeof userData>) => {
    setUserData(prev => ({ ...prev, ...data }));
    setCurrentStep(prev => prev + 1);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <StepName onNext={handleNextStep} />;
      case 1:
        return <StepEmail onNext={handleNextStep} />;
      case 2:
        return <StepPhone onNext={handleNextStep} />;
      case 3:
        return <StepAcademicLevel onNext={handleNextStep} />;
      case 4:
        return <StepFieldOfStudy onNext={handleNextStep} />;
      default:
        return <div>شروع سوالات اصلی...</div>; // اینجا سوالات اصلی آزمون شروع می‌شود
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden bg-background-light dark:bg-background-dark">
      {/* تمام کدهای مربوط به انیمیشن حذف شد و فقط کامپوننت اصلی نمایش داده می‌شود */}
      {renderCurrentStep()}
    </div>
  );
};

export default QuestionnaireFlow;