import React from 'react';

type Gap = 'sm'|'md'|'lg';

type Props = React.PropsWithChildren<{
  className?: string;
  gapY?: Gap; // default md
}>

const gapMap: Record<Gap, string> = {
  sm: 'var(--space-sm)',
  md: 'var(--space-md)',
  lg: 'var(--space-lg)',
};

export default function Content({ children, className = '', gapY = 'md' }: Props) {
  return (
    <div
      className={[
        // width & centering
        'w-full',
        'mx-auto',
        'max-w-content',
        // x padding by breakpoints
        'px-[var(--content-pad-sm)] md:px-[var(--content-pad-md)] lg:px-[var(--content-pad-lg)]',
        // vertical flow
        'flex flex-col',
        className,
      ].join(' ')}
      style={{ rowGap: gapMap[gapY] }}
    >
      {children}
    </div>
  );
}

