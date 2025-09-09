import React from 'react';

type Variant = 'primary' | 'secondary';
type Size = 'md' | 'lg';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const base = 'button-text inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-[var(--bg)]';

const byVariant: Record<Variant, string> = {
  primary: 'bg-[var(--primary)] text-[var(--white)] hover:brightness-105 active:brightness-95',
  secondary: 'bg-transparent text-[var(--text)] border border-[var(--gray-300)] hover:bg-[var(--gray-50)] active:bg-[var(--gray-100)]',
};

const bySize: Record<Size, string> = {
  md: 'h-11 px-5',
  lg: 'h-12 px-6',
};

const Button: React.FC<Props> = ({ variant = 'primary', size = 'md', className = '', ...rest }) => (
  <button className={[base, byVariant[variant], bySize[size], className].join(' ')} {...rest} />
);

export default Button;

