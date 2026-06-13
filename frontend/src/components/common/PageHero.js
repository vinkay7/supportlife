import { ParallaxImage } from '@/motion/ParallaxImage';
import { Reveal } from '@/motion/Reveal';

// Reusable cinematic hero for interior pages.
export const PageHero = ({ eyebrow, title, subtitle, image, badge }) => {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0">
                <ParallaxImage src={image} rounded="" parallax strength={6} className="h-full w-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220]/85 via-[#0b1220]/65 to-[#0b1220]/35" />
            </div>
            <div className="slf-container relative flex min-h-[58vh] flex-col justify-center py-28">
                <Reveal stagger className="max-w-3xl">
                    {badge && (
                        <span className="mb-4 inline-block w-fit rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                            {badge}
                        </span>
                    )}
                    {eyebrow && <span className="slf-eyebrow text-[var(--slf-sun-500)]">{eyebrow}</span>}
                    <h1 className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{subtitle}</p>
                    )}
                </Reveal>
            </div>
        </section>
    );
};
