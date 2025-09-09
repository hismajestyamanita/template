import React from 'react';

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  color?: 'primary' | 'accent' | 'gray';
};

const colors: Record<NonNullable<Props['color']>, string> = {
  primary: 'bg-[color-mix(in_oklab,var(--primary) 15%, transparent)] text-[var(--primary)]',
  accent: 'bg-[color-mix(in_oklab,var(--accent) 20%, transparent)] text-[var(--accent)]',
  gray: 'bg-[var(--gray-100)] text-[var(--gray-700)]',
};

const Badge: React.FC<Props> = ({ className = '', color = 'gray', ...rest }) => (
  <span
    className={[
      'inline-flex items-center rounded-md px-2 py-1',
      'caption',
      colors[color],
      className,
    ].join(' ')}
    {...rest}
  />
);

export default Badge;

