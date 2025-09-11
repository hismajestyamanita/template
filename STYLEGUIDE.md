Styleguide (Tokens & Primitives)

Tokens
- Colors: src/shared/design/colors.ts and CSS vars in styles/tokens.css
- Spacing: xs/sm/md/lg/xl/2xl + content paddings; content max = 1200px
- Radii: sm/md/lg/xl/2xl (2xl = 64px for edges)
- Shadows: card/float
- Typography: h1/h2/lead/body/caption/button-text

Primitives
- Section: relative, overflow-hidden; accepts topEdge/bottomEdge; no external margins.
- Content: max width min(1200px,100%), box-border; x paddings 16/24/32; vertical gap 24→40; controls vertical section rhythm.
- Edge: w-screen, h-64. Rounded (solid to-color with 64px rounding) or Gradient (from→to with 1px overlap).

Components
- Button: primary/secondary variants; focus-visible rings.
- Card/GlassCard: use token radii/shadows; hover lift.
- Slider: embla with arrows/dots, autoplay and pause on hover.
- Modal: portal + a11y, focus trap.
- Forms: PhoneInput + UnifiedSignupModal.

Animations
- reveal: 1.2s cubic-bezier(.22,1,.36,1); delays .12/.24/.36s; prefers-reduced-motion supported.

