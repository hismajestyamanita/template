# Template (React + TypeScript + Vite + Tailwind)

*Эта версия README полностью расширяет и заменяет исходный краткий обзор в репозитории: включает полные конфиги, архитектуру папок и эталонные реализации примитивов и основных компонентов.*&#x20;

---

## Зачем

Единый стартовый кит для лендингов и небольших сайтов. Из коробки:

* **Токены** дизайна (цвета, типографика, интервалы, радиусы, тени) как «источник правды».
* **Примитивы макета**: `Section`, `Content`, `Edge`.
* **UI-компоненты**: `Button`, `Card`, `GlassCard`, `Badge`, `Slider`.
* **Формы**: `PhoneInput`, `UnifiedSignupModal`.
* **Анимации**: `useReveal` + CSS для аккуратного появления.

Главный принцип: **всё контентное живёт в `Content` (max 1200 px), всё full-bleed/декор (фоны, большие градиенты, Edge) — вне `Content`, но внутри `Section`.**

---

## Стек

React 18 • TypeScript • Vite • Tailwind CSS • Embla Carousel • ESLint • Netlify

---

## Быстрый старт

```bash
# 1) установка
npm i

# 2) локальная разработка
npm run dev

# 3) сборка
npm run build

# 4) превью прод-сборки
npm run preview

# 5) типы/линт
npm run typecheck
npm run lint
```

Скопируй `.env.example` → `.env` (если нужен ключ для функций/интеграций).

---

## Архитектура проекта

```
template/
├─ index.html
├─ netlify.toml
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
├─ eslint.config.js
├─ public/
│  ├─ robots.txt
│  ├─ sitemap.xml
│  ├─ favicon.svg
│  └─ assets/
│     └─ visuals/
│        ├─ 01-hero/
│        ├─ 02-benefits/
│        ├─ 03-programs/
│        └─ ...
└─ src/
   ├─ App.tsx
   ├─ main.tsx
   ├─ index.css
   ├─ components/
   │  ├─ Badge.tsx
   │  ├─ Button.tsx
   │  ├─ Card.tsx
   │  ├─ GlassCard.tsx
   │  └─ Slider.tsx
   ├─ sections/
   │  ├─ 01-Hero.tsx
   │  ├─ 02-TokensShowcase.tsx
   │  ├─ 03-Transitions.tsx
   │  └─ 04-CTA.tsx
   ├─ shared/
   │  ├─ primitives/
   │  │  ├─ Section.tsx
   │  │  ├─ Content.tsx
   │  │  └─ Edge.tsx
   │  ├─ design/
   │  │  ├─ colors.ts
   │  │  ├─ spacing.ts
   │  │  ├─ radii.ts
   │  │  ├─ shadows.ts
   │  │  ├─ typography.ts
   │  │  └─ tokens.ts
   │  ├─ forms/
   │  │  ├─ PhoneInput.tsx
   │  │  └─ UnifiedSignupModal.tsx
   │  ├─ hooks/
   │  │  ├─ useReveal.ts
   │  │  └─ useParallax.ts
   │  ├─ styles/
   │  │  ├─ tokens.css
   │  │  ├─ typography.css
   │  │  ├─ reveal.css
   │  │  └─ utilities.css
   │  └─ utils/
   │     └─ cn.ts
   └─ types/
      └─ index.d.ts
```

---

## Принципы и запреты

* **Только токены.** Никаких «жёстких» цветов/радиусов/теней в компонентах.
* **Нумерация секций.** `01-*, 02-*` — порядок = скролл-порядок.
* **Контент ≤ 1200 px.** Всё, что «на всю ширину» — вне `Content`.
* **Повторяемость.** Вынеси повтор в `components/` или `shared/`.

---

## Токены дизайна (TS)

`src/shared/design/tokens.ts`

