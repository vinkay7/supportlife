# plan.md — Support Life Foundation Ultra‑Premium UI + GSAP Redesign

## 1) Objectives
- Deliver a **multi-page, agency-quality** redesign that preserves **exact PDF content** while elevating hierarchy, spacing, and UX to a **10/10 cinematic** experience.
- Implement a **cohesive GSAP motion system** (GSAP + ScrollTrigger only) for page entrances, scroll storytelling, parallax depth, card staggers, and micro-interactions.
- Maintain brand palette: **vibrant blue + yellow/orange + light teal accents**, black/dark gray text; **no glassmorphism**, no clutter.
- Use **high-quality stock imagery** (Unsplash) matched to each program theme; ensure performance (60fps, transform-based animation, lazy images).
- Pure frontend: **visual-only CTAs/forms**, **Donate** is a button only; backend untouched.

## 2) Implementation Steps

### Phase 1 — Core Motion System POC (Isolation)
> Core risk = motion quality/perf across routes (ScrollTrigger refresh, reduced-motion, image loading).

**User stories**
1. As a visitor, I see a cinematic hero load sequence that feels premium and smooth.
2. As a visitor, scrolling reveals sections with layered depth (parallax + stagger) without jitter.
3. As a visitor, the navbar shrinks/solidifies on scroll without layout shift.
4. As a visitor, program cards animate in as a staggered grid and feel responsive on hover.
5. As a visitor, I can navigate between pages and animations re-init correctly every time.

**Steps**
- Web research (brief): best practices for **GSAP + React Router + ScrollTrigger** lifecycle, cleanup, `gsap.context`, `ScrollTrigger.refresh()`.
- Create a **/motion-lab** route with:
  - Hero split-style title reveal (no external split-text lib; manual span wrapping)
  - Section reveal pattern + image scale-in + parallax
  - Staggered card grid + hover lift/tilt (1–2deg)
  - Navbar shrink on scroll
  - Reduced-motion fallback (`prefers-reduced-motion`)
- Validate:
  - Route changes kill/cleanup triggers, no duplicated triggers
  - 60fps feel on mid-range screens; only transforms/opacity

### Phase 2 — V1 App Development (Multi-page + Premium UI)

**User stories**
1. As a visitor, I can understand the mission and key programs within 1–2 scrolls on Home.
2. As a visitor, I can browse all local programs from a structured Programs page.
3. As a visitor, I can open each program detail page and read the exact PDF content clearly.
4. As a visitor, I can explore the International program and see the fundraising card state.
5. As a visitor, I can find contact info and social links consistently in header/footer.

**Build**
- App foundation
  - Add **react-router-dom** routes: Home, Programs, Program Detail pages, International, Mission, Get Involved, Donate, Motion Lab (dev).
  - Global layout: top contact bar + navbar + footer.
  - Tailwind + shadcn/ui primitives; set max width **1200–1280**, 12-col grid utilities, 8px rhythm.
  - Fonts: **Inter/Poppins** (one primary, one accent) with clear type scale.
- Content modeling (exact text)
  - Create a single source of truth: `content/supportlifeContent.ts` with all PDF strings (no rewriting).
  - Program routes:
    - **You Are Not Alone! (YANA Community Food Share)** (with receive/volunteer steps + CTAs)
    - **Hot Meals** (HALAL meals weekly until September + allergy note)
    - **Project Educate** (teacher shortage, UC Berkeley volunteers/course credit)
    - **COVID-19 Mobile Vaccination Clinics** (no longer active)
    - **The Hiring — 2020 Census** (expired + 1400 applications)
    - **Millbrae Fire Campaign** (Olga Sanchez quote)
    - **Islamic Center of Sierra Leone (“Love Speech”)** (fundraising card: $9,949 of $250,000)
- Page composition (IA journey; Home is cinematic but clean)
  - Home sections in order: Hero (tagline + documentary embed block) → Mission/Project Educate story block → Program overview grid → Local Programs interactive cards → Campaign highlights storytelling → Community impact (Hot Meals + Food Share) → International preview → Volunteer/Donate conversion → Footer.
- GSAP system applied across pages
  - Shared hooks/components: `useGsapSectionReveal`, `useParallax`, `useRouteTransition` (simple fade + lift), `AnimatedLinkUnderline`, `MagneticButton` (subtle).
  - Image reveal + parallax; card stagger on enter; micro-interactions.
- Imagery
  - Source Unsplash images per page/theme; add attribution in code comments.
  - Optimize: `loading="lazy"`, responsive sizes, avoid huge assets.

**Phase 2 testing checkpoint**
- Run one full E2E UX pass: navigation, scroll performance, route transitions, responsive layouts.

### Phase 3 — Polish + Production Hardening

**User stories**
1. As a visitor on mobile, animations still feel smooth and readable.
2. As a visitor, I never lose context—active nav state and breadcrumbs are clear.
3. As a visitor, CTAs feel interactive but never distracting.
4. As a visitor, “No Longer Active” programs are clearly labeled and styled differently.
5. As a visitor with motion sensitivity, reduced-motion mode is respected.

**Steps**
- Refine motion timings/easing for “luxury” feel; normalize across sections.
- Add nav active states, optional breadcrumbs on detail pages.
- Improve accessibility: focus states, contrast, skip-to-content, aria labels for social links.
- Performance pass: minimize ScrollTriggers, reuse reveal patterns, ensure cleanup on unmount.
- Replace any inconsistent spacing; enforce section spacing (80–120px) and internal (24–40px).

**Phase 3 testing checkpoint**
- E2E test on multiple viewports; verify no animation duplication, no layout shifts, no console warnings.

### Phase 4 — Final QA + Launch Readiness

**User stories**
1. As a visitor, every page loads with a premium entrance and consistent branding.
2. As a visitor, I can quickly find programs, mission, and contact info from any page.
3. As a visitor, images load progressively without blocking interaction.
4. As a visitor, the Donate CTA is always visible when needed but never intrusive.
5. As a stakeholder, the site matches the PDF content exactly while looking dramatically more premium.

**Steps**
- Content verification pass against PDF (exact strings).
- Remove dev-only /motion-lab route (or hide behind flag).
- Final responsive + accessibility checks; lighthouse-style sanity pass (manual).

## 3) Next Actions
1. Implement Phase 1 Motion Lab POC (GSAP patterns + router lifecycle cleanup).
2. Lock design tokens: colors, type scale, button/card styles (Tailwind + shadcn).
3. Build routing + shared layout (header/footer), then Home page IA with GSAP.
4. Add Programs + all detail pages using centralized content module.
5. Run E2E testing after Phase 2 and Phase 3; fix regressions immediately.

## 4) Success Criteria
- **Premium look/feel**: cinematic hero, intentional scroll storytelling, strong hierarchy, no clutter.
- **Motion quality**: smooth GSAP animations, cohesive system, no random effects, 60fps feel.
- **Technical correctness**: no duplicated ScrollTriggers after navigation; clean unmount/refresh.
- **Content fidelity**: all text and program details match the PDF exactly.
- **UX**: clear navigation, readable sections, consistent CTAs, strong mobile experience.
