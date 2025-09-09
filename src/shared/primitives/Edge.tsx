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
    const dir = position === 'top' ? 'to top' : 'to bottom';
    return (
      <div
        aria-hidden
        className={[common, className].join(' ')}
        style={{ background: `linear-gradient(${dir}, var(--${toColor}), rgba(0,0,0,0))` }}
      />
    );
  }

  const radiusStyle =
    position === 'top'
      ? { borderTopLeftRadius: 'var(--r-xl)', borderTopRightRadius: 'var(--r-xl)' }
      : { borderBottomLeftRadius: 'var(--r-xl)', borderBottomRightRadius: 'var(--r-xl)' };

  return (
    <div
      aria-hidden
      className={[common, className].join(' ')}
      style={{ background: `var(--${toColor})`, ...radiusStyle }}
    />
  );
}
