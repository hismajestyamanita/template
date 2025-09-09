import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;

const GlassCard: React.FC<Props> = ({ className = '', ...rest }) => (
  <div
    className={[
      'rounded-lg p-6',
      'bg-white/10 backdrop-blur',
      'border border-white/20',
      'shadow-float',
      className,
    ].join(' ')}
    {...rest}
  />
);

export default GlassCard;

