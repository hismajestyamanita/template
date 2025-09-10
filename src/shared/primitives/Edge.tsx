import React from 'react';

export type Variant = 'rounded' | 'gradient';
export type Position = 'top' | 'bottom';
export type EdgeColor = 'black' | 'white' | 'gray';

export type EdgeProps = {
  variant: Variant;
  from: EdgeColor;
  to: EdgeColor;
  position: Position;
  className?: string;
};

const colorVarMap: Record<EdgeColor, string> = {
  black: 'var(--black)',
  white: 'var(--white)',
  gray: 'var(--gray-200)',
};

export default function Edge({ variant, from, to, position, className = '' }: EdgeProps) {
  const common = ['block', 'leading-[0]', 'relative', 'w-screen', 'h-[64px]', 'max-w-none', className].join(' ');

  if (variant === 'gradient') {
    const dir = position === 'top' ? 'to top' : 'to bottom';
    const bg = `linear-gradient(${dir}, ${colorVarMap[from]}, ${colorVarMap[to]})`;
    const translateClass = position === 'top' ? '-translate-y-px' : 'translate-y-px';
    return <div aria-hidden className={[common, 'will-change-transform', translateClass].join(' ')} style={{ background: bg, backfaceVisibility: 'hidden' }} />;
  }

  // Rounded: solid block of `to` color with rounded corners towards the inside of current section
  const radiusStyle =
    position === 'bottom'
      ? { borderTopLeftRadius: 'var(--r-2xl)', borderTopRightRadius: 'var(--r-2xl)' }
      : { borderBottomLeftRadius: 'var(--r-2xl)', borderBottomRightRadius: 'var(--r-2xl)' };

  return <div aria-hidden className={common} style={{ background: colorVarMap[to], ...radiusStyle }} />;
}
