export const colors = {
  black: '#01060C',
  white: '#FEFEFE',
  primary: '#3D9DF2',
  accent: '#7CF23D',
  bg: '#FEFEFE',
  text: '#01060C',
  gray: {
    50:  '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
} as const;

export type Colors = typeof colors;

