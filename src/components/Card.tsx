import React from 'react';

type Variant = 'plain' | 'elevated';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  variant?: Variant;
};

const byVariant: Record<Variant, string> = {
  plain: 'bg-[var(--white)] border border-[var(--gray-200)]',
  elevated: 'bg-[var(--white)] shadow-card border border-[var(--gray-200)]',
};

const Card: React.FC<Props> = ({ variant = 'plain', className = '', ...rest }) => (
  <div
    className={[
      'rounded-lg p-6',
      'transition-transform duration-200 will-change-transform',
      'hover:-translate-y-0.5',
      byVariant[variant],
      className,
    ].join(' ')}
    {...rest}
  />
);

export default Card;
