import { Outlet, useLocation } from 'react-router-dom';
import { useLayoutEffect, useRef } from 'react';
import { TopContactBar } from '@/components/layout/TopContactBar';
import { SiteNavbar } from '@/components/layout/SiteNavbar';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ScrollManager } from '@/motion/ScrollManager';
import { ScrollProgressBar } from '@/components/common/ScrollProgressBar';
import { gsap, prefersReducedMotion } from '@/motion/gsapConfig';

export const Layout = () => {
    const { pathname } = useLocation();
    const mainRef = useRef(null);

    // Cinematic page-entrance transition on every route change.
    useLayoutEffect(() => {
        const el = mainRef.current;
        if (!el || prefersReducedMotion()) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 14 },
                { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
            );
        }, mainRef);
        return () => ctx.revert();
    }, [pathname]);

    return (
        <div className="relative min-h-screen bg-white">
            <ScrollManager />
            <ScrollProgressBar />
            <TopContactBar />
            <SiteNavbar />
            <main ref={mainRef} key={pathname}>
                <Outlet />
            </main>
            <SiteFooter />
        </div>
    );
};
