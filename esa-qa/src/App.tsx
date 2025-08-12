// src/App.tsx
import LandingPage from './pages/LandingPage';

function App() {
  return (
    // دیگر نیازی به مدیریت تم در اینجا نیست
    <div className="bg-background-light dark:bg-background-dark font-sans transition-colors duration-300">
      <LandingPage />
    </div>
  );
}

export default App;