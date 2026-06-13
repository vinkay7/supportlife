import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/motion/gsapConfig';
import { useLocation } from 'react-router-dom';

// Thin brand progress bar at the very top showing scroll depth.
export const ScrollProgressBar = () => {
    const ref = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        const el = ref.current;
        if (!el || prefersReducedMotion()) return;
        gsap.set(el, { scaleX: 0 });
        const st = ScrollTrigger.create({
            start: 0,
            end: 'max',
            onUpdate: (self) => gsap.set(el, { scaleX: self.progress }),
        });
        return () => st.kill();
    }, [pathname]);

    return (
        <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
            <div
                ref={ref}
                className="h-full w-full origin-left bg-gradient-to-r from-[var(--slf-blue-600)] to-[var(--slf-sun-500)]"
                style={{ transform: 'scaleX(0)' }}
            />
        </div>
    );
};
