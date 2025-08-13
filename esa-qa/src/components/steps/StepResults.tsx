// src/components/steps/StepResults.tsx

import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import GlassCard from '../GlassCard';
import { TeacherCard } from '../TeacherCard';

// این داده‌ها از کامپوننت والد ارسال خواهند شد
interface ResultsProps {
  results: {
    primaryArchetype: { name: string; description: string };
    traitCounts: { trait: string; count: number }[];
  }
}

const StepResults: React.FC<ResultsProps> = ({ results }) => {
  const { primaryArchetype, traitCounts } = results;

  return (
    <div className="w-full max-w-2xl text-center">
      <h1 className="text-5xl font-bold text-white mb-4 animate-pulse">بوم! آرک‌تایپ تو اینه:</h1>
      <GlassCard className="mb-8">
        <h2 className="text-4xl font-bold text-accent-yellow mb-2">{primaryArchetype.name}</h2>
        <p className="text-lg text-text-primary-light dark:text-text-primary-dark">{primaryArchetype.description}</p>
      </GlassCard>

      <GlassCard className="mb-8 p-4 h-80">
        <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">پروفایل شخصیتی شما</h3>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={traitCounts}>
            <PolarGrid />
            <PolarAngleAxis dataKey="trait" />
            <Radar name="User" dataKey="count" stroke="#facc15" fill="#facc15" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </GlassCard>

      <div>
        <h3 className="text-2xl font-bold text-white mb-4">اساتید پیشنهادی برای شما</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TeacherCard name="استاد رضایی" specialty="متخصص برنامه‌ریزی و مدیریت زمان" isRecommended={primaryArchetype.name.includes('استراتژیست')} />
          <TeacherCard name="دکتر احمدی" specialty="متخصص تحلیل و حل مسئله" isRecommended={primaryArchetype.name.includes('تحلیل‌گر')} />
          {/* ... بقیه اساتید */}
        </div>
      </div>
    </div>
  );
};

export default StepResults;