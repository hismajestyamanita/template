import React from 'react';

type Props = React.PropsWithChildren<{
  bg?: string; // CSS var name without var()
  className?: string;
  id?: string;
}>

export default function Section({ children, bg = 'bg', className = '', id }: Props) {
  return (
    <section id={id} style={{ background: `var(--${bg})` }} className={[className].join(' ')}>
      {children}
    </section>
  );
}

