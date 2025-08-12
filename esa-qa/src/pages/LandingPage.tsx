// src/pages/LandingPage.tsx
import React from 'react';
import GlassCard from '../components/GlassCard';
import { Header } from '../components/Header'; // <-- هدر جدید
import { Button } from '../components/Button'; // <-- دکمه جدید

// دیگر نیازی به دریافت پراپ برای تم نیست
const LandingPage: React.FC = () => {
  return (
    <div 
      className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/abstract-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background-light/30 via-transparent to-background-dark/30"></div>

      <Header /> {/* <-- به سادگی رندر می‌شود */}

      <main className="relative z-10">
        <GlassCard className="text-center animate-float">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            مسیر یادگیری خود را کشف کن
          </h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8 max-w-md mx-auto">
            با پاسخ به چند سوال ساده، سبک یادگیری خودت را بشناس و بهترین اساتید را پیدا کن.
          </p>
          <Button variant="primary" size="lg"> {/* <-- استفاده از دکمه اصلی */}
            بزن بریم!
          </Button>
        </GlassCard>
      </main>
    </div>
  );
};

export default LandingPage;