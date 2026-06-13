# plan.md — Support Life Foundation Ultra‑Premium UI + GSAP Redesign (UPDATED)

## 1) Objectives
- Deliver a **multi-page, agency-quality** redesign that preserves **exact PDF content** while elevating hierarchy, spacing, and UX to a **10/10 cinematic** experience.
- Implement a **cohesive GSAP motion system** (GSAP + ScrollTrigger only) for page entrances, scroll storytelling, parallax depth, card staggers, and micro-interactions.
- Maintain brand palette: **vibrant blue + yellow/orange + light teal accents**, black/dark gray text; **no glassmorphism**, no clutter.
- Use **high-quality stock imagery** (Unsplash) matched to each program theme; ensure performance (60fps, transform-based animation, lazy images + robust fallbacks).
- Pure frontend: **visual-only CTAs/forms**, **Donate** is visual only; backend untouched.

**Current status:** Phase 2 is complete. The premium redesign has been fully implemented, verified via screenshots, and passed end-to-end frontend testing (100% pass).

## 2) Implementation Steps

### Phase 1 — Core Motion System POC (Isolation)
> Originally planned to de-risk motion quality/perf across routes.

**Status: Completed (folded into Phase 2 build).**

**Delivered outcomes**
- GSAP lifecycle practices implemented: `gsap.context()` cleanup per component, route-change scroll reset + `ScrollTrigger.refresh()` via `ScrollManager`.
- Reduced-motion strategy implemented via `prefers-reduced-motion` guards.

### Phase 2 — V1 App Development (Multi-page + Premium UI)

**Status: COMPLETE.**

**User stories achieved**
1. Visitors understand the mission and key programs within 1–2 scrolls on Home.
2. Visitors can browse local programs from a structured Programs page.
3. Visitors can open each program detail page and read the exact PDF content clearly.
4. Visitors can explore the International program and see the fundraising card state.
5. Visitors can find contact info and social links consistently in header/footer.

**Build delivered**
- **App foundation**
  - Implemented **react-router-dom** multi-page routing:
    - `/` Home
    - `/programs` Programs overview
    - `/programs/:slug` Program detail (x6)
    - `/international` International Programs
    - `/mission` Mission
    - `/get-involved` Get Involved
    - `/donate` Donate
    - `*` 404
  - Shared **Layout shell** on all pages:
    - Top contact bar
    - Sticky navbar with **shrink/solidify on scroll**
    - Footer with sitemap-like structure + contact details
  - Tailwind + shadcn/ui used with a **1280px container**, 12-col grid, premium spacing.
  - Fonts installed via Google Fonts: **Inter + Poppins**.

- **Brand system**
  - Global design tokens implemented in `index.css`:
    - Blues, yellow/orange accents, teal washes, ink neutrals, elevation shadows.
  - Selection styling, scrollbar styling, and subtle noise overlay utilities.

- **Content modeling (exact PDF content)**
  - Centralized exact strings in: `src/data/content.js`.
  - Programs included:
    - **You Are Not Alone! (YANA Community Food Share)**
    - **Hot Meals** (HALAL weekly meals + allergy/dietary limitation note)
    - **Project Educate**
    - **COVID-19 Mobile Vaccination Clinics** (no longer active)
    - **The Hiring — 2020 Census** (expired + 1400 applications)
    - **Millbrae Fire Campaign** (Olga Sanchez quote)
  - International program included:
    - **Islamic Center of Sierra Leone (“Love Speech”)** with fundraising: **$9,949 raised of $250,000**

- **Home page IA (cinematic but clean)**
  - Implemented journey order:
    - HeroCinematic → ImpactStats → MissionStory → ProgramsGrid → CampaignHighlights → CommunityImpact → InternationalPreview → ConversionCTA → Footer

- **GSAP motion system applied globally**
  - **Reveal** wrapper: consistent scroll reveal grammar + optional stagger.
  - **ParallaxImage**: premium image reveal (scale-in) + optional parallax drift.
  - **HeroCinematic**:
    - split-word headline reveal
    - slow background zoom loop
    - scroll parallax
    - documentary block CTA
  - **CampaignHighlights**:
    - rebuilt from risky pinned ScrollTrigger to a **reliable sticky + scroll-linked crossfade** system (fixes blank-gap pin-spacer issue).
  - **FundraisingCard**:
    - progress bar animation + count-up on view.
  - **CTAButton**:
    - subtle magnetic hover + press feedback.
  - **ScrollProgressBar** at top.
  - Reduced-motion fallbacks respected.

- **Imagery + resilience**
  - Stock imagery sourced from Unsplash per program theme.
  - Fixed broken/404 vaccine image.
  - Added `onError` fallback handling to key image components/tags to prevent layout breaks.

**Phase 2 testing checkpoint**
- Completed end-to-end frontend test pass using `testing_agent_v3`:
  - **100% pass**, **zero issues**, **no console errors**.
- Verified key UI via screenshots:
  - cinematic hero
  - programs grid
  - campaign storytelling section

### Phase 3 — Polish + Production Hardening (Optional)

**Status: Optional (only if requested).**

**User stories (future)**
1. Mobile motion feels equally premium with tuned durations and fewer triggers.
2. Accessibility is strengthened beyond baseline (full keyboard-only audit).
3. CTAs feel interactive but never distracting on all devices.
4. "No Longer Active" projects maintain clear visual distinction on every list view.
5. Reduced-motion mode is validated across a wider device range.

**Optional steps**
- Mobile-specific motion tuning (e.g., fewer parallax triggers, adjusted offsets).
- Deep accessibility pass:
  - focus order, skip-to-content, aria labels (audit), contrast checks.
- Performance hardening:
  - ensure all heavy visuals are lazy-loaded with stable aspect ratios,
  - minimize number of active ScrollTriggers.
- Copy/content verification pass against PDF (spot-check every program page).

**Phase 3 testing checkpoint (optional)**
- Re-run E2E tests on multiple viewports (mobile/tablet/desktop) + manual a11y checks.

### Phase 4 — Final QA + Launch Readiness (Optional)

**Status: Optional (current V1 is already complete).**

**User stories (future)**
1. Every page loads with consistent branding and premium entrance.
2. Navigation clarity remains strong under all conditions.
3. Images load progressively without CLS.
4. Donate CTA is consistently placed and non-intrusive.
5. Stakeholders confirm content matches the PDF exactly.

**Optional steps**
- Lighthouse-style sanity pass (manual).
- Final content fidelity audit.
- If desired: add real social links and replace placeholders.

## 3) Next Actions
- **No further required actions** — V1 is complete.
- If requested, execute Phase 3 optional polish:
  1. Mobile motion tuning
  2. Accessibility deep pass
  3. Performance + Lighthouse sanity pass

## 4) Success Criteria
- **Premium look/feel**: cinematic hero, intentional scroll storytelling, strong hierarchy, no clutter.
- **Motion quality**: smooth GSAP animations, cohesive system, no random effects, premium easing.
- **Technical correctness**: clean ScrollTrigger lifecycle across routes; no layout gaps.
- **Content fidelity**: all program details and key numbers match the PDF.
- **UX**: clear navigation, readable sections, consistent CTAs, responsive behavior.
- **Validation**: testing_agent_v3 E2E run passes with **100% success** and no console errors.
