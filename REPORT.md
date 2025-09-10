Template Audit and Centralization Report

Summary
- Centralized tokens (colors, spacing, radii, shadows, typography) are the single source of truth.
- Normalized primitives Section/Content/Edge with no seams and consistent flow.
- Global reveal animations slowed ~3x with better easing and reduced-motion support.
- Added interactive components: Slider (embla), Modal (portal + a11y), Accordion.
- Cleaned sections to alternate backgrounds and use edges correctly.

Tokens
- TS tokens: src/shared/design/* (colors, spacing including 40px, radii including 64px, shadows, typography)
- CSS variables: src/shared/styles/tokens.css used by Tailwind theme in tailwind.config.js
- No raw hex/box-shadow in components; ESLint guard rails added in eslint.config.js

Primitives
- Section: relative, overflow-hidden, background via token, accepts topEdge/bottomEdge, no external margins. Vertical paddings are provided by Content.
- Content: max width min(1200px,100%), horizontal paddings 16/24/32, vertical rhythm via gap 24→40.
- Edge: block, w-screen, h-64, variants: rounded (solid to-color with 64px rounded towards current section) and gradient (from→to with 1px overlap and will-change).

Animations
- reveal: 1.2s cubic-bezier(.22,1,.36,1) for opacity/filter/transform; delays .12/.24/.36s; respects prefers-reduced-motion.

Interactive
- Slider: src/components/Slider/Slider.tsx (embla) with arrows + dots.
- Modal: src/shared/primitives/Modal.tsx with portal to #modal-root, focus trap, ESC/backdrop close.
- Accordion: src/components/Accordion.tsx using simple transition.

Sections
- Hero (black) → white rounded bottom edge. Uses PhoneInput + CTA buttons, reveal stagger.
- Tokens (white) → gradient bottom to black. Includes palette, typography, buttons, cards, slider, accordion, and demo modal.
- Transitions (black) → rounded bottom to white + content boundary hint.
- CTA (white).

Linting
- eslint.config.js adds no-restricted-syntax warnings for raw hex and inline boxShadow.

How to Use
- Build: npm run build; Dev: npm run dev; Preview: npm run preview.
- Compose sections with Section/Content/Edge and use tokens via Tailwind or CSS vars.

