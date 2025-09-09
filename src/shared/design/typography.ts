export const typography = {
  h1: { fontSize: 'clamp(32px, 6vw, 56px)', lineHeight: 1.1, fontWeight: 700, letterSpacing: '-0.02em' },
  h2: { fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.15, fontWeight: 700, letterSpacing: '-0.015em' },
  lead: { fontSize: 'clamp(16px, 2.2vw, 20px)', lineHeight: 1.4, fontWeight: 500 },
  body: { fontSize: '16px', lineHeight: 1.6, fontWeight: 400 },
  caption: { fontSize: '13px', lineHeight: 1.4, fontWeight: 400, letterSpacing: '0.01em' },
  buttonText: { fontSize: '15px', lineHeight: 1.2, fontWeight: 600, letterSpacing: '-0.01em' },
} as const;

export type Typography = typeof typography;

