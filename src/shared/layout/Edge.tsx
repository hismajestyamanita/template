import React from 'react';

type Variant = 'rounded' | 'gradient';

type EdgeProps = {
  colorVar?: string; // e.g. '--bg' | '--white' | '--black'
  className?: string;
  variant?: Variant;
};

export function EdgeTop({ colorVar = '--bg', className = '', variant = 'rounded' }: EdgeProps) {
  if (variant === 'gradient') {
    return (
      <div
        aria-hidden
        className={['w-full h-8', className].join(' ')}
        style={{
          background: `linear-gradient(to top, var(${colorVar}), rgba(0,0,0,0))`,
        }}
      />
    );
  }
  return (
    <div
      aria-hidden
      className={[
        'w-full h-8 bg-[var(--bg)]',
        className,
      ].join(' ')}
      style={{ borderTopLeftRadius: 'var(--r-xl)', borderTopRightRadius: 'var(--r-xl)', background: `var(${colorVar})` }}
    />
  );
}

export function EdgeBottom({ colorVar = '--bg', className = '', variant = 'rounded' }: EdgeProps) {
  if (variant === 'gradient') {
    return (
      <div
        aria-hidden
        className={['w-full h-8', className].join(' ')}
        style={{
          background: `linear-gradient(to bottom, var(${colorVar}), rgba(0,0,0,0))`,
        }}
      />
    );
  }
  return (
    <div
      aria-hidden
      className={[
        'w-full h-8 bg-[var(--bg)]',
        className,
      ].join(' ')}
      style={{ borderBottomLeftRadius: 'var(--r-xl)', borderBottomRightRadius: 'var(--r-xl)', background: `var(${colorVar})` }}
    />
  );
}

