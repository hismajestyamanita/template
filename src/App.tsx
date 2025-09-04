import React from 'react';
import { Hero, Showcase, Transitions, CTA } from './sections';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <main>
        <Hero />
        <Showcase />
        <Transitions />
        <CTA />
      </main>
    </div>
  );
}

export default App;
