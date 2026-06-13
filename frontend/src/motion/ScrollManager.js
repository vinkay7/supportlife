import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from '@/motion/gsapConfig';

/**
 * On every route change: scroll to top instantly and refresh ScrollTrigger
 * after the new page paints so all triggers measure correct positions.
 */
export const ScrollManager = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        const id = window.setTimeout(() => ScrollTrigger.refresh(), 220);
        return () => window.clearTimeout(id);
    }, [pathname]);

    return null;
};
