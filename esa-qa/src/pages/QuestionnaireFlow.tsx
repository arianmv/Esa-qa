// src/pages/QuestionnaireFlow.tsx

import React, { useEffect, useState } from 'react';
import StepName from '../components/steps/StepName';
import StepEmail from '../components/steps/StepEmail';
import StepAcademicLevel from '../components/steps/StepAcademicLevel';
import StepFieldOfStudy from '../components/steps/StepFieldOfStudy';
import StepPhone from '../components/steps/StepPhone';
import StepQuestion from '../components/steps/StepQuestion';
import StepLoadingResults from '../components/steps/StepLoadingResults';
import { quizQuestions } from '../data/quizData';
import { AnimatePresence, motion } from 'framer-motion';
import StepResults from '../components/steps/StepResults';

const archetypes: { [key: string]: { name: string; description: string } } = {
  Planner: { name: "معمار استراتژیست", description: "شما عاشق نظم و برنامه‌ریزی هستید و قبل از هر حرکتی، نقشه راه را ترسیم می‌کنید." },
  Analytical: { name: "تحلیل‌گر دقیق", description: "شما با تحلیل عمیق مسائل و پیدا کردن ریشه مشکلات، به بهترین راه‌حل‌ها می‌رسید." },
  // ... بقیه آرک‌تایپ‌ها
  Default: { name: "شخصیت چندوجهی", description: "شما ترکیبی از ویژگی‌های مختلف هستید که به شما انعطاف‌پذیری بالایی می‌دهد." }
};

const QuestionnaireFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    academicLevel: '',
    fieldOfStudy: '',
  });
  const [answers, setAnswers] = useState<{ questionId: number, trait: string }[]>([]);
  const [results, setResults] = useState<any>(null);

  // ۱. تعریف متغیرهای گمشده در اینجا
  const infoCollectionSteps = 5;
  const totalQuestions = quizQuestions.length;
  const loadingStep = infoCollectionSteps + totalQuestions;
  const resultsStep = loadingStep + 1;


  const handleNextStep = (data: object) => {
    if (currentStep < infoCollectionSteps) {
      // این بخش برای اطلاعات اولیه کاربر است و درست کار می‌کند
      setUserData(prev => ({ ...prev, ...data }));
    } else {
      // این بخش برای پاسخ سوالات است
      // ما با as به تایپ‌اسکریپت می‌گوییم که نوع data را می‌شناسیم
      setAnswers(prev => [...prev, data as { questionId: number; trait: string }]);
    }
    setCurrentStep(prev => prev + 1);
  };

  useEffect(() => {
    // حالا این بخش به درستی کار خواهد کرد
    if (currentStep === loadingStep) {
      const traitCounts: { [key: string]: number } = {};
      answers.forEach(answer => {
        traitCounts[answer.trait] = (traitCounts[answer.trait] || 0) + 1;
      });

      let primaryTrait = 'Default';
      let maxCount = 0;
      Object.entries(traitCounts).forEach(([trait, count]) => {
        if (count > maxCount) {
          maxCount = count;
          primaryTrait = trait;
        }
      });
      
      const finalResults = {
        primaryArchetype: archetypes[primaryTrait] || archetypes.Default,
        traitCounts: Object.entries(traitCounts).map(([trait, count]) => ({ trait, count })),
      };

      setTimeout(() => {
        setResults(finalResults);
        setCurrentStep(resultsStep);
      }, 3000);
    }
  }, [currentStep, answers, loadingStep, resultsStep]); // ۲. متغیرها را به لیست وابستگی‌ها هم اضافه می‌کنیم

  const renderCurrentStep = () => {
    // ۳. منطق رندر را کمی تمیزتر می‌کنیم
    if (currentStep < infoCollectionSteps) {
      switch (currentStep) {
        case 0: return <StepName onNext={handleNextStep} />;
        case 1: return <StepEmail onNext={handleNextStep} />;
        case 2: return <StepPhone onNext={handleNextStep} />;
        case 3: return <StepAcademicLevel onNext={handleNextStep} />;
        case 4: return <StepFieldOfStudy onNext={handleNextStep} />;
        default: return null;
      }
    }

    const questionIndex = currentStep - infoCollectionSteps;
    if (questionIndex < totalQuestions) {
      return <StepQuestion 
                question={quizQuestions[questionIndex]} 
                onNext={handleNextStep}
                currentQuestionIndex={questionIndex}
                totalQuestions={totalQuestions}
             />;
    }

    if (currentStep === loadingStep) {
      return <StepLoadingResults />;
    }

    if (currentStep === resultsStep && results) {
      return <StepResults results={results} />;
    }

    return null; // در حالت‌های دیگر، چیزی نمایش نده
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden bg-background-light dark:bg-background-dark">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg"
        >
          {renderCurrentStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuestionnaireFlow;