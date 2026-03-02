# Design Specification: Carla Burns — Personal Website

> **For:** Frontend developer handoff
> **Site plan reference:** `site-plan.md`
> **Pages:** `/` (single-page) + `/about`
> **Themes:** Two — Blue and Green (user-toggled)
> **Tone:** Warm, grounded, sparse, quietly literary. Nothing shouty, nothing clinical.

---

## Table of Contents

1. [Theme System & Colour Palettes](#1-theme-system--colour-palettes)
2. [Typography](#2-typography)
3. [Spacing System](#3-spacing-system)
4. [Layout & Grid](#4-layout--grid)
5. [Component Specs](#5-component-specs)
   - NAV + Theme Toggle
   - Hero
   - How (three pillars)
   - Practical
   - Contact
   - Footer
   - About page
6. [Border Radius](#6-border-radius)
7. [Animation Principles](#7-animation-principles)
8. [Responsive Breakpoints](#8-responsive-breakpoints)
9. [Assets Reference](#9-assets-reference)

---

## 1. Theme System & Colour Palettes

Themes are driven by **CSS custom properties** on the `<html>` element. A class (`theme-blue` / `theme-green`) is toggled on `<html>`. All colour references in the codebase use `var(--token-name)`. The active theme class is persisted in `localStorage`.

### Implementation

```css
/* Default: blue theme */
html.theme-blue { /* or just html { } for default */
  --color-bg:          #F2F5F9;
  --color-surface:     #FFFFFF;
  --color-accent:      #4A7FA5;
  --color-accent-muted:#D6E8F5;
  --color-accent-hover:#3A6A8E;
  --color-text:        #1C2333;
  --color-text-muted:  #64738A;
  --color-border:      #CBD8E6;
  --color-toggle-bg:   #D6E8F5;
}

html.theme-green {
  --color-bg:          #F3F5EF;
  --color-surface:     #FDFDF9;
  --color-accent:      #556836;
  --color-accent-muted:#E0EAD2;
  --color-accent-hover:#44572A;
  --color-text:        #252820;
  --color-text-muted:  #676B5E;
  --color-border:      #CEDAD8;  /* was #C9D4BC */
  --color-toggle-bg:   #E0EAD2;
}
```

### Blue Theme — Reference: co2.is

Soft, still, slightly Nordic. Calming without coldness.

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#F2F5F9` | Page background |
| `--color-surface` | `#FFFFFF` | Cards, nav, form fields |
| `--color-accent` | `#4A7FA5` | Links, CTA, active nav, underlines |
| `--color-accent-muted` | `#D6E8F5` | Hover states, pill tags, divider |
| `--color-accent-hover` | `#3A6A8E` | Button hover, link hover |
| `--color-text` | `#1C2333` | Headings, body |
| `--color-text-muted` | `#64738A` | Labels, meta, muted copy |
| `--color-border` | `#CBD8E6` | Form borders, dividers, card strokes |
| `--color-toggle-bg` | `#D6E8F5` | Theme toggle track (inactive pill) |

### Green Theme — Reference: academyolivia.com + joyzhong.com

Sage and moss. Organic, earthy, grounded. Reminiscent of the West of Ireland.

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#F3F5EF` | Page background |
| `--color-surface` | `#FDFDF9` | Cards, nav, form fields |
| `--color-accent` | `#556836` | Links, CTA, active nav |
| `--color-accent-muted` | `#E0EAD2` | Hover states, pill tags |
| `--color-accent-hover` | `#44572A` | Button hover, link hover |
| `--color-text` | `#252820` | Headings, body |
| `--color-text-muted` | `#676B5E` | Labels, meta, muted copy |
| `--color-border` | `#C9D4BC` | Form borders, dividers |
| `--color-toggle-bg` | `#E0EAD2` | Theme toggle track (inactive pill) |

### Shared / Semantic Colours (theme-independent)

| Token | Value | Usage |
|---|---|---|
| `--color-white` | `#FFFFFF` | CTA button text, nav surface |
| `--color-error` | `#C0392B` | Form validation |
| `--color-success` | `#2E7D32` | Form success state |

---

## 2. Typography

### Font Stack

```css
--font-serif: 'Lora', Georgia, 'Times New Roman', serif;
--font-sans:  'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Load via Google Fonts:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Lora:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
```

- **Lora** — Serif. Used for headings and the hero statement. Warm, literary, designed for screen reading. Italic variant used for the poem.
- **Inter** — Sans-serif. Used for all body copy, labels, nav links, and UI text. Exceptionally readable at small sizes.

### Type Scale

All sizes in `rem` (base: `16px = 1rem`). Use `clamp()` for fluid scaling between mobile and desktop.

| Role | Size (desktop) | Size (mobile) | Font | Weight | Line-height | Letter-spacing | Colour |
|---|---|---|---|---|---|---|---|
| **Hero name label** | `0.75rem` (12px) | `0.75rem` | Inter | 500 | 1 | `0.14em` | `--color-text-muted` |
| **Hero tagline** | `0.8125rem` (13px) | `0.8125rem` | Inter | 400 | 1 | `0.08em` | `--color-text-muted` |
| **Hero statement** | `clamp(1.5rem, 3vw, 1.875rem)` | `1.5rem` | Lora | 400 | 1.45 | `-0.01em` | `--color-text` |
| **Hero sub-intro** | `1rem` | `0.9375rem` | Inter | 400 | 1.7 | 0 | `--color-text-muted` |
| **Section label** | `0.6875rem` (11px) | `0.6875rem` | Inter | 500 | 1 | `0.13em` | `--color-text-muted` |
| **Section heading** | `clamp(1.25rem, 2.5vw, 1.5rem)` | `1.25rem` | Lora | 400 | 1.35 | `-0.01em` | `--color-text` |
| **Pillar copy / body** | `0.9375rem` (15px) | `0.9375rem` | Inter | 400 | 1.75 | 0 | `--color-text` |
| **Practical label** | `0.75rem` (12px) | `0.75rem` | Inter | 500 | 1 | `0.1em` | `--color-text-muted` |
| **Practical value** | `0.9375rem` | `0.9375rem` | Inter | 400 | 1.6 | 0 | `--color-text` |
| **Nav links** | `0.8125rem` (13px) | `0.8125rem` | Inter | 400 | 1 | `0.04em` | `--color-text` |
| **Nav brand** | `0.9375rem` (15px) | `0.9375rem` | Inter | 500 | 1 | `0.02em` | `--color-text` |
| **Button text** | `0.8125rem` (13px) | `0.8125rem` | Inter | 500 | 1 | `0.06em` | White |
| **Poem / quote** | `1rem` | `0.9375rem` | Lora | 400 italic | 1.8 | 0 | `--color-text` |
| **Poem attribution** | `0.8125rem` | `0.8125rem` | Inter | 400 | 1.4 | 0 | `--color-text-muted` |
| **Footer text** | `0.75rem` | `0.75rem` | Inter | 400 | 1 | `0.04em` | `--color-text-muted` |

### Typographic Rules

- **Section labels** are ALL-CAPS (`text-transform: uppercase`). Used sparingly: only for section markers (Fees, Location, Contact) and the hero label.
- **No bold headings** — Lora 400 is the voice. Weight is added through size, not boldness.
- **Body text max-width:** `62ch` — keeps line lengths comfortable. Apply to all prose blocks.
- **No justified text.** Always `text-align: left` for prose; centre only for the poem and footer.

---

## 3. Spacing System

Base unit: **8px**. All spacing values are multiples of 8.

```css
--space-1:   8px;
--space-2:  16px;
--space-3:  24px;
--space-4:  32px;
--space-5:  40px;
--space-6:  48px;
--space-7:  64px;
--space-8:  80px;
--space-9:  96px;
--space-10: 128px;
```

### Section Padding (vertical)

| Context | Top | Bottom |
|---|---|---|
| Desktop | `--space-9` (96px) | `--space-9` (96px) |
| Tablet | `--space-7` (64px) | `--space-7` (64px) |
| Mobile | `--space-6` (48px) | `--space-6` (48px) |

### Component Rhythm

| Component | Spacing rule |
|---|---|
| NAV height | `56px` desktop / `48px` mobile |
| NAV horizontal padding | `--space-5` (40px) each side on desktop; `--space-3` (24px) on mobile |
| NAV gap (brand ↔ links) | Flex space-between |
| NAV links gap | `--space-5` (40px) between links |
| Hero: text ↔ portrait gap | `--space-8` (80px) |
| Hero: label → tagline | `--space-1` (8px) |
| Hero: tagline → statement | `--space-3` (24px) |
| Hero: statement → sub-intro | `--space-3` (24px) |
| Hero: sub-intro → CTA | `--space-4` (32px) |
| HOW: section label → intro | `--space-2` (16px) |
| HOW: heading → pillars | `--space-6` (48px) |
| HOW: pillar gap (columns) | `--space-7` (64px) |
| HOW: pillar heading → body | `--space-2` (16px) |
| HOW: pillars → areas list | `--space-7` (64px) |
| HOW: areas list → poem | `--space-8` (80px) |
| PRACTICAL: row gap | `--space-5` (40px) |
| PRACTICAL: label → value | `--space-2` (16px) |
| CONTACT: heading → form | `--space-5` (40px) |
| CONTACT: form field gap | `--space-3` (24px) |
| CONTACT: form → privacy note | `--space-2` (16px) |
| Footer: top padding | `--space-6` (48px) |
| Footer: bottom padding | `--space-5` (40px) |

---

## 4. Layout & Grid

### Page Max-Width

```css
--max-width: 1120px;
--content-width: 720px;   /* prose and centred sections */
--gutter: clamp(24px, 5vw, 80px);
```

- All sections: `max-width: var(--max-width)`, centred, padded by `var(--gutter)` on left and right.
- Body copy blocks: `max-width: var(--content-width)`.

### Hero Layout

```
Desktop (≥1024px):
┌──────────────────────────────────────────────────────────┐
│  [text: 58%]                       [portrait: 180px]     │
│                                    (circular, right-     │
│                                     aligned, top-        │
│                                     aligned with text)   │
└──────────────────────────────────────────────────────────┘

Tablet (640–1023px):
┌──────────────────────────────────────────────────────────┐
│  [text: 65%]             [portrait: 140px, right]        │
└──────────────────────────────────────────────────────────┘

Mobile (<640px):
┌──────────────────────┐
│    [portrait 120px]  │  ← centred
│    [text, centred]   │
└──────────────────────┘
```

Implementation: CSS `display: flex`, `align-items: flex-start` on desktop. On mobile, `flex-direction: column`, `align-items: center`.

### HOW — Three Pillars

```
Desktop (≥1024px):  3 columns, equal width, 64px gap
Tablet (640–1023px): 2 columns + 1 full-width below (or 1 column)
Mobile (<640px):    1 column, stacked
```

### PRACTICAL — Label/Value Rows

Full-width, no columns. Label + value on same row with generous space between, or label above value in a compact block — keep consistent. See component spec below.

---

## 5. Component Specs

### 5.1 NAV + Theme Toggle

```
[Carla Burns]                    [How]  [Practical]  [About]  [Contact]  [● ●]
```

**Behaviour:**
- `position: sticky; top: 0; z-index: 100`
- Background: `var(--color-surface)` with `backdrop-filter: blur(8px)` and `background: rgba(surface, 0.9)` when scrolled past 40px
- Bottom border: `1px solid var(--color-border)` — appears only after scroll (opacity transition 200ms)
- Brand name: `var(--font-sans)`, 500 weight, links to `/` (or `#top`)
- Nav links: Inter 13px, weight 400, `var(--color-text)`, no underline. On hover: `var(--color-accent)`, transition 180ms ease
- Active link (section in view): `var(--color-accent)`, optionally a 1px underline below

**Theme Toggle:**

```
[  ◉ blue  |  green  ]   ← active option has filled dot; inactive is faint
```

- Positioned at far right of nav, after nav links
- A two-state pill toggle: `56px × 24px` total track
- Two labels: `blue` and `green`, `10px` Inter 500, uppercase
- Active state: small filled circle (`8px`) in `var(--color-accent)` beside label
- Inactive: circle is `var(--color-border)`
- Transition all colour tokens: `300ms ease` on `html` element
- On mobile: moves below nav links, centred, or stays right at reduced size

**Mobile NAV:**
- Brand left, links right — all inline, `12px` Inter
- If links don't fit: stack brand on one line, links centred below (no hamburger)
- Toggle: small dot pair, right-aligned alongside brand or below

---

### 5.2 Hero

```
Desktop layout — flex row, align-items: flex-start, justify-content: space-between

LEFT COLUMN (flex: 1)                      RIGHT COLUMN (width: 180px)
─────────────────────────────────────────  ──────────────────────────
CARLA BURNS                  ← label       [portrait circle 180px]
Counsellor and Psychotherapist ← tagline
                                           Vertically centred with the
I believe that even in the midst            label + tagline block.
of suffering, there is an
opportunity for profound
meaning-making.              ← Lora 30px

Whether we meet online or
in person, I offer a calm
and respectful space to
explore your unique story.   ← Inter 15px muted

[Get in touch →]             ← CTA
```

**Portrait image:**
- `assets/Carla_small_profile.png`
- `width: 180px; height: 180px` desktop; `140px` tablet; `120px` mobile
- `border-radius: 50%` (already circular but declare explicitly)
- No border, no shadow — let it sit clean
- `object-fit: cover`

**CTA Button — "Get in touch":**
- `padding: 10px 20px`
- Background: `var(--color-accent)`
- Text: white, Inter 13px, weight 500, `letter-spacing: 0.06em`
- `border-radius: 2px`
- No icon by default. Optional: `→` at end with `margin-left: 6px`
- Hover: `background: var(--color-accent-hover)`, `transform: translateY(-1px)`, transition 200ms ease
- Active/press: `transform: translateY(0)`, 80ms ease

---

### 5.3 HOW — Three Pillars

**Section label** (above heading): `HOW I WORK` — 11px, Inter 500, uppercase, `var(--color-text-muted)`, `letter-spacing: 0.13em`

**Pillar structure** (each):
```
[Pillar label]    e.g. "Integrative" — 12px Inter 500, uppercase, --color-accent
[Pillar body]     15px Inter 400, line-height 1.75, --color-text, max-width 32ch per column
```

No visible card borders — pillars are separated by whitespace alone. No background fill.

**Areas of work:**
- Rendered as a single flowing paragraph with `·` as separator
- `font: Inter 13px`, `var(--color-text-muted)`, `line-height: 2`
- Centred on desktop, left-aligned on mobile
- Wrap in a `max-width: 640px` container, centred

**Poem block:**
- Centred horizontally, `max-width: 440px`
- Top border: `1px solid var(--color-border)`, `padding-top: var(--space-7)`
- Lines: Lora 15px italic, `line-height: 1.8`, `var(--color-text)`
- Attribution: Inter 13px, `var(--color-text-muted)`, `margin-top: var(--space-2)`
- No decorative quote marks — the italics and indentation are sufficient

---

### 5.4 PRACTICAL

**Section label:** `PRACTICAL` — same treatment as How label

**Layout:** Three rows. Each row:
```
[LABEL col — 80px fixed, 12px Inter 500 uppercase muted]  [VALUE — flex-1]
```
Or alternatively (preferred for mobile-first): label above value, full-width.

```
Fees ← 12px uppercase muted
£75 / €85 per session.
I offer a free 20-minute Zoom consultation initially. ← 15px Inter body

Location
Zoom, or in person in Annacoty, Co. Limerick.

Contact
burnscarla@gmail.com
or use the form below ↓
```

- `burnscarla@gmail.com` is a mailto link: `color: var(--color-accent)`, no underline by default, underline on hover
- `↓` arrow is a soft gesture toward the contact section below — `var(--color-text-muted)`
- Row separator: `1px solid var(--color-border)`, or simply `padding-top: var(--space-5)` with no rule — keep it lighter

---

### 5.5 CONTACT

**Heading:** `Get in touch.` — Lora 24px, `var(--color-text)`
**Sub-heading:** `A free 20-minute conversation is always the first step.` — Inter 15px muted, below heading, `margin-top: var(--space-2)`

**Form — max-width: 480px, centred or left-aligned within content column:**

| Field | Type | Placeholder | Notes |
|---|---|---|---|
| Name | `text` | `Your name` | — |
| Email | `email` | `Your email` | — |
| Message | `textarea` | `What's on your mind?` | `min-height: 120px`, `resize: vertical` |

**Field styles:**
- Background: `var(--color-surface)`
- Border: `1px solid var(--color-border)`
- Border-radius: `2px`
- Padding: `12px 14px`
- Font: Inter 15px, `var(--color-text)`
- Focus: border-color `var(--color-accent)`, `outline: none`, `box-shadow: 0 0 0 3px var(--color-accent-muted)`
- Transition: border-color 180ms ease, box-shadow 180ms ease

**Submit button:**
- Same as CTA button above: `var(--color-accent)` bg, white text, `border-radius: 2px`
- Label: `Send` — not "Submit"
- Full-width on mobile

**Privacy note** (below button):
- `I'll only use your details to respond to your message.`
- Inter 12px, `var(--color-text-muted)`, `margin-top: var(--space-2)`

---

### 5.6 FOOTER

```
[Carla Burns]  ·  [© 2025]  ·  [UKCP Registered  BACP Registered]
```

Or two-line minimal:
```
Carla Burns
© 2025
```

- All Inter 12px, `var(--color-text-muted)`, `letter-spacing: 0.04em`
- `text-align: center`
- Top border: `1px solid var(--color-border)`
- Background: `var(--color-bg)` — same as page, no contrast change

---

### 5.7 ABOUT Page

Inherits NAV and FOOTER from main page.

**Layout — single column, centred, `max-width: var(--content-width)` (720px)**

```
[Portrait — 240px circular, centred]
margin-top: --space-8

[Section label: ABOUT]

[Biography paragraphs]
```

**Portrait:**
- `assets/Carla_small_profile.png`
- `width: 240px; height: 240px` desktop; `200px` tablet/mobile
- `border-radius: 50%`
- Centred, `margin: 0 auto var(--space-6)`

**Biography:**
- Inter 15px (or 16px — slightly more room to breathe here), `line-height: 1.8`
- Paragraphs separated by `margin-bottom: var(--space-3)` (24px)
- First paragraph slightly larger: `font-size: 1.0625rem` (17px) — the "I'm Carla" opener
- Credentials line at end: Inter 13px, `var(--color-text-muted)`

---

## 6. Border Radius

| Element | Value | Rationale |
|---|---|---|
| Buttons (CTA, Submit) | `2px` | Near-sharp. Modern but not aggressive. |
| Form inputs + textarea | `2px` | Matches button — consistent UI register |
| Portrait image | `50%` | Circular crop, already prepared |
| Pill tags / badges | `20px` | If used for Areas of Work as chips — kept for option |
| Nav toggle track | `12px` | Soft pill shape for the theme switcher |
| Cards / panels | `4px` | If any card surface is added later |
| Focus ring | N/A | `box-shadow` based, no radius needed |

**Principle:** Near-flat radius throughout. The softness comes from whitespace, colour, and typography — not from rounded corners.

---

## 7. Animation Principles

### Philosophy

Borrowed from co2.is: purposeful, not decorative. Motion serves clarity. Nothing animates just to animate. The site should feel like it arrives quietly.

### Page Load Stagger

Elements animate in on load, sequentially. All use:
- `opacity: 0 → 1`
- `transform: translateY(16px) → translateY(0)`
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (fast out, smooth decelerate)
- Duration: `600ms`

| Element | Delay |
|---|---|
| NAV | `0ms` |
| Hero label + tagline | `100ms` |
| Hero statement | `220ms` |
| Hero sub-intro | `340ms` |
| Hero CTA | `440ms` |
| Hero portrait | `300ms` (fades in simultaneously with statement, no Y shift — just opacity) |

### Scroll-triggered Section Reveals

Use `IntersectionObserver` (threshold: `0.15`). When a section enters the viewport:
- Same animation as page load (`translateY(16px) → 0`, opacity 0 → 1)
- Duration: `500ms`, easing: `cubic-bezier(0.22, 1, 0.36, 1)`
- Stagger within sections: each child delays by `80ms`

Sections: HOW pillars (stagger left → right), PRACTICAL rows (stagger top → bottom), contact form fields (stagger top → bottom).

**Reduce motion:** Wrap all animations in `@media (prefers-reduced-motion: no-preference)`. If reduced motion is preferred, no translate — opacity only at `300ms` with no delay.

### Hover States

| Element | Effect | Duration |
|---|---|---|
| Nav links | `color → var(--color-accent)` | 180ms ease |
| Nav active (in-view) | Persistent `var(--color-accent)` | — |
| CTA / Submit button | `background → var(--color-accent-hover)` + `translateY(-1px)` | 200ms ease |
| Button press | `translateY(0)` | 80ms ease |
| Form field focus | border-color + box-shadow (see above) | 180ms ease |
| Portrait (About page) | Very subtle: `filter: brightness(1.02)` | 300ms ease |
| `mailto:` link | Underline appears | 150ms ease |

### Theme Toggle Transition

When switching themes, all `--color-*` tokens transition simultaneously:

```css
html {
  transition:
    background-color 300ms ease,
    color 300ms ease;
}

/* Key elements also get transition: */
body, nav, section, footer, button, input, textarea {
  transition:
    background-color 300ms ease,
    border-color 300ms ease,
    color 300ms ease,
    box-shadow 300ms ease;
}
```

Do **not** transition `transform` or `opacity` globally — will interfere with scroll animations.

---

## 8. Responsive Breakpoints

Matching the co2.is system, simplified for this site's needs:

```css
/* Breakpoints */
--bp-mobile:  639px;   /* below this = mobile */
--bp-tablet:  1023px;  /* 640–1023px = tablet */
--bp-desktop: 1024px;  /* 1024px+ = desktop */
```

### Layout Shifts: Desktop → Tablet → Mobile

| Component | Desktop (≥1024px) | Tablet (640–1023px) | Mobile (<640px) |
|---|---|---|---|
| **NAV** | Brand left, 4 links + toggle right, `56px` height | Same, reduce link gap to `24px`, toggle shrinks | Brand left, links same line in `12px`, toggle right or 2nd line |
| **Hero** | Flex row: text 60% / portrait 180px right | Flex row: text 65% / portrait 140px right | Stack: portrait 120px centred top, text centred below |
| **Hero statement** | `1.875rem` Lora | `1.625rem` | `1.5rem` |
| **HOW pillars** | 3-column grid, `64px` gap | 1-column stacked | 1-column stacked |
| **Poem** | Centred, `max-width: 440px` | Same | Left-aligned, full-width |
| **PRACTICAL** | Label left `80px`, value flex-1 | Same | Label above value, full-width |
| **CONTACT form** | `max-width: 480px`, left-aligned | Same | Full-width, all padding reduced |
| **About portrait** | `240px` centred | `200px` centred | `180px` centred |
| **About bio** | `max-width: 720px`, centred | `max-width: 600px` | Full-width, `24px` gutter |
| **Footer** | Single line centred | Same | Two lines stacked, centred |

### Fluid Typography (clamp summary)

```css
/* Hero statement */
font-size: clamp(1.5rem, 3vw, 1.875rem);

/* Section headings */
font-size: clamp(1.25rem, 2.5vw, 1.5rem);

/* Page gutter */
padding-inline: clamp(24px, 5vw, 80px);
```

---

## 9. Assets Reference

| File | Usage | Notes |
|---|---|---|
| `assets/Carla_small_profile.png` | Hero (right side) + About page (top, centred) | Already circular-cropped. No editing needed. 180px hero / 240px about. |
| `assets/marshland.JPG` | Not currently assigned | Could be used as a subtle background texture for HOW or PRACTICAL section if needed |
| `assets/plant-heart.jpg` | Not currently assigned | Reserve for future use |
| `assets/palm-trees.JPG` | Not currently assigned | Reserve |
| `assets/tree-in-blue.jpg` | Not currently assigned | Could complement blue theme if a background image is wanted |
| `assets/blue-sky.jpeg` | Not currently assigned | Reserve |
| `assets/clouds.jpeg` | Not currently assigned | Reserve |
| `assets/funny-sign.jpeg` | Not currently assigned | Reserve |

**Note on background images:** The current design spec assumes **no background images** — colour and whitespace carry the design. The landscape photos above are available if the client later wants a more atmospheric section divider (e.g., a full-bleed `marshland.JPG` between HOW and PRACTICAL in the green theme). Do not use them without approval.

---

## Quick Reference Cheatsheet (for developer)

```
Fonts:       Lora (serif, headings) + Inter (sans, body/UI)
Base size:   16px
Spacing:     8px grid (--space-1 through --space-10)
Max-width:   1120px page / 720px content
Breakpoints: 640px (tablet) / 1024px (desktop)
Radius:      2px UI / 50% portrait / 12px toggle
Transition:  180-200ms ease (hover) / 300ms ease (theme) / 600ms load stagger
Themes:      CSS custom props on <html> class, persisted via localStorage
Animation:   translateY(16px)→0 + opacity / cubic-bezier(0.22,1,0.36,1)
Reduce:      @media (prefers-reduced-motion) — opacity only, no transform
```
