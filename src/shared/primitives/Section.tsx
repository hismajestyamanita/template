import React from 'react';

type Props = React.PropsWithChildren<{
  bg?: keyof typeof BG_KEYS | string; // 'black' | 'white' | keyof colors
  className?: string;
  id?: string;
}>;

const BG_KEYS = {
  black: true,
  white: true,
} as const;

export default function Section({ children, bg = 'bg', className = '', id }: Props) {
  return (
    <section
      id={id}
      className={[
        // vertical spacing per spec
        'py-16 md:py-24',
        className,
      ].join(' ')}
      style={{ background: `var(--${String(bg)})` }}
    >
      {children}
    </section>
  );
}
