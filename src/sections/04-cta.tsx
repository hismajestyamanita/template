import React, { useState } from 'react';
import Section from '../shared/layout/Section';
import Content from '../shared/layout/Content';
import UnifiedSignupModal from '../shared/forms/UnifiedSignupModal';

export default function CTA() {
  const [open, setOpen] = useState(false);
  return (
    <Section bg="black">
      <Content className="text-white py-16 md:py-24 items-start" gapY="md">
        <h2 className="h2">Готовы начать?</h2>
        <p className="lead text-[var(--gray-200)]">Оставьте номер — перезвоним и всё настроим</p>
        <button onClick={() => setOpen(true)} className="button-text h-12 px-6 rounded-md bg-[var(--primary)] text-[var(--white)]">
          Оставить заявку
        </button>
        <UnifiedSignupModal open={open} onClose={() => setOpen(false)} />
      </Content>
    </Section>
  );
}

