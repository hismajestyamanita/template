import React from 'react';

type Variant = 'rounded' | 'gradient';
type Position = 'top' | 'bottom';

type EdgeProps = {
  toColor: string; // keyof colors as CSS var name (e.g., 'white', 'black', 'gray-200')
  variant?: Variant;
  position?: Position;
  className?: string;
};

export default function Edge({ toColor, variant = 'rounded', position = 'bottom', className = '' }: EdgeProps) {
  const common = ['w-full', 'h-16'].join(' ');
  if (variant === 'gradient') {
    // Fade from current section (transparent) to the next section color at the edge side
    const dir = position === 'top' ? 'to top' : 'to bottom';
    const gradient = position === 'top'
      ? `linear-gradient(${dir}, rgba(0,0,0,0), var(--${toColor}))`
      : `linear-gradient(${dir}, rgba(0,0,0,0), var(--${toColor}))`;
    return (
      <div
        aria-hidden
        className={[common, className].join(' ')}
        style={{ background: gradient }}
      />
    );
  }

  // For a bottom edge we want a pill with rounded TOP corners (visible inside current section),
  // for a top edge — rounded BOTTOM corners.
  const radiusStyle =
    position === 'bottom'
      ? { borderTopLeftRadius: 'var(--r-2xl)', borderTopRightRadius: 'var(--r-2xl)' }
      : { borderBottomLeftRadius: 'var(--r-2xl)', borderBottomRightRadius: 'var(--r-2xl)' };

  return (
    <div
      aria-hidden
      className={[common, className].join(' ')}
      style={{ background: `var(--${toColor})`, ...radiusStyle }}
    />
  );
}
