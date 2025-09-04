import React from 'react';

type Props = React.PropsWithChildren<{ className?: string }>

export default function Container({ children, className = '' }: Props) {
  return (
    <div
      className={[
        'w-full',
        'mx-auto',
        'max-w-content',
        // responsive X padding from tokens
        'px-[var(--content-pad-sm)] md:px-[var(--content-pad-md)] lg:px-[var(--content-pad-lg)]',
        'flex flex-col',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

