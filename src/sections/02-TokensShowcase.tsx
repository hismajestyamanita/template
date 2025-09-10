import React from 'react';
import Section from '@/shared/primitives/Section';
import Content from '@/shared/primitives/Content';
import Button from '@/components/Button';
import Card from '@/components/Card';
import GlassCard from '@/components/GlassCard';
import Badge from '@/components/Badge';
import Slider from '@/components/Slider';
import Accordion from '@/components/Accordion';
import Modal from '@/shared/primitives/Modal';
import { useState } from 'react';

const colorSwatches: Array<[string, string]> = [
  ['primary', 'bg-[var(--primary)]'],
  ['accent', 'bg-[var(--accent)]'],
  ['black', 'bg-[var(--black)]'],
  ['white', 'bg-[var(--white)]'],
  ['gray-50', 'bg-[var(--gray-50)]'],
  ['gray-200', 'bg-[var(--gray-200)]'],
  ['gray-500', 'bg-[var(--gray-500)]'],
  ['gray-900', 'bg-[var(--gray-900)]'],
];

export default function Showcase() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Section bg="white" bottomEdge={{ variant: 'gradient', from: 'white', to: 'black', position: 'bottom' }}>
      <Content className="text-[var(--text)]">
        <div>
          <h2 className="h2">Токены дизайна</h2>
          <p className="caption text-[var(--gray-600)]">Цвета, типографика, кнопки и карточки</p>
        </div>

        <div>
          <h3 className="button-text mb-4">Палитра</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {colorSwatches.map(([name, bgClass]) => (
              <div key={name} className="rounded-md overflow-hidden shadow-card border border-[var(--gray-200)]">
                <div className={["h-16", bgClass].join(" ")} />
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
            <div className="flex flex-wrap gap-3 items-center">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Badge color="accent">Badge</Badge>
              <Button variant="secondary" onClick={() => setModalOpen(true)}>Открыть демо‑модалку</Button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="button-text mb-4">Карточки</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated">
              <div className="h2 mb-2">Card</div>
              <p className="body text-[var(--gray-700)]">Белая карточка с тенью и радиусом из токенов.</p>
            </Card>
            <GlassCard>
              <div className="h2 mb-2 text-[var(--white)]">Glass</div>
              <p className="body text-[var(--gray-100)]">Стекло: прозрачный фон + blur + полупрозрачная рамка.</p>
            </GlassCard>
          </div>
        </div>

        <div>
          <h3 className="button-text mb-4">Слайдер</h3>
          <Slider className="reveal" options={{ align: 'start', loop: true }}>
            {[1,2,3,4].map((i) => (
              <Card key={i} variant="elevated">
                <div className="h2 mb-2">Слайд {i}</div>
                <p className="body text-[var(--gray-700)]">Пример карточки внутри слайдера на embla.</p>
              </Card>
            ))}
          </Slider>
        </div>

        <div>
          <h3 className="button-text mb-4">Accordion</h3>
          <Accordion items={[
            { id: 'a', title: 'Что такое Content?', content: 'Контейнер с max-width 1200px, паддинги 16/24/32 и ровный gap.' },
            { id: 'b', title: 'Где токены?', content: 'src/shared/design/* и CSS-переменные в styles/tokens.css.' },
          ]} />
        </div>

        <div>
          <h3 className="button-text mb-2">Как использовать</h3>
          <pre className="rounded-md bg-[var(--gray-900)] text-[var(--gray-50)] p-4 overflow-auto text-sm">
{`<button className="h-11 px-5 rounded-md bg-[var(--primary)] text-[var(--white)]">CTA</button>`}
          </pre>
        </div>
      </Content>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} labelledBy="demo-modal-title">
        <h3 id="demo-modal-title" className="h2 mb-2">Демо‑модалка</h3>
        <p className="body text-[var(--gray-700)]">Это пример модального окна на примитиве Modal с порталом, фокус‑трапом и a11y.</p>
        <div className="mt-4 flex gap-2">
          <Button onClick={() => setModalOpen(false)}>Закрыть</Button>
          <Button variant="secondary">Вторичная</Button>
        </div>
      </Modal>
    </Section>
  );
}
