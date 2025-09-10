import React from 'react';
import Section from '@/shared/primitives/Section';
import Content from '@/shared/primitives/Content';
import Edge from '@/shared/primitives/Edge';
import useReveal from '@/shared/hooks/useReveal';
import Button from '@/components/Button';

export default function Hero() {
  const titleRef = useReveal<HTMLDivElement>();
  const artRef = useReveal<HTMLDivElement>();

  return (
    <Section id="quiz" bg="black">
      <Content className="text-[var(--white)] items-start" gapY="lg">
        <div ref={titleRef} className="max-w-2xl reveal">
          <h1 className="h1 mb-4 uppercase">
            MODERN WEB DESIGN TEMPLATE
            <span className="accent"> CLEAN AND FLEXIBLE</span>
          </h1>
          <p className="lead text-[var(--gray-200)] mb-6">
            A neutral placeholder lead paragraph without invalid characters.
          </p>
          <div className="flex gap-3">
            <Button variant="primary" size="lg" aria-label="Обсудить проект" onClick={() => {}}>
              Обсудить проект
            </Button>
            <Button variant="secondary" size="lg" aria-label="Портфолио" onClick={() => {}}>
              Портфолио
            </Button>
          </div>
        </div>

        {/* Visuals */}
        <div ref={artRef} className="w-full reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <img
              src="/assets/visuals/01-hero/01-hero-boy-01.webp"
              alt="Hero illustration"
              className="w-full h-auto rounded-lg border border-white/10 shadow-float"
              loading="lazy"
              decoding="async"
            />
            <div className="relative">
              <img
                src="/assets/visuals/01-hero/01-hero-cube.webp"
                alt="UI elements"
                className="w-3/4 md:w-full h-auto mx-auto rounded-lg border border-white/10 shadow-card"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </Content>
      <Edge variant="rounded" position="bottom" toColor="white" />
    </Section>
  );
}

