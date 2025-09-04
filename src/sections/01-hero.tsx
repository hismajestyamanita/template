import React from 'react';
import Section from '../shared/layout/Section';
import Content from '../shared/layout/Content';
import useReveal from '../shared/hooks/useReveal';

export default function Hero() {
  const titleRef = useReveal<HTMLDivElement>();
  const artRef = useReveal<HTMLDivElement>();

  return (
    <Section id="quiz" bg="black">
      <Content className="text-[var(--white)] py-16 md:py-24 items-start gap-6" gapY="lg">
        <div ref={titleRef} className="max-w-2xl">
          <h1 className="h1 mb-4">
            Сделаем вам сайт, который работает
            <span className="accent"> — и продаёт</span>
          </h1>
          <p className="lead text-[var(--gray-200)] mb-6">
            Чёткая структура, аккуратная типографика, быстрая загрузка и понятные CTA. Без воды.
          </p>
          <div className="flex gap-3">
            <a
              href="#contact"
              className="button-text h-12 px-6 rounded-md bg-[var(--primary)] text-[var(--white)] shadow-card"
            >
              Обсудить проект
            </a>
            <a
              href="#work"
              className="button-text h-12 px-6 rounded-md border border-[var(--gray-600)] text-[var(--white)]/90"
            >
              Портфолио
            </a>
          </div>
        </div>

        {/* Visuals */}
        <div ref={artRef} className="w-full relative">
          <div
            className="absolute inset-0 -z-10 opacity-30"
            style={{
              background:
                'radial-gradient(600px 200px at 20% 20%, rgba(124,242,61,0.25), rgba(0,0,0,0)), radial-gradient(600px 200px at 70% 30%, rgba(61,157,242,0.25), rgba(0,0,0,0))',
              filter: 'blur(20px)'
            }}
            aria-hidden
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <img
              src="/assets/visuals/01-hero/01-hero-boy-01.webp"
              alt="Hero illustration"
              className="w-full h-auto rounded-lg border border-white/10 shadow-float"
            />
            <div className="relative">
              <img
                src="/assets/visuals/01-hero/01-hero-cube.webp"
                alt="UI elements"
                className="w-3/4 md:w-full h-auto mx-auto rounded-lg border border-white/10 shadow-card"
              />
            </div>
          </div>
        </div>
      </Content>
    </Section>
  );
}