```ts
import { colors } from "./colors";
import { spacing } from "./spacing";
import { radii } from "./radii";
import { shadows } from "./shadows";
import { typography } from "./typography";

export const tokens = {
  contentMax: 1200, // px
  gutterMin: 16,    // px
  gutterMax: 32,    // px
  vGapMin: 24,      // px
  vGapMax: 40,      // px
  colors,
  spacing,
  radii,
  shadows,
  typography,
} as const;
export type Tokens = typeof tokens;
```

`src/shared/design/colors.ts`

```ts
export const colors = {
  background: "#0C0F12",
  surface0: "#0F1317",
  surface1: "#141A20",
  surface2: "#1B232B",
  content: "#0C0F12",
  text: {
    primary: "#E6EAF0",
    secondary: "#A6B0BF",
    muted: "#7D8898",
    inverse: "#0C0F12",
  },
  primary: {
    DEFAULT: "#22C55E",
    600: "#16A34A",
    700: "#15803D",
  },
  accent: "#60A5FA",
  danger: "#EF4444",
  success: "#22C55E",
  warning: "#F59E0B",
} as const;
```

`src/shared/design/spacing.ts`

```ts
export const spacing = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  24: "96px",
} as const;
```

`src/shared/design/radii.ts`

```ts
export const radii = {
  xs: "8px",
  sm: "12px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "40px",
  pill: "9999px",
} as const;
```

`src/shared/design/shadows.ts`

```ts
export const shadows = {
  sm: "0 1px 2px rgba(0,0,0,.1)",
  md: "0 4px 12px rgba(0,0,0,.16)",
  card: "0 12px 24px rgba(0,0,0,.24)",
  float: "0 24px 48px rgba(0,0,0,.32)",
} as const;
```

`src/shared/design/typography.ts`

```ts
export const typography = {
  fontSans: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
  h1: "clamp(36px, 6vw, 64px)",
  h2: "clamp(28px, 4.5vw, 44px)",
  h3: "clamp(22px, 3.5vw, 32px)",
  body: "clamp(16px, 1.5vw, 18px)",
  lead: "clamp(18px, 2vw, 20px)",
  mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
} as const;
```

---

## Токены (CSS-переменные)

`src/shared/styles/tokens.css`

```css
:root {
  --content-max: 1200px;
  --gutter: clamp(16px, 2vw, 32px);
  --v-gap: clamp(24px, 3vw, 40px);

  --bg: #0C0F12;
  --surface-0: #0F1317;
  --surface-1: #141A20;
  --surface-2: #1B232B;

  --text-primary: #E6EAF0;
  --text-secondary: #A6B0BF;
  --text-muted: #7D8898;
  --text-inverse: #0C0F12;

  --primary: #22C55E;
  --primary-600: #16A34A;
  --primary-700: #15803D;

  --accent: #60A5FA;
  --danger: #EF4444;
  --success: #22C55E;
  --warning: #F59E0B;

  --r-xs: 8px;
  --r-sm: 12px;
  --r-md: 16px;
  --r-lg: 24px;
  --r-xl: 32px;
  --r-2xl: 40px;

  --shadow-sm: 0 1px 2px rgba(0,0,0,.1);
  --shadow-md: 0 4px 12px rgba(0,0,0,.16);
  --shadow-card: 0 12px 24px rgba(0,0,0,.24);
  --shadow-float: 0 24px 48px rgba(0,0,0,.32);

  --font-sans: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  --h1: clamp(36px, 6vw, 64px);
  --h2: clamp(28px, 4.5vw, 44px);
  --h3: clamp(22px, 3.5vw, 32px);
  --lead: clamp(18px, 2vw, 20px);
  --body: clamp(16px, 1.5vw, 18px);
}
```

`src/shared/styles/typography.css`

```css
html, body { font-family: var(--font-sans); color: var(--text-primary); background: var(--bg); }
h1 { font-size: var(--h1); line-height: 1.05; letter-spacing: -0.02em; }
h2 { font-size: var(--h2); line-height: 1.08; letter-spacing: -0.015em; }
h3 { font-size: var(--h3); line-height: 1.12; }
.lead { font-size: var(--lead); color: var(--text-secondary); }
p, li { font-size: var(--body); line-height: 1.6; }
```

