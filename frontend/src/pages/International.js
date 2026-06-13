import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { Reveal } from '@/motion/Reveal';
import { ParallaxImage } from '@/motion/ParallaxImage';
import { FundraisingCard } from '@/components/common/FundraisingCard';
import { Icon } from '@/components/common/Icon';
import { INTERNATIONAL, IMAGES } from '@/data/content';
import { CTAButton } from '@/components/common/CTAButton';

export default function International() {
    return (
        <div data-testid="page-international">
            <PageHero
                eyebrow={INTERNATIONAL.subtitle}
                title={INTERNATIONAL.title}
                subtitle={INTERNATIONAL.summary}
                image={INTERNATIONAL.image}
            />

            <section className="slf-section">
                <div className="slf-container grid grid-cols-1 gap-14 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <Reveal stagger className="flex flex-col gap-6">
                            <span className="slf-eyebrow text-[var(--slf-blue-600)]">A community rising</span>
                            <h2 className="text-3xl font-semibold tracking-tight text-[var(--slf-ink-900)] md:text-4xl">
                                So much more than just buildings
                            </h2>
                            <p className="text-[17px] leading-relaxed text-[var(--slf-ink-500)]">{INTERNATIONAL.body}</p>
                        </Reveal>

                        <Reveal stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
                            {INTERNATIONAL.pillars.map((p) => (
                                <div key={p.title} className="flex items-start gap-4 rounded-[16px] border border-[var(--slf-border)] bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:slf-shadow-md">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--slf-blue-50)] text-[var(--slf-blue-600)]">
                                        <Icon name={p.icon} className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <h4 className="font-semibold text-[var(--slf-ink-900)]">{p.title}</h4>
                                        <p className="mt-1 text-[14px] leading-snug text-[var(--slf-ink-500)]">{p.text}</p>
                                    </div>
                                </div>
                            ))}
                        </Reveal>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="sticky top-28">
                            <FundraisingCard />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <ParallaxImage src={IMAGES.community} rounded="" strength={6} className="h-full w-full" />
                    <div className="absolute inset-0 bg-[var(--slf-ink-900)]/80" />
                </div>
                <div className="slf-container relative z-10 py-24 text-center">
                    <Reveal stagger className="mx-auto flex max-w-2xl flex-col items-center gap-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Help us reach the goal</h2>
                        <p className="text-lg text-white/85">
                            Every contribution brings food, water, and education closer to the community of Sierra Leone.
                        </p>
                        <Link to="/donate">
                            <CTAButton size="lg" variant="accent" icon={Heart}>Donate to Sierra Leone</CTAButton>
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
