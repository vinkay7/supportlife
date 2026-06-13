import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/motion/gsapConfig';
import { INTERNATIONAL, formatCurrency, FALLBACK_IMAGE } from '@/data/content';
import { CTAButton } from '@/components/common/CTAButton';
import { Icon } from '@/components/common/Icon';

// Fundraising progress card for the Sierra Leone international program.
export const FundraisingCard = ({ compact = false }) => {
    const barRef = useRef(null);
    const numRef = useRef(null);
    const pct = Math.min(100, (INTERNATIONAL.raised / INTERNATIONAL.goal) * 100);
    const [display, setDisplay] = useState(prefersReducedMotion() ? INTERNATIONAL.raised : 0);

    useEffect(() => {
        const bar = barRef.current;
        if (!bar || prefersReducedMotion()) return;
        const obj = { v: 0 };
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: { trigger: bar, start: 'top 90%', once: true },
            });
            tl.fromTo(bar, { width: '0%' }, { width: `${pct}%`, duration: 1.4, ease: 'power3.out' });
            tl.to(obj, {
                v: INTERNATIONAL.raised,
                duration: 1.4,
                ease: 'power1.out',
                onUpdate: () => setDisplay(Math.round(obj.v)),
            }, 0);
        });
        return () => ctx.revert();
    }, [pct]);

    return (
        <div
            data-testid="fundraising-card"
            className="w-full overflow-hidden rounded-[18px] border border-[var(--slf-border)] bg-white slf-shadow-lg"
        >
            <div className="relative h-44 overflow-hidden">
                <img src={INTERNATIONAL.image} alt={INTERNATIONAL.title} className="h-full w-full object-cover" loading="lazy" onError={(e) => { if (e.target.src !== FALLBACK_IMAGE) e.target.src = FALLBACK_IMAGE; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/55 to-transparent" />
                <span className="absolute bottom-4 left-5 rounded-full bg-[var(--slf-sun-500)] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[var(--slf-ink-900)]">
                    International
                </span>
            </div>
            <div className="p-6">
                <h3 className="text-lg font-semibold text-[var(--slf-ink-900)]">{INTERNATIONAL.title}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-[var(--slf-ink-500)]">
                    <Icon name="sparkles" className="h-4 w-4 text-[var(--slf-sun-500)]" />
                    {INTERNATIONAL.subtitle}
                </p>

                <div className="mt-5">
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-[var(--slf-blue-50)]">
                        <div ref={barRef} className="h-full rounded-full bg-gradient-to-r from-[var(--slf-blue-600)] to-[var(--slf-sun-500)]" style={{ width: 0 }} />
                    </div>
                    <div className="mt-3 flex items-baseline justify-between">
                        <span ref={numRef} data-testid="fundraising-raised" className="text-2xl font-bold text-[var(--slf-ink-900)]">
                            {formatCurrency(display)}
                        </span>
                        <span className="text-sm text-[var(--slf-ink-500)]">
                            raised of <span className="font-semibold text-[var(--slf-ink-700)]">{formatCurrency(INTERNATIONAL.goal)}</span>
                        </span>
                    </div>
                </div>

                {!compact && (
                    <Link to="/donate" className="mt-6 block">
                        <CTAButton className="w-full" icon={Heart}>Donate</CTAButton>
                    </Link>
                )}
            </div>
        </div>
    );
};
