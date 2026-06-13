import { useRef, useLayoutEffect } from 'react';
import { gsap, prefersReducedMotion } from '@/motion/gsapConfig';

/**
 * Reveal — the universal scroll-reveal wrapper that powers the global
 * motion grammar. Every section uses the same easing + offsets so motion
 * feels like ONE cohesive system (not random animations).
 *
 * stagger: when true, animates direct children in sequence.
 */
export const Reveal = ({
    children,
    as: Tag = 'div',
    className = '',
    y = 26,
    delay = 0,
    duration = 0.9,
    stagger = false,
    start = 'top 85%',
    ...props
}) => {
    const ref = useRef(null);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (prefersReducedMotion()) {
            gsap.set(stagger ? el.children : el, { opacity: 1, y: 0, clearProps: 'all' });
            return;
        }

        const ctx = gsap.context(() => {
            const targets = stagger ? el.children : el;
            gsap.from(targets, {
                y,
                opacity: 0,
                duration,
                delay,
                ease: 'power3.out',
                stagger: stagger ? 0.1 : 0,
                scrollTrigger: {
                    trigger: el,
                    start,
                    once: true,
                },
            });
        }, ref);

        return () => ctx.revert();
    }, [y, delay, duration, stagger, start]);

    return (
        <Tag ref={ref} className={className} {...props}>
            {children}
        </Tag>
    );
};
