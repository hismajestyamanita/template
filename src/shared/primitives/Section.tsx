import React from 'react';
import Edge, { EdgeProps } from './Edge';

type BG = 'black' | 'white' | 'gray';

type Props = React.PropsWithChildren<{
  bg: BG;
  id?: string;
  className?: string;
  topEdge?: EdgeProps;
  bottomEdge?: EdgeProps;
}>;

const bgVar: Record<BG, string> = {
  black: 'var(--black)',
  white: 'var(--white)',
  gray: 'var(--gray-50)',
};

export default function Section({ bg, id, className = '', topEdge, bottomEdge, children }: Props) {
  return (
    <section id={id} className={[
        'relative',
        'overflow-hidden',
        className,
      ].join(' ')} style={{ background: bgVar[bg] }}>
      {topEdge ? <Edge {...topEdge} /> : null}
      {children}
      {bottomEdge ? <Edge {...bottomEdge} /> : null}
    </section>
  );
}
