export const spacing = {
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  content: {
    max: '1200px',
    pad: {
      sm: '16px',
      md: '24px',
      lg: '32px',
    },
  },
} as const;

export type Spacing = typeof spacing;

