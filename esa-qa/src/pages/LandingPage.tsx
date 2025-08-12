// src/pages/LandingPage.tsx

import React from 'react';
import { useState } from 'react'; // ایمپورت کردن useState
import GlassCard from '../components/GlassCard';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import InfoModal from '../components/InfoModal'; // ایمپورت کردن پاپ‌آپ
import { Info } from 'lucide-react'; // ایمپورت کردن آیکون "i"
import Footer from '../components/Footer'; // ایمپورت کردن فوتر

const LandingPage: React.FC = () => {
      // ۱. استیت برای کنترل باز یا بسته بودن پاپ‌آپ
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  return (
    // به جای عکس، از کلاس‌های گرادیان و انیمیشن استفاده می‌کنیم
    <div 
      className="
        relative min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden
        bg-gradient-to-br from-sky-500 via-blue-700 to-blue-900
        dark:from-blue-800 dark:via-blue-900 dark:to-gray-900
        animated-gradient pt-32
      "
    >
      <Header />

      <main className="relative z-10 text-center">
        <GlassCard className="animate-float relative">

                      {/* ۲. دکمه آیکون اطلاعات */}
          <button 
            onClick={() => setInfoModalOpen(true)}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            aria-label="اطلاعات بیشتر"
          >
            <Info size={24} />
          </button>

          {/* اینجا در آینده لوگوی شما قرار می‌گیرد */}
          <div className="mb-6">
             <span className="inline-block p-4 bg-white/20 rounded-2xl border border-white/30">
                {/*  */}
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white/80 ">
                  <path d="M9 12.75L11.25 15L15 9.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.341 3 16.4839 4.02237 18 5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
             </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 dark:text-white">
            آرک‌تایپ یادگیری خود را کشف کن
          </h1>
          <p className="text-slate-800 mb-8 max-w-md mx-auto dark:text-white/80">
            با پاسخ به چند سوال ساده، سبک یادگیری خودت را بشناس و مسیر موفقیتت را سریع‌تر پیدا کن.
          </p>
          <Button variant="primary" size="lg">
            شروع آزمون
          </Button>
        </GlassCard>
      </main>

      <Footer/> {/* افزودن فوتر در اینجا */}

            {/* ۳. رندر کردن کامپوننت پاپ‌آپ */}
      <InfoModal isOpen={isInfoModalOpen} onClose={() => setInfoModalOpen(false)} />

      {/* اینجا فوتر را اضافه خواهیم کرد */}

    </div>
  );
};

export default LandingPage;