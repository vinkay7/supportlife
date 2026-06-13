import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, Heart, ArrowRight } from 'lucide-react';
import { gsap, prefersReducedMotion } from '@/motion/gsapConfig';
import { IMAGES, TAGLINE, FALLBACK_IMAGE } from '@/data/content';
import { CTAButton } from '@/components/common/CTAButton';

const HEADLINE = ['Empowering', 'Communities,', 'Inspiring', 'Action.'];

export const HeroCinematic = () => {
    const root = useRef(null);
    const bgRef = useRef(null);

    useLayoutEffect(() => {
        const el = root.current;
        if (!el) return;

        if (prefersReducedMotion()) {
            gsap.set(el.querySelectorAll('[data-hero]'), { opacity: 1, y: 0 });
            return;
        }

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
            tl.from(bgRef.current, { scale: 1.18, duration: 1.8, ease: 'power2.out' })
                .from('[data-hero="eyebrow"]', { y: 20, opacity: 0, duration: 0.8 }, 0.2)
                .from('[data-hero="word"]', { y: 60, opacity: 0, duration: 1, stagger: 0.08 }, 0.35)
                .from('[data-hero="sub"]', { y: 24, opacity: 0, duration: 0.8 }, 0.7)
                .from('[data-hero="cta"]', { y: 24, opacity: 0, duration: 0.7, stagger: 0.12 }, 0.85)
                .from('[data-hero="doc"]', { y: 30, opacity: 0, duration: 0.9 }, 1);

            // slow continuous zoom loop on background
            gsap.to(bgRef.current, {
                scale: 1.12,
                duration: 14,
                ease: 'none',
                repeat: -1,
                yoyo: true,
            });

            // parallax on scroll
            gsap.to(bgRef.current, {
                yPercent: 18,
                ease: 'none',
                scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: 1 },
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={root} data-section="hero" className="relative min-h-[92vh] overflow-hidden slf-noise">
            <div ref={bgRef} className="absolute inset-0 will-change-transform">
                <img src={IMAGES.heroVolunteers} alt="Support Life Foundation volunteers" onError={(e) => { if (e.target.src !== FALLBACK_IMAGE) e.target.src = FALLBACK_IMAGE; }} className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220]/88 via-[#0b1220]/68 to-[#0b1220]/28" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/70 via-transparent to-transparent" />

            <div className="slf-container relative z-10 flex min-h-[92vh] flex-col justify-center py-32">
                <div className="max-w-3xl">
                    <span data-hero="eyebrow" className="slf-eyebrow inline-block text-[var(--slf-sun-500)]">
                        Support Life Foundation
                    </span>
                    <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                        {HEADLINE.map((w, i) => (
                            <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                                <span data-hero="word" className="inline-block">{w}</span>
                            </span>
                        ))}
                    </h1>
                    <p data-hero="sub" className="mt-7 max-w-xl text-lg leading-relaxed text-white/85">
                        We alleviate the various forms of oppression in society by developing unique programs —
                        from hot meals and food redistribution to education and disaster relief, locally and around the world.
                    </p>
                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <Link to="/donate" data-hero="cta">
                            <CTAButton size="lg" icon={Heart} data-testid="hero-donate-cta">Donate</CTAButton>
                        </Link>
                        <Link to="/get-involved" data-hero="cta">
                            <CTAButton size="lg" variant="secondary" icon={ArrowRight} data-testid="hero-volunteer-cta">
                                Get Involved
                            </CTAButton>
                        </Link>
                    </div>

                    <button
                        data-hero="doc"
                        data-testid="hero-documentary"
                        className="group mt-12 flex items-center gap-4 text-left"
                    >
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--slf-sun-500)]">
                            <Play className="h-5 w-5 fill-white text-white transition-colors group-hover:fill-[var(--slf-ink-900)] group-hover:text-[var(--slf-ink-900)]" />
                        </span>
                        <span className="flex flex-col">
                            <span className="text-sm font-semibold text-white">Watch the Support Life Documentary</span>
                            <span className="text-xs text-white/70">Watch to learn more ↓</span>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};
