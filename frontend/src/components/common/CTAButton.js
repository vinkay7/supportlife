import { useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/motion/gsapConfig';

/**
 * CTAButton — unified button system with a subtle magnetic hover + scale,
 * warm glow, and press feedback. variant: primary | secondary | ghost
 */
export const CTAButton = ({
    children,
    variant = 'primary',
    size = 'md',
    icon: Icon,
    className = '',
    magnetic = true,
    ...props
}) => {
    const ref = useRef(null);

    const onMove = (e) => {
        if (!magnetic || prefersReducedMotion() || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        gsap.to(ref.current, { x: x * 0.18, y: y * 0.18, duration: 0.4, ease: 'power3.out' });
    };
    const onLeave = () => {
        if (!ref.current) return;
        gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
    };

    const sizes = {
        sm: 'h-10 px-5 text-sm',
        md: 'h-12 px-7 text-[15px]',
        lg: 'h-14 px-9 text-base',
    };
    const variants = {
        primary:
            'bg-[var(--slf-blue-600)] text-white hover:bg-[var(--slf-blue-700)] shadow-[0_10px_24px_rgba(11,95,255,0.32)] hover:shadow-[0_16px_36px_rgba(11,95,255,0.42)]',
        secondary:
            'bg-white text-[var(--slf-blue-700)] border border-[var(--slf-blue-600)]/30 hover:border-[var(--slf-blue-600)] hover:bg-[var(--slf-blue-50)]',
        accent:
            'bg-[var(--slf-sun-500)] text-[var(--slf-ink-900)] hover:bg-[#f0a500] shadow-[0_10px_24px_rgba(255,176,0,0.35)]',
        ghost: 'bg-transparent text-[var(--slf-blue-700)] hover:bg-[var(--slf-blue-50)]',
    };

    return (
        <button
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={`group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-[background-color,box-shadow,transform] duration-300 active:scale-[0.97] ${sizes[size]} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
            {Icon && (
                <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5" />
            )}
        </button>
    );
};