`src/shared/styles/reveal.css`

```css
/* Скрыто до появления */
[data-reveal] { opacity: 0; transform: translateY(12px); filter: blur(8px); }
[data-reveal].is-revealed { opacity: 1; transform: translateY(0); filter: none; transition: opacity .6s ease, transform .6s ease, filter .6s ease; }
@media (prefers-reduced-motion: reduce) {
  [data-reveal] { opacity: 1; transform: none; filter: none; }
}
```

`src/shared/styles/utilities.css`

```css
@layer utilities {
  .bleed-x { width: 100vw; margin-left: calc(50% - 50vw); margin-right: calc(50% - 50vw); }
  .bleed-r { width: 100vw; margin-right: calc(50% - 50vw); }
  .bleed-l { width: 100vw; margin-left: calc(50% - 50vw); }
  body { overflow-x: hidden; } /* защита от горизонтального скролла на Windows */
}
```

---

## Tailwind конфиг

`tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "surface-0": "var(--surface-0)",
        "surface-1": "var(--surface-1)",
        "surface-2": "var(--surface-2)",
        primary: {
          DEFAULT: "var(--primary)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          inverse: "var(--text-inverse)",
        },
        accent: "var(--accent)",
        danger: "var(--danger)",
        success: "var(--success)",
        warning: "var(--warning)",
      },
      borderRadius: {
        xs: "var(--r-xs)",
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
        xl: "var(--r-xl)",
        "2xl": "var(--r-2xl)",
        pill: "9999px",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        card: "var(--shadow-card)",
        float: "var(--shadow-float)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
      },
      maxWidth: {
        content: "var(--content-max)",
      },
      spacing: {
        gutter: "var(--gutter)",
      },
    },
  },
  plugins: [],
};
```

---

## PostCSS / Vite / TS / ESLint

`postcss.config.js`

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

`vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
});
```

`tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "Bundler",
    "strict": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

`tsconfig.node.json`

```json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

`eslint.config.js`

```js
import js from "@eslint/js";
import ts from "typescript-eslint";
import react from "eslint-plugin-react";

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
    plugins: { react },
    rules: {
      "react/jsx-no-target-blank": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }]
    },
    settings: { react: { version: "detect" } }
  }
);
```

---

## index.html / входные точки

`index.html`

```html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Template</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

`src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "@/shared/styles/tokens.css";
@import "@/shared/styles/typography.css";
@import "@/shared/styles/reveal.css";
@import "@/shared/styles/utilities.css";

:root { color-scheme: dark; }
```

`src/main.tsx`

```tsx
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

`src/App.tsx`

```tsx
import Section from "@/shared/primitives/Section";
import Content from "@/shared/primitives/Content";
import Edge from "@/shared/primitives/Edge";
import Hero from "@/sections/01-Hero";
import TokensShowcase from "@/sections/02-TokensShowcase";
import Transitions from "@/sections/03-Transitions";
import CTA from "@/sections/04-CTA";

export default function App() {
  return (
    <>
      <Hero />
      <TokensShowcase />
      <Transitions />
      <CTA />
      {/* пример футера */}
      <Section bg="surface-0" padY>
        <Content>
          <p className="text-text-muted">© 2025 Template</p>
        </Content>
      </Section>
      <Edge variant="rounded" toColor="bg" height={64} />
    </>
  );
}
```

---

## Утилита `cn`

`src/shared/utils/cn.ts`

```ts
export function cn(...args: Array<string | false | null | undefined>) {
  return args.filter(Boolean).join(" ");
}
```

---

## Примитивы макета

### Section

`src/shared/primitives/Section.tsx`

