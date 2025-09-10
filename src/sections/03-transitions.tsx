import React from 'react';
import Section from '@/shared/primitives/Section';
import Content from '@/shared/primitives/Content';
import ContentBoundaryHint from '@/components/ContentBoundaryHint';

function GuideNote() {
  return (
    <div className="relative p-4 rounded-md border border-[var(--gray-300)]">
      <p className="body text-[var(--gray-700)]">
        Это Content boundary: ширина ограничена 1200px, по бокам паддинги, блоки идут столбцом с равномерным gap. За этот край контент не выходит.
      </p>
      <svg className="absolute -top-4 left-4" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M2 30 L16 16 L30 30" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" />
      </svg>
      <svg className="absolute -right-4 top-1/2 -translate-y-1/2" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M2 16 L30 16" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default function Transitions() {
  return (
    <Section
      bg="black"
      topEdge={{ variant: 'gradient', from: 'white', to: 'black', position: 'top' }}
      bottomEdge={{ variant: 'rounded', from: 'black', to: 'white', position: 'bottom' }}
    >
      <Content className="text-[var(--white)]">
        <div>
          <h2 className="h2">Переходы</h2>
          <p className="caption text-[var(--gray-600)]">Rounded и Gradient варианты</p>
        </div>

        <div className="space-y-4">
          <div className="h-8 rounded-[var(--r-xl)] bg-[var(--gray-200)]" />
        </div>

        <GuideNote />
        <ContentBoundaryHint />
      </Content>
    </Section>
  );
}
