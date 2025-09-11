import React from 'react';

type Props = React.PropsWithChildren<{ className?: string }>;

export default function Content({ children, className = '' }: Props) {
  return (
    <div
      className={[
        // Hard cap at 1200 + center
        'w-full mx-auto max-w-content max-w-[1200px] box-border',
        'px-[var(--content-pad-sm)] md:px-[var(--content-pad-md)] lg:px-[var(--content-pad-lg)]',
        'py-20 md:py-28',
        'flex flex-col',
        'gap-y-space-lg md:gap-y-space-2xl',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