```tsx
import { cn } from "@/shared/utils/cn";
import type { PropsWithChildren, HTMLAttributes } from "react";

type Props = PropsWithChildren<
  {
    bg?: "bg" | "surface-0" | "surface-1" | "surface-2";
    padY?: boolean; // вертикальные отступы по токену
  } & HTMLAttributes<HTMLElement>
>;

export default function Section({ bg = "bg", padY = false, className, children, ...rest }: Props) {
  return (
    <section
      className={cn(
        `w-full ${bg ? `bg-${bg}` : ""}`,
        padY && "py-16 md:py-24",
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
```

### Content (эталон)

`src/shared/primitives/Content.tsx`

```tsx
import { cn } from "@/shared/utils/cn";
import type { PropsWithChildren, HTMLAttributes } from "react";

/**
 * Content — центральный контейнер.
 * - Ограничивает ширину: max-w-content (var(--content-max), по умолчанию 1200px)
 * - Центрирует: mx-auto
 * - Горизонтальные внутренние отступы: px-[--gutter]
 * - Вертикальный ритм между детьми: grid + gap-[--v-gap]
 */
type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export default function Content({ className, children, ...rest }: Props) {
  return (
    <div
      className={cn(
        "max-w-content mx-auto px-gutter",
        "grid gap-[var(--v-gap)]",
        "max-w-[min(var(--content-max),100%)]",
        "max-w-content", // для тестов/оверлея
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
```

### Edge (rounded/gradient)

`src/shared/primitives/Edge.tsx`

```tsx
import { cn } from "@/shared/utils/cn";

type Props = {
  variant?: "rounded" | "gradient";
  height?: number; // px
  toColor?: "bg" | "surface-0" | "surface-1" | "surface-2";
  className?: string;
  position?: "bottom" | "top";
};

export default function Edge({
  variant = "rounded",
  height = 64,
  toColor = "bg",
  className,
  position = "bottom",
}: Props) {
  if (variant === "gradient") {
    return (
      <div
        aria-hidden
        className={cn(
          "w-full bleed-x",
          position === "top" ? "mt-[-1px]" : "",
          className
        )}
        style={{
          height,
          background:
            position === "top"
              ? `linear-gradient(to top, var(--${toColor}) 0%, transparent 100%)`
              : `linear-gradient(to bottom, var(--${toColor}) 0%, transparent 100%)`,
        }}
      />
    );
  }
  // rounded
  return (
    <div
      aria-hidden
      className={cn("w-full bleed-x", className)}
      style={{ height, background: `var(--${toColor})`, borderTopLeftRadius: 32, borderTopRightRadius: 32 }}
    />
  );
}
```

---

## Хуки и анимации

`src/shared/hooks/useReveal.ts`

```ts
import { useEffect } from "react";

export function useReveal(root: HTMLElement | null = null) {
  useEffect(() => {
    const els = Array.from((root ?? document).querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [root]);
}
```

`src/shared/hooks/useParallax.ts`

```ts
import { useEffect } from "react";

export function useParallax(selector: string, coefficient = 0.15) {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(selector);
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY * coefficient;
      el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [selector, coefficient]);
}
```

---

## Компоненты

`src/components/Button.tsx`

```tsx
import { cn } from "@/shared/utils/cn";
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
};

export default function Button({ variant = "primary", size = "lg", className, ...rest }: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-pill font-medium transition-colors",
        size === "lg" ? "h-12 px-6 text-[16px]" : "h-10 px-5 text-[15px]",
        variant === "primary" && "bg-primary text-text-inverse hover:bg-primary-600 shadow-md",
        variant === "ghost" && "bg-transparent text-text-primary hover:bg-surface-1",
        className
      )}
      {...rest}
    />
  );
}
```

`src/components/Card.tsx`

```tsx
import { cn } from "@/shared/utils/cn";
import type { HTMLAttributes } from "react";

export default function Card({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-lg bg-surface-1 shadow-card border border-[rgba(255,255,255,.06)]", className)}
      {...rest}
    />
  );
}
```

`src/components/GlassCard.tsx`

