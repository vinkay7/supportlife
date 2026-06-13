import { useRef, useLayoutEffect, useState } from 'react';
import { gsap, prefersReducedMotion } from '@/motion/gsapConfig';
import { FALLBACK_IMAGE } from '@/data/content';

/**
 * ParallaxImage — cinematic image with a soft scale-in reveal (1.08 -> 1)
 * plus an optional continuous parallax drift on scroll for depth.
 * The inner image is oversized so parallax movement never reveals gaps.
 */
export const ParallaxImage = ({
    src,
    alt = '',
    className = '',
    rounded = 'rounded-[18px]',
    strength = 8,
    parallax = true,
    overlay = false,
}) => {
    const wrap = useRef(null);
    const imgRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(src);

    useLayoutEffect(() => {
        setImgSrc(src);
    }, [src]);

    useLayoutEffect(() => {
        const wrapEl = wrap.current;
        const imgEl = imgRef.current;
        if (!wrapEl || !imgEl || prefersReducedMotion()) return;

        const ctx = gsap.context(() => {
            gsap.from(imgEl, {
                scale: 1.12,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: { trigger: wrapEl, start: 'top 88%', once: true },
            });
            if (parallax) {
                gsap.fromTo(
                    imgEl,
                    { yPercent: -strength },
                    {
                        yPercent: strength,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: wrapEl,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 0.8,
                        },
                    }
                );
            }
        }, wrap);

        return () => ctx.revert();
    }, [strength, parallax]);

    return (
        <div ref={wrap} className={`relative overflow-hidden ${rounded} ${className}`}>
            <img
                ref={imgRef}
                src={imgSrc}
                alt={alt}
                loading="lazy"
                onError={() => imgSrc !== FALLBACK_IMAGE && setImgSrc(FALLBACK_IMAGE)}
                className="absolute inset-0 h-[118%] w-full -translate-y-[8%] object-cover"
            />
            {overlay && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/55 via-[#0b1220]/10 to-transparent" />
            )}
        </div>
    );
};
