import { useLayoutEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/motion/gsapConfig';
import { IMAGES, FALLBACK_IMAGE } from '@/data/content';

const CHAPTERS = [
    {
        n: '01',
        tag: 'Disaster Relief',
        title: 'Millbrae Fire Campaign',
        text: '“Terrified and hopeless” — the words Olga Sanchez used as she watched her home burn. In April 2020 we fundraised for families suddenly facing homelessness after a fire in Millbrae, CA.',
        image: IMAGES.fire,
    },
    {
        n: '02',
        tag: 'Public Health',
        title: 'COVID-19 Mobile Vaccination Clinics',
        text: 'Support Life Foundation partnered with FEMA to distribute over 20,000 COVID-19 vaccines all over the Bay Area, bringing care directly to communities.',
        image: IMAGES.vaccine,
    },
    {
        n: '03',
        tag: 'Opportunity',
        title: 'The Hiring — 2020 Census',
        text: 'When the decennial Census reinitiated, we worked around the clock to secure part-time positions. Over 1,400 applications came through our community.',
        image: IMAGES.census,
    },
];

// Scroll storytelling via a STICKY image column + scroll-linked crossfade.
// No pin (avoids pin-spacer measurement issues with lazy images).
export const CampaignHighlights = () => {
    const root = useRef(null);
    const [active, setActive] = useState(0);

    useLayoutEffect(() => {
        const el = root.current;
        if (!el || prefersReducedMotion()) return;

        const ctx = gsap.context(() => {
            const chapters = gsap.utils.toArray('[data-chapter]');
            const triggers = chapters.map((ch, i) =>
                ScrollTrigger.create({
                    trigger: ch,
                    start: 'top center',
                    end: 'bottom center',
                    onToggle: (self) => self.isActive && setActive(i),
                })
            );
            return () => triggers.forEach((t) => t.kill());
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={root} className="relative overflow-hidden bg-[var(--slf-ink-900)] py-20 md:py-28">
            <div className="slf-container grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
                {/* Left: chapters */}
                <div>
                    <span className="slf-eyebrow text-[var(--slf-sun-500)]">Campaign Highlights</span>
                    <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-tight text-white md:text-4xl">
                        Moments that moved communities forward
                    </h2>

                    <div className="mt-8 flex flex-col">
                        {CHAPTERS.map((c, i) => (
                            <div
                                key={c.n}
                                data-chapter
                                className={`flex gap-5 border-l-2 py-8 pl-6 transition-all duration-500 lg:min-h-[40vh] lg:items-center ${
                                    active === i ? 'border-[var(--slf-sun-500)] opacity-100' : 'border-white/15 opacity-50'
                                }`}
                            >
                                <span className="text-2xl font-bold text-[var(--slf-sun-500)]">{c.n}</span>
                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--slf-teal-200)]">{c.tag}</span>
                                    <h3 className="mt-1 text-xl font-semibold text-white md:text-2xl">{c.title}</h3>
                                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/70">{c.text}</p>
                                    {/* Mobile image */}
                                    <div className="mt-5 aspect-[4/3] w-full overflow-hidden rounded-2xl lg:hidden">
                                        <img
                                            src={c.image}
                                            alt={c.title}
                                            loading="lazy"
                                            onError={(e) => { if (e.target.src !== FALLBACK_IMAGE) e.target.src = FALLBACK_IMAGE; }}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: sticky crossfade visual (desktop) */}
                <div className="hidden lg:block">
                    <div className="sticky top-24">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] slf-shadow-lg">
                            {CHAPTERS.map((c, i) => (
                                <img
                                    key={c.n}
                                    src={c.image}
                                    alt={c.title}
                                    loading="lazy"
                                    onError={(e) => { if (e.target.src !== FALLBACK_IMAGE) e.target.src = FALLBACK_IMAGE; }}
                                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                                        active === i ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                                    }`}
                                />
                            ))}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1220]/45 to-transparent" />
                            <div className="absolute bottom-5 left-5 flex gap-2">
                                {CHAPTERS.map((c, i) => (
                                    <span
                                        key={c.n}
                                        className={`h-1.5 rounded-full transition-all duration-500 ${
                                            active === i ? 'w-8 bg-[var(--slf-sun-500)]' : 'w-4 bg-white/40'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
