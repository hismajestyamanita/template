import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel-react';

type Props = {
  options?: EmblaOptionsType;
  children: React.ReactNode[] | React.ReactNode;
};

const dotBase = 'w-2 h-2 rounded-full bg-[var(--gray-300)] aria-[current=true]:bg-[var(--primary)]';

const Slider: React.FC<Props> = ({ options, children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', () => onSelect(emblaApi));
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full">
      <div className="relative" aria-roledescription="carousel">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {React.Children.map(children, (child, i) => (
              <div className="min-w-0 flex-[0_0_100%]" aria-roledescription="slide" aria-label={`${i + 1} of ${React.Children.count(children)}`}>
                {child}
              </div>
            ))}
          </div>
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

