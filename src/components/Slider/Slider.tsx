import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel-react';

type Props = {
  options?: EmblaOptionsType;
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  autoplay?: boolean;
  intervalMs?: number;
};

const dotBase = 'w-2 h-2 rounded-full bg-[var(--gray-300)] aria-[current=true]:bg-[var(--primary)]';
const arrowBase = 'button-text inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--white)] text-[var(--text)] shadow-card border border-[var(--gray-200)] hover:bg-[var(--gray-50)]';

const Slider: React.FC<Props> = ({ options, children, className = '', autoplay = true, intervalMs = 4000 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [hovered, setHovered] = useState(false);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', () => onSelect(emblaApi));
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !autoplay) return;
    let t: number | undefined;
    const tick = () => {
      t = window.setTimeout(() => {
        if (!hovered) emblaApi.scrollNext();
        tick();
      }, intervalMs);
    };
    tick();
    return () => {
      if (t) clearTimeout(t);
    };
  }, [emblaApi, autoplay, intervalMs, hovered]);

  return (
    <div className={['w-full', className].join(' ')} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="relative" aria-roledescription="carousel">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {React.Children.map(children, (child, i) => (
              <div className="min-w-0 flex-[0_0_100%] p-2" aria-roledescription="slide" aria-label={`${i + 1} of ${React.Children.count(children)}`}>
                {child}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button className={arrowBase} aria-label="Previous" onClick={() => emblaApi?.scrollPrev()}>{'‹'}</button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button className={arrowBase} aria-label="Next" onClick={() => emblaApi?.scrollNext()}>{'›'}</button>
        </div>
        <div className="mt-3 flex items-center justify-center gap-2" role="tablist" aria-label="Slides">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              className={dotBase}
              aria-current={selectedIndex === i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
