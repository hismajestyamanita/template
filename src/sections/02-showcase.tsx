import React from 'react';
import Section from '../shared/layout/Section';
import Content from '../shared/layout/Content';

const colorSwatches = [
  ['primary', 'var(--primary)'],
  ['accent', 'var(--accent)'],
  ['black', 'var(--black)'],
  ['white', 'var(--white)'],
  ['gray-50', 'var(--gray-50)'],
  ['gray-200', 'var(--gray-200)'],
  ['gray-500', 'var(--gray-500)'],
  ['gray-900', 'var(--gray-900)'],
];

export default function Showcase() {
  return (
    <Section bg="white">
      <Content className="text-[var(--text)] py-16 md:py-24" gapY="lg">
        <div>
          <h2 className="h2">Токены дизайна</h2>
          <p className="caption text-[var(--gray-600)]">Цвета, типографика, кнопки и карточки</p>
        </div>

        <div>
          <h3 className="button-text mb-4">Палитра</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {colorSwatches.map(([name, css]) => (
              <div key={name} className="rounded-md overflow-hidden shadow-card border border-[var(--gray-200)]">
                <div className="h-16" style={{ background: css }} />
                <div className="p-3 body">{name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="button-text mb-4">Типографика</h3>
            <div className="space-y-4">
              <div className="h1">Заголовок H1</div>
              <div className="h2">Заголовок H2</div>
              <div className="lead">Лид-абзац — поясняющий текст</div>
              <div className="body">Обычный текст абзаца, без цвета</div>
              <div className="caption">Мелкая подпись</div>
              <div className="button-text">Текст кнопки</div>
            </div>
          </div>
          <div>
            <h3 className="button-text mb-4">Кнопки</h3>
            <div className="flex flex-wrap gap-3">
              <button className="button-text h-11 px-5 rounded-md bg-[var(--primary)] text-[var(--white)] shadow-card">Primary</button>
              <button className="button-text h-11 px-5 rounded-md border border-[var(--gray-300)] text-[var(--text)] bg-transparent">Secondary</button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="button-text mb-4">Карточки</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg bg-[var(--white)] shadow-card border border-[var(--gray-200)] p-6">
              <div className="h2 mb-2">Card</div>
              <p className="body text-[var(--gray-700)]">Белая карточка с тенью и радиусом из токенов.</p>
            </div>
            <div className="rounded-lg bg-white/10 backdrop-blur border border-white/20 p-6" style={{ boxShadow: 'var(--shadow-float)' }}>
              <div className="h2 mb-2">Glass</div>
              <p className="body text-[var(--gray-100)]">Стекло: прозрачный фон + blur + полупрозрачная рамка.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="button-text mb-2">Как использовать</h3>
          <pre className="rounded-md bg-[var(--gray-900)] text-[var(--gray-50)] p-4 overflow-auto text-sm">
{`<button className="h-11 px-5 rounded-md bg-[var(--primary)] text-[var(--white)]">CTA</button>`}
          </pre>
        </div>
      </Content>
    </Section>
  );
}

