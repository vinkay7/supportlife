import { Link } from 'react-router-dom';
import { Heart, HandHeart } from 'lucide-react';
import { Reveal } from '@/motion/Reveal';
import { ParallaxImage } from '@/motion/ParallaxImage';
import { IMAGES } from '@/data/content';
import { CTAButton } from '@/components/common/CTAButton';

export const ConversionCTA = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0">
                <ParallaxImage src={IMAGES.carryingBox} rounded="" strength={6} className="h-full w-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--slf-blue-700)]/95 via-[var(--slf-blue-600)]/85 to-[var(--slf-blue-600)]/70" />
            </div>
            <div className="slf-container relative z-10 py-24 text-center">
                <Reveal stagger className="mx-auto flex max-w-2xl flex-col items-center gap-6">
                    <span className="slf-eyebrow text-[var(--slf-sun-500)]">Make a Difference</span>
                    <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                        Your support changes lives — today and for generations.
                    </h2>
                    <p className="max-w-xl text-lg leading-relaxed text-white/85">
                        Whether you give your time or your generosity, you become part of a movement empowering
                        communities and inspiring action across the world.
                    </p>
                    <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
                        <Link to="/donate">
                            <CTAButton size="lg" variant="accent" icon={Heart} data-testid="cta-donate">Donate Now</CTAButton>
                        </Link>
                        <Link to="/get-involved">
                            <CTAButton size="lg" variant="secondary" icon={HandHeart} data-testid="cta-volunteer">Volunteer</CTAButton>
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