```tsx
import { cn } from "@/shared/utils/cn";
import type { HTMLAttributes } from "react";
export default function GlassCard({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl bg-[rgba(255,255,255,.04)] backdrop-blur-md border border-[rgba(255,255,255,.08)] shadow-md",
        className
      )}
      {...rest}
    />
  );
}
```

`src/components/Badge.tsx`

```tsx
import { cn } from "@/shared/utils/cn";
import type { HTMLAttributes } from "react";
export default function Badge({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("inline-flex items-center gap-2 rounded-pill px-3 h-8 text-[13px] bg-surface-2 text-text-secondary", className)}
      {...rest}
    />
  );
}
```

`src/components/Slider.tsx`

```tsx
import useEmblaCarousel from "embla-carousel-react";
import type { PropsWithChildren } from "react";
import { useEffect } from "react";

export default function Slider({ children }: PropsWithChildren) {
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", loop: false });

  useEffect(() => {
    if (!embla) return;
  }, [embla]);

  return (
    <div className="overflow-hidden" ref={emblaRef} aria-roledescription="carousel">
      <div className="flex gap-4">{children}</div>
    </div>
  );
}
```

---

## Формы

`src/shared/forms/PhoneInput.tsx`

```tsx
import { useId } from "react";

type Props = {
  value: string;
  onChange: (v: string) => void;
  label?: string;
  required?: boolean;
};

export default function PhoneInput({ value, onChange, label = "Телефон", required }: Props) {
  const id = useId();
  const norm = (s: string) => s.replace(/[^\d+]/g, "");
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-[14px] text-text-secondary">{label}</label>
      <input
        id={id}
        className="h-12 px-4 rounded-lg bg-surface-2 border border-[rgba(255,255,255,.08)] focus:outline-none focus:ring-2 focus:ring-primary"
        type="tel"
        inputMode="numeric"
        autoComplete="tel"
        placeholder="+7 999 123-45-67"
        value={value}
        onChange={(e) => onChange(norm(e.target.value))}
        required={required}
      />
    </div>
  );
}
```

`src/shared/forms/UnifiedSignupModal.tsx`

```tsx
import { useState } from "react";
import PhoneInput from "./PhoneInput";
import Button from "@/components/Button";

type Props = { open: boolean; onClose: () => void; onSubmit?: (phone: string) => void };

export default function UnifiedSignupModal({ open, onClose, onSubmit }: Props) {
  const [phone, setPhone] = useState("");

  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-[min(560px,calc(100vw-32px))] rounded-xl bg-surface-1 p-6 shadow-float">
        <div className="grid gap-4">
          <h2 className="text-[24px]">Запись</h2>
          <PhoneInput value={phone} onChange={setPhone} required />
          <div className="flex gap-3 justify-end">
            <Button variant="ghost" onClick={onClose}>Отмена</Button>
            <Button onClick={() => { onSubmit?.(phone); onClose(); }}>Отправить</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## Секции (примеры)

`src/sections/01-Hero.tsx`

```tsx
import Section from "@/shared/primitives/Section";
import Content from "@/shared/primitives/Content";
import Edge from "@/shared/primitives/Edge";
import Button from "@/components/Button";
import { useReveal } from "@/shared/hooks/useReveal";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => { if (ref.current) useReveal(ref.current); }, []);
  return (
    <>
      <Section ref={ref as any} bg="bg" padY>
        <Content>
          <div data-reveal className="grid gap-6">
            <h1>MODERN WEB DESIGN TEMPLATE <span className="text-primary">CLEAN AND FLEXIBLE</span></h1>
            <p className="lead">A neutral placeholder lead paragraph without invalid characters.</p>
            <div className="flex gap-4">
              <Button>Записаться</Button>
              <Button variant="ghost">Подробнее</Button>
            </div>
          </div>
        </Content>

        {/* Правый визуал — half-bleed */}
        <figure className="bleed-r pr-gutter mt-10" data-reveal>
          <img src="/assets/visuals/01-hero/house.webp" alt="" className="ml-auto max-w-[min(900px,100%)] rounded-xl shadow-float" />
        </figure>
      </Section>
      <Edge variant="rounded" toColor="surface-0" height={64} />
    </>
  );
}
```

`src/sections/02-TokensShowcase.tsx`

```tsx
import Section from "@/shared/primitives/Section";
import Content from "@/shared/primitives/Content";
import Card from "@/components/Card";

