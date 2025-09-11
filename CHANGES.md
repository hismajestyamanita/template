Changes Summary

- Content boundary hardened: 1200px center-aligned with box-border, paddings inside.
- Global base set to border-box; horizontal overflow hidden for safety.
- Primitives normalized (Section/Content/Edge); edges w-screen h-64 without seams.
- Reveal animations slowed ~3x with better easing and delays; reduced-motion respected.
- Interactive components added: Slider (embla, autoplay with pause on hover), Modal (portal + a11y), Accordion.
- Card micro-interactions: hover lift and stronger shadow.
- Tokens used everywhere (colors, spacing, radii, shadows, typography). ESLint guards for raw hex/boxShadow.
- Tests: layout.spec verifies ~1200px width and no overflow.

