import React, { useState } from 'react';
import Section from '@/shared/primitives/Section';
import Content from '@/shared/primitives/Content';
import UnifiedSignupModal from '@/shared/forms/UnifiedSignupModal';
import Button from '@/components/Button';

export default function CTA() {
  const [open, setOpen] = useState(false);
  return (
    <Section bg="black">
      <Content className="text-[var(--white)] items-start" gapY="md">
        <h2 className="h2">Готовы начать?</h2>
        <p className="lead text-[var(--gray-200)]">Оставьте номер — перезвоним и всё настроим</p>
        <Button size="lg" onClick={() => setOpen(true)} aria-label="Оставить заявку">Оставить заявку</Button>
        <UnifiedSignupModal open={open} onClose={() => setOpen(false)} />
      </Content>
    </Section>
  );
}

