// src/App.tsx

import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import QuestionnaireFlow from './pages/QuestionnaireFlow'; // ایمپورت کردن جریان جدید

function App() {
  // یک state برای کنترل نمایش صفحه لندینگ یا پرسشنامه
  const [isQuizStarted, setQuizStarted] = useState(false);

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-sans transition-colors duration-300">
      {isQuizStarted ? (
        <QuestionnaireFlow />
      ) : (
        <LandingPage onStartQuiz={() => setQuizStarted(true)} />
      )}
    </div>
  );
}

export default App;