{
  "brand_attributes": {
    "tone": ["premium", "trustworthy", "cinematic", "nonprofit-appropriate", "editorial", "calm urgency"],
    "visual_principles": [
      "Apple/Stripe-level restraint: whitespace + hierarchy over decoration",
      "Cinematic storytelling via scroll chapters (GSAP ScrollTrigger)",
      "Depth illusion via layered parallax + scale (no 3D libs)",
      "No glassmorphism; use soft elevation + crisp borders",
      "Alternating left/right story blocks; separation via spacing not lines"
    ]
  },
  "design_tokens": {
    "note": "KEEP existing brand colors. Below are systematized tokens using the same brand family (vibrant blue + yellow/orange accents + light teal/light blue accents + neutral text). Adjust hex values ONLY if your PDF already specifies exact hex; otherwise use these as defaults.",
    "css_custom_properties": {
      ":root": {
        "--slf-blue-600": "#0B5FFF",
        "--slf-blue-700": "#0847D6",
        "--slf-blue-50": "#EEF5FF",
        "--slf-teal-50": "#E9FBF7",
        "--slf-teal-200": "#A7E8DA",
        "--slf-sun-500": "#FFB000",
        "--slf-orange-500": "#FF7A1A",
        "--slf-ink-900": "#0B1220",
        "--slf-ink-700": "#2A3441",
        "--slf-ink-500": "#556070",
        "--slf-border": "#E6EAF0",
        "--slf-surface": "#FFFFFF",
        "--slf-surface-2": "#F7FAFF",
        "--slf-focus": "#0B5FFF",
        "--slf-success": "#0E9F6E",
        "--slf-warning": "#FFB000",
        "--slf-danger": "#E11D48",
        "--slf-shadow-sm": "0 1px 2px rgba(11,18,32,0.06)",
        "--slf-shadow-md": "0 10px 30px rgba(11,18,32,0.10)",
        "--slf-shadow-lg": "0 24px 60px rgba(11,18,32,0.14)",
        "--slf-radius-sm": "10px",
        "--slf-radius-md": "14px",
        "--slf-radius-lg": "18px",
        "--slf-container": "1280px",
        "--slf-gutter": "24px",
        "--slf-section-y": "96px",
        "--slf-rhythm": "8px"
      }
    },
    "tailwind_mapping_guidance": {
      "approach": "Use CSS variables in index.css (shadcn tokens) and reference via Tailwind arbitrary values when needed: bg-[color:var(--slf-blue-50)] text-[color:var(--slf-ink-900)] shadow-[var(--slf-shadow-md)].",
      "shadcn_hsl_tokens": {
        "background": "0 0% 100%",
        "foreground": "222 47% 8%",
        "primary": "217 100% 52%",
        "primary-foreground": "0 0% 100%",
        "secondary": "214 100% 97%",
        "secondary-foreground": "222 47% 8%",
        "accent": "46 100% 50%",
        "accent-foreground": "222 47% 8%",
        "muted": "210 40% 96%",
        "muted-foreground": "215 16% 35%",
        "border": "214 32% 91%",
        "ring": "217 100% 52%"
      }
    },
    "gradients_and_texture": {
      "restriction": "No heavy gradients; if used, keep under 20% viewport and only as section background accents. No saturated purple/pink combos.",
      "allowed_background_accents": [
        {
          "name": "hero-wash",
          "css": "radial-gradient(900px 500px at 15% 10%, rgba(11,95,255,0.14), transparent 60%), radial-gradient(700px 420px at 85% 20%, rgba(255,176,0,0.12), transparent 55%), linear-gradient(180deg, rgba(233,251,247,0.55), rgba(238,245,255,0.55))"
        }
      ],
      "noise_overlay": {
        "usage": "Apply subtle noise overlay on hero + large image sections only (opacity 0.04–0.06).",
        "css_snippet": ".slf-noise::before{content:'';position:absolute;inset:0;background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E');mix-blend-mode:multiply;opacity:.05;pointer-events:none;}"
      }
    },
    "spacing_system": {
      "vertical_rhythm": "8px",
      "section_spacing": "80–120px between sections (mobile 64px, desktop 96–120px)",
      "internal_padding": "24–40px inside cards/blocks",
      "recommended_tailwind": {
        "section": "py-16 md:py-24",
        "container": "mx-auto max-w-[1280px] px-6 lg:px-8",
        "stack": "space-y-6 md:space-y-8",
        "card_padding": "p-6 md:p-8"
      }
    },
    "grid_system": {
      "columns": 12,
      "max_width": "1200–1280px",
      "layout_rule": "Use 12-col grid on desktop; collapse to single column on mobile; use 2-col story blocks at md+.",
      "tailwind_scaffold": "grid grid-cols-12 gap-6 lg:gap-8"
    },
    "typography": {
      "fonts": {
        "primary": "Inter (UI + body)",
        "secondary": "Poppins (hero + section headings)",
        "google_fonts_import": "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap');"
      },
      "scale": {
        "h1": "text-4xl sm:text-5xl lg:text-6xl (hero only; target 56–72px)",
        "h2": "text-3xl md:text-4xl (target 36–44px)",
        "h3": "text-xl md:text-2xl (target 24–28px)",
        "body": "text-sm md:text-base (16–18px) leading-relaxed (1.6)",
        "eyebrow": "text-xs tracking-[0.18em] uppercase"
      },
      "tailwind_classes": {
        "h1": "font-[600] tracking-[-0.02em] text-[color:var(--slf-ink-900)]",
        "h2": "font-[600] tracking-[-0.015em]",
        "body": "text-[color:var(--slf-ink-700)] leading-[1.65]"
      }
    },
    "radius_and_elevation": {
      "cards": {
        "radius": "14–18px",
        "border": "1px solid var(--slf-border)",
        "shadow": "shadow-[var(--slf-shadow-md)]",
        "hover": "translateY(-4px) + shadow-lg (no blur/glass)"
      },
      "buttons": {
        "radius": "10–12px",
        "primary": "solid blue with subtle warm highlight on hover",
        "secondary": "white surface with blue border",
        "ghost": "text blue with animated underline"
      }
    }
  },
  "component_path": {
    "shadcn_primary": [
      "/app/frontend/src/components/ui/button.jsx",
      "/app/frontend/src/components/ui/card.jsx",
      "/app/frontend/src/components/ui/badge.jsx",
      "/app/frontend/src/components/ui/navigation-menu.jsx",
      "/app/frontend/src/components/ui/sheet.jsx",
      "/app/frontend/src/components/ui/separator.jsx",
      "/app/frontend/src/components/ui/progress.jsx",
      "/app/frontend/src/components/ui/accordion.jsx",
      "/app/frontend/src/components/ui/tabs.jsx",
      "/app/frontend/src/components/ui/carousel.jsx",
      "/app/frontend/src/components/ui/tooltip.jsx",
      "/app/frontend/src/components/ui/sonner.jsx"
    ],
    "recommended_new_components_to_create_js": [
      "src/components/layout/TopContactBar.js",
      "src/components/layout/SiteNavbar.js",
      "src/components/layout/SiteFooter.js",
      "src/components/sections/HeroCinematic.js",
      "src/components/sections/StorySplitSection.js",
      "src/components/sections/ProgramsGrid.js",
      "src/components/sections/ImpactStatsBand.js",
      "src/components/sections/CampaignHighlightsStory.js",
      "src/components/sections/InternationalFundraisingCard.js",
      "src/components/motion/usePrefersReducedMotion.js",
      "src/components/motion/gsapDefaults.js",
      "src/components/motion/useScrollReveal.js"
    ]
  },
  "layout_blueprint": {
    "global_shell": {
      "top_contact_bar": {
        "height": "36–40px",
        "content": "Phone, email, address + small social links",
        "style": "bg-[color:var(--slf-blue-50)] text-[color:var(--slf-ink-700)]",
        "data_testids": [
          "topbar-phone-link",
          "topbar-email-link",
          "topbar-address-text",
          "topbar-social-links"
        ]
      },
      "navbar": {
        "behavior": "Transparent over hero; becomes solid white with shadow after scroll; shrinks padding",
        "desktop": "Left logo, center nav links, right CTA Donate",
        "mobile": "Hamburger -> Sheet",
        "data_testids": [
          "navbar-logo-link",
          "navbar-primary-nav",
          "navbar-donate-button",
          "navbar-mobile-menu-button"
        ]
      },
      "footer": {
        "structure": "3–4 columns: mission blurb, programs, get involved, contact",
        "style": "bg-white with top border + generous padding",
        "data_testids": ["footer-contact-phone", "footer-contact-email", "footer-address"]
      }
    },
    "home_page_sections_order": [
      "HeroCinematic",
      "MissionStory (split section)",
      "ProgramOverviewGrid",
      "LocalProgramsInteractiveCards",
      "CampaignHighlightsScrollStory",
      "CommunityImpact (Hot Meals + YANA)",
      "InternationalPrograms (fundraising card)",
      "VolunteerCTA",
      "DonateCTA",
      "Footer"
    ],
    "page_templates": {
      "overview_page": "Hero-lite + filter/tabs + grid + CTA band",
      "detail_page": "Hero image + sticky in-page nav (optional) + sections: About, Impact, How it works, Gallery, CTA",
      "donate_page": "Visual-only: trust blocks + donation tiers cards + primary CTA button"
    }
  },
  "gsap_motion_system": {
    "rules": [
      "GSAP + ScrollTrigger only. No Three.js.",
      "Transform-only where possible (translate/scale/opacity).",
      "Use gsap.context() in React and cleanup on unmount.",
      "Respect prefers-reduced-motion: disable ScrollTrigger + set final states.",
      "No random animations: every section uses the same reveal grammar."
    ],
    "defaults": {
      "ease": "power3.out (or expo.out for hero)",
      "duration": "0.8–1.2s for reveals",
      "stagger": "0.06–0.12",
      "scrub": "0.6–1 (only for parallax/pinned storytelling)",
      "scroll_start": "top 80%",
      "scroll_end": "bottom 20%"
    },
    "global_page_entrance": {
      "sequence": [
        "body fade in (opacity 0 -> 1)",
        "hero background subtle zoom-out (scale 1.06 -> 1)",
        "navbar appears with delay",
        "hero headline split reveal",
        "CTA slides in"
      ],
      "js_scaffold": "// gsapDefaults.js\nimport gsap from 'gsap';\nimport { ScrollTrigger } from 'gsap/ScrollTrigger';\n\nexport const initGsap = () => {\n  gsap.registerPlugin(ScrollTrigger);\n  gsap.defaults({ ease: 'power3.out', duration: 0.9 });\n};\n"
    },
    "reveal_grammar": {
      "text_reveal": {
        "from": "y: 18, opacity: 0",
        "to": "y: 0, opacity: 1",
        "trigger": "[data-animate='reveal']",
        "notes": "Use small y offsets; avoid big slides."
      },
      "card_stagger": {
        "from": "y: 22, opacity: 0",
        "to": "y: 0, opacity: 1",
        "stagger": "0.08",
        "trigger": "[data-animate='card-grid'] > *"
      },
      "image_reveal": {
        "from": "scale: 1.05, opacity: 0",
        "to": "scale: 1, opacity: 1",
        "notes": "Pair with subtle overlay fade for premium feel."
      }
    },
    "scroll_storytelling_patterns": {
      "pinned_chapter": {
        "use_case": "Campaign Highlights: pin a left column 'chapter title' while right column cards swap/slide",
        "scrolltrigger": {"pin": true, "scrub": 1, "end": "+=900"}
      },
      "parallax_layers": {
        "use_case": "Hero background image moves slower than foreground content",
        "implementation": "gsap.to('[data-parallax=bg]', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '[data-section=hero]', scrub: 1 } })"
      },
      "navbar_shrink": {
        "use_case": "Premium header compression after 40–80px scroll",
        "implementation": "ScrollTrigger.create({ start: 'top -80', onUpdate: self => setShrunk(self.progress>0) })"
      }
    },
    "micro_interactions": {
      "buttons": {
        "hover": "scale 1.02, shadow increases, background shifts slightly",
        "press": "scale 0.98",
        "focus": "2px ring in brand blue"
      },
      "cards": {
        "hover": "translateY(-4px) + rotate(0.5deg) max + shadow-lg",
        "cursor": "optional: subtle highlight follows cursor using CSS radial mask (no heavy JS)"
      },
      "links": {
        "hover": "animated underline from left to right (background-size transition)"
      }
    }
  },
  "page_by_page_layout": {
    "home": {
      "hero": {
        "layout": "12-col: left 7 cols text, right 5 cols image/impact card; mobile stacks",
        "elements": ["eyebrow", "H1 mission", "supporting paragraph", "Primary CTA Donate (visual)", "Secondary CTA Volunteer"],
        "motion": ["bg slow zoom loop", "headline split reveal", "CTA delayed slide", "parallax bg"],
        "data_testids": ["home-hero-primary-cta", "home-hero-secondary-cta"]
      },
      "mission_story": {
        "layout": "Alternating split sections with large image + text block",
        "motion": "image scale-in + text reveal stagger"
      },
      "program_overview": {
        "layout": "3-up cards desktop, 1-up mobile; each card has icon, title, 2-line summary, 'Learn more'",
        "motion": "staggered card rise on scroll"
      },
      "campaign_highlights": {
        "layout": "Pinned chapter with scrolling highlights; use timeline labels + snap optional",
        "motion": "pinned + scrubbed transitions"
      },
      "international_programs": {
        "layout": "Feature block + fundraising progress card ($9,949 of $250,000)",
        "components": ["progress"],
        "motion": "progress bar animates when in view"
      },
      "conversion": {
        "layout": "Two CTA bands: Volunteer then Donate; strong hierarchy; minimal copy",
        "motion": "CTA band fades up; button hover micro"
      }
    },
    "programs_overview": {
      "layout": "Hero-lite + Tabs (Local / International / Past Campaigns) + grid",
      "components": ["tabs", "card", "badge"],
      "motion": "tab content crossfade + stagger"
    },
    "program_detail": {
      "layout": "Hero image + title + key facts; then sections with alternating media",
      "components": ["accordion (FAQ/How it works)", "card"],
      "motion": "section reveals + image parallax"
    },
    "mission": {
      "layout": "Editorial: big quote block + timeline-like story sections",
      "motion": "quote reveal + subtle pinned chapter"
    },
    "get_involved": {
      "layout": "Volunteer pathways cards + contact CTA",
      "motion": "card stagger + hover lift"
    },
    "donate": {
      "layout": "Donation tiers cards (visual) + trust blocks + primary CTA",
      "motion": "tiers stagger + CTA emphasis"
    }
  },
  "accessibility_and_performance": {
    "a11y": [
      "WCAG AA contrast: ink text on white; blue used for CTAs only",
      "Visible focus ring using --slf-focus",
      "Reduced motion: disable scrub/pin; keep simple fades",
      "Semantic headings (H1 once per page)"
    ],
    "performance": [
      "Lazy-load images (loading='lazy') and set width/height to prevent CLS",
      "Use will-change: transform only on animated elements",
      "Avoid animating box-shadow continuously; only on hover",
      "Use gsap.matchMedia() for responsive triggers"
    ]
  },
  "image_urls": {
    "hero_documentary": [
      {
        "url": "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwyfHxjb21tdW5pdHklMjBmb29kJTIwYmFuayUyMHZvbHVudGVlcnMlMjBwYWNraW5nJTIwYm94ZXN8ZW58MHx8fHwxNzgxMzU1ODE3fDA&ixlib=rb-4.1.0&q=85",
        "description": "Volunteers with boxes; strong documentary feel for hero/right column"
      }
    ],
    "community_impact": [
      {
        "url": "https://images.unsplash.com/photo-1593113616828-6f22bca04804?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBmb29kJTIwYmFuayUyMHZvbHVudGVlcnMlMjBwYWNraW5nJTIwYm94ZXN8ZW58MHx8fHwxNzgxMzU1ODE3fDA&ixlib=rb-4.1.0&q=85",
        "description": "Hands + bags; use for YANA/food redistribution section"
      },
      {
        "url": "https://images.unsplash.com/photo-1599928407261-9c4143401705?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHw0fHxub25wcm9maXQlMjBjb21tdW5pdHklMjB2b2x1bnRlZXJpbmclMjBmb29kJTIwZGlzdHJpYnV0aW9uJTIwZG9jdW1lbnRhcnklMjBzdHlsZXxlbnwwfHx8Ymx1ZXwxNzgxMzU1ODA3fDA&ixlib=rb-4.1.0&q=85",
        "description": "Outdoor distribution; use for Hot Meals weekly distribution"
      }
    ],
    "supporting_broll": [
      {
        "url": "https://images.unsplash.com/photo-1588822534638-028d5ddc07ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwzfHxjb21tdW5pdHklMjBmb29kJTIwYmFuayUyMHZvbHVudGVlcnMlMjBwYWNraW5nJTIwYm94ZXN8ZW58MHx8fHwxNzgxMzU1ODE3fDA&ixlib=rb-4.1.0&q=85",
        "description": "Volunteer carrying box; use for Get Involved page"
      }
    ]
  },
  "instructions_to_main_agent": {
    "global_css_updates": [
      "Replace CRA default App.css usage; do NOT center align .App.",
      "Update index.css :root shadcn tokens to match brand HSL mapping above.",
      "Add Google Fonts import for Inter + Poppins.",
      "Add utility classes for noise overlay + hero background wash."
    ],
    "data_testid_policy": "Add data-testid to every CTA button, nav link, program card, progress values, and key text blocks (mission headline, fundraising amount). Use kebab-case role-based names.",
    "gsap_implementation_notes_react_js": [
      "Use gsap.context(() => { ... }, ref) inside each section component.",
      "Create a shared hook usePrefersReducedMotion() and guard all ScrollTrigger creation.",
      "Use gsap.matchMedia() to adjust pin durations and start/end per breakpoint.",
      "Avoid animating layout properties (height/width) during scroll; animate padding via CSS class toggle for navbar shrink."
    ],
    "routing": "Use react-router-dom with consistent Layout wrapper (TopContactBar + Navbar + Outlet + Footer).",
    "forms": "All forms are visual-only CTAs; use shadcn Input/Textarea for styling but no submit logic."
  },
  "appendix_general_ui_ux_design_guidelines": "<General UI UX Design Guidelines>  \n    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms\n    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text\n   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json\n\n **GRADIENT RESTRICTION RULE**\nNEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc\nNEVER use dark gradients for logo, testimonial, footer etc\nNEVER let gradients cover more than 20% of the viewport.\nNEVER apply gradients to text-heavy content or reading areas.\nNEVER use gradients on small UI elements (<100px width).\nNEVER stack multiple gradient layers in the same viewport.\n\n**ENFORCEMENT RULE:**\n    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors\n\n**How and where to use:**\n   • Section backgrounds (not content backgrounds)\n   • Hero section header content. Eg: dark to light to dark color\n   • Decorative overlays and accent elements only\n   • Hero section with 2-3 mild color\n   • Gradients creation can be done for any angle say horizontal, vertical or diagonal\n\n- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**\n\n</Font Guidelines>\n\n- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. \n   \n- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.\n\n- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.\n   \n- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly\n    Eg: - if it implies playful/energetic, choose a colorful scheme\n           - if it implies monochrome/minimal, choose a black–white/neutral scheme\n\n**Component Reuse:**\n\t- Prioritize using pre-existing components from src/components/ui when applicable\n\t- Create new components that match the style and conventions of existing components when needed\n\t- Examine existing components to understand the project's component patterns before creating new ones\n\n**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component\n\n**Best Practices:**\n\t- Use Shadcn/UI as the primary component library for consistency and accessibility\n\t- Import path: ./components/[component-name]\n\n**Export Conventions:**\n\t- Components MUST use named exports (export const ComponentName = ...)\n\t- Pages MUST use default exports (export default function PageName() {...})\n\n**Toasts:**\n  - Use `sonner` for toasts\"\n  - Sonner component are located in `/app/src/components/ui/sonner.tsx`\n\nUse 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.\n</General UI UX Design Guidelines>"
}
