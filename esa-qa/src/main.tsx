// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx' // <-- ایمپورت کن

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider> {/* <-- برنامه را داخل آن قرار بده */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)