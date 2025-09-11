import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ErrorBoundary from '@/shared/ErrorBoundary';
// Dev helper: log content width for acceptance check
if (import.meta.env.DEV) {
  const logWidth = () => {
    const el = document.querySelector('.max-w-content') as HTMLElement | null;
    if (el) {
      const w = Math.round(el.getBoundingClientRect().width);
      // eslint-disable-next-line no-console
      console.log('CONTENT WIDTH:', w);
    }
  };
  window.addEventListener('load', logWidth);
  window.addEventListener('resize', logWidth);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);

// analytics removed for template cleanliness