export default function TokensShowcase() {
  return (
    <Section bg="surface-0" padY>
      <Content>
        <h2>Токены и компоненты</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">Цвета, радиусы, тени</Card>
          <Card className="p-6">Кнопки, бейджи</Card>
          <Card className="p-6">Типографика</Card>
        </div>
      </Content>
    </Section>
  );
}
```

`src/sections/03-Transitions.tsx`

```tsx
import Section from "@/shared/primitives/Section";
import Content from "@/shared/primitives/Content";
import Edge from "@/shared/primitives/Edge";

export default function Transitions() {
  return (
    <>
      <Section bg="surface-1" padY>
        <Content>
          <h2>Переходы между секциями</h2>
          <p className="lead">Edge: rounded/gradient, full-width, вне Content.</p>
        </Content>
      </Section>
      <Edge variant="gradient" toColor="bg" height={80} />
    </>
  );
}
```

`src/sections/04-CTA.tsx`

```tsx
import Section from "@/shared/primitives/Section";
import Content from "@/shared/primitives/Content";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";

export default function CTA() {
  return (
    <Section bg="bg" padY>
      <Content>
        <GlassCard className="p-8 grid gap-4">
          <h2>Готовы запуститься?</h2>
          <p className="lead">Темплейт уже собран — поменяйте токены и ассеты.</p>
          <div><Button>Начать</Button></div>
        </GlassCard>
      </Content>
    </Section>
  );
}
```

---

## Netlify

`netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

> Если используете функции/хуки (например, Telegram-нотификатор) — добавьте соответствующие директории и переменные окружения в `.env`.

---

## Скрипты и зависимости

`package.json`

```json
{
  "name": "template",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview --port 5174",
    "typecheck": "tsc --noEmit",
    "lint": "eslint \"src/**/*.{ts,tsx}\""
  },
  "dependencies": {
    "embla-carousel-react": "^8.1.6",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.7",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.12.0",
    "eslint-plugin-react": "^7.37.1",
    "tailwindcss": "^3.4.14",
    "typescript": "^5.6.3",
    "vite": "^5.4.8"
  }
}
```

---

## Dev-гид (встроенная подсветка Content boundary)

Добавьте простой переключатель (например, в `Hero`) или глобальную кнопку, которая в dev-режиме включает рамку границы `Content`:

```tsx
// пример: <Content className="outline outline-1 outline-dashed outline-[rgba(255,255,255,.2)]" />
```

Рекомендуется держать класс `max-w-content` на контейнере — удобно проверять ширину через DevTools.

---

## Паттерны «вылета» за пределы Content

* **bleed-x / bleed-l / bleed-r** — утилиты в `utilities.css`.
* Для композиции «карточка слева по сетке + картинка вправо до края»:

  * карточка остаётся в `<Content>` (строго ≤ 1200),
  * картинка — отдельный `figure` в пределах секции с классом `bleed-r` и `pr-gutter`.

---

## Готовый рабочий флоу

1. **Клонировать** репозиторий → `npm i` → `npm run dev`.
2. **Настроить токены** (`tokens.css` / `tailwind.config.js`).
3. **Положить ассеты** в `public/assets/visuals/{01-hero,...}`.
4. **Собрать секции** в `src/sections/` строго по примитивам.
5. **Подключить форму** (`PhoneInput`, `UnifiedSignupModal`).
6. **Анимации**: добавляй `data-reveal`, хук `useReveal`.
7. **Адаптив**: проверка брейкпоинтов, гаттеров, bleed-элементов.
8. **Сборка/деплой**: `npm run build` → Netlify.

---

## Лицензия

MIT (или любая ваша).
