import React from 'react';

type Props = React.PropsWithChildren<{ className?: string }>;

export default function Content({ children, className = '' }: Props) {
  return (
    <div
      className={[
        'w-full mx-auto max-w-content',
        'px-[var(--content-pad-sm)] md:px-[var(--content-pad-md)] lg:px-[var(--content-pad-lg)]',
        'flex flex-col',
        'gap-y-space-lg md:gap-y-space-2xl',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
