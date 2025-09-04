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
          <h1 className="h1 mb-4 uppercase">
            Ð¡Ð´ÐµÐ»Ð°ÐµÐ¼ Ð²Ð°Ð¼ ÑÐ°Ð¹Ñ‚, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÐµÑ‚
            <span className="accent"> â€” Ð¸ Ð¿Ñ€Ð¾Ð´Ð°Ñ‘Ñ‚</span>
          </h1>
          <p className="lead text-[var(--gray-200)] mb-6">
            Ð§Ñ‘Ñ‚ÐºÐ°Ñ ÑÑ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ð°, Ð°ÐºÐºÑƒÑ€Ð°Ñ‚Ð½Ð°Ñ Ñ‚Ð¸Ð¿Ð¾Ð³Ñ€Ð°Ñ„Ð¸ÐºÐ°, Ð±Ñ‹ÑÑ‚Ñ€Ð°Ñ Ð·Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° Ð¸ Ð¿Ð¾Ð½ÑÑ‚Ð½Ñ‹Ðµ CTA. Ð‘ÐµÐ· Ð²Ð¾Ð´Ñ‹.
          </p>
          <div className="flex gap-3">
            <a
              href="#contact"
              className="button-text h-12 px-6 rounded-md bg-[var(--primary)] text-[var(--white)] shadow-card"
            >
              ÐžÐ±ÑÑƒÐ´Ð¸Ñ‚ÑŒ Ð¿Ñ€Ð¾ÐµÐºÑ‚
            </a>
            <a
              href="#work"
              className="button-text h-12 px-6 rounded-md border border-[var(--gray-600)] text-[var(--white)]/90"
            >
              ÐŸÐ¾Ñ€Ñ‚Ñ„Ð¾Ð»Ð¸Ð¾
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
                    <div className="mt-6 flex items-end justify-center gap-0" aria-hidden="true">
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
            <div className="w-16 h-64 bg-blue-500 rounded-t-full"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
        </div>
      </Content>
    </Section>
  );
}





