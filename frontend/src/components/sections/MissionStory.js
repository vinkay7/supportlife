import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ParallaxImage } from '@/motion/ParallaxImage';
import { Reveal } from '@/motion/Reveal';
import { IMAGES, MISSION_STATEMENT } from '@/data/content';
import { CTAButton } from '@/components/common/CTAButton';

// Story-driven split section (Mission / Project Educate feel).
export const MissionStory = () => {
    return (
        <section className="slf-section">
            <div className="slf-container grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-6">
                    <ParallaxImage src={IMAGES.education} className="aspect-[4/5] w-full" strength={9} />
                </div>
                <div className="lg:col-span-6">
                    <Reveal stagger className="flex flex-col gap-5">
                        <span className="slf-eyebrow text-[var(--slf-blue-600)]">Our Mission</span>
                        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--slf-ink-900)] md:text-4xl">
                            Alleviating oppression through programs that maximize human potential.
                        </h2>
                        <p className="text-[17px] leading-relaxed text-[var(--slf-ink-500)]">{MISSION_STATEMENT}</p>
                        <p className="text-[17px] leading-relaxed text-[var(--slf-ink-500)]">
                            From our community kitchen in Oakland to a school rising in Sierra Leone, we build unique,
                            volunteer-powered programs that meet real needs — food, education, healthcare, and dignity.
                        </p>
                        <div className="mt-2">
                            <Link to="/mission">
                                <CTAButton variant="secondary" icon={ArrowRight} data-testid="mission-learn-more">
                                    Read our story
                                </CTAButton>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
