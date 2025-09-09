import React from 'react';

type Gap = 'sm' | 'md' | 'lg';

type Props = React.PropsWithChildren<{
  className?: string;
  gapY?: Gap; // default md
}>;

const gapMap: Record<Gap, string> = {
  sm: 'var(--space-sm)',
  md: 'var(--space-lg)', // mobile gap 24px
  lg: 'var(--space-xl)', // desktop gap 32px/40px
};

export default function Content({ children, className = '', gapY = 'md' }: Props) {
  return (
    <div
      className={[
        'w-full mx-auto max-w-content',
        'px-[var(--content-pad-sm)] md:px-[var(--content-pad-md)] lg:px-[var(--content-pad-lg)]',
        'flex flex-col',
        className,
      ].join(' ')}
      style={{ rowGap: gapMap[gapY] }}
    >
      {children}
    </div>
  );
}
