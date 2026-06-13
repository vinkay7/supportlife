import { Link } from 'react-router-dom';
import { Heart, HandHeart } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { Reveal } from '@/motion/Reveal';
import { ParallaxImage } from '@/motion/ParallaxImage';
import { MISSION_STATEMENT, IMAGES, IMPACT_STATS } from '@/data/content';
import { CTAButton } from '@/components/common/CTAButton';

const VALUES = [
    { title: 'Dignity First', text: 'Every person we serve is met with respect, care, and dignity — never charity for show.' },
    { title: 'Volunteer Powered', text: 'Our programs run on the generosity and energy of volunteers from across our communities.' },
    { title: 'Local & Global', text: 'We act where the need is greatest — from Oakland neighborhoods to communities in Sierra Leone.' },
];

export default function Mission() {
    return (
        <div data-testid="page-mission">
            <PageHero
                eyebrow="Our Mission"
                title="Empowering communities, inspiring action."
                subtitle="We build unique programs that meet real needs and maximize the potential of every community we serve."
                image={IMAGES.mission}
            />

            <section className="slf-section">
                <div className="slf-container">
                    <Reveal className="mx-auto max-w-3xl text-center">
                        <span className="slf-eyebrow text-[var(--slf-blue-600)]">Why we exist</span>
                        <p className="mt-6 text-2xl font-medium leading-relaxed text-[var(--slf-ink-900)] md:text-3xl">
                            “{MISSION_STATEMENT}”
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="slf-section slf-soft-wash">
                <div className="slf-container grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
                    <ParallaxImage src={IMAGES.distribution} className="aspect-[4/3] w-full" strength={9} />
                    <Reveal stagger className="flex flex-col gap-6">
                        <h2 className="text-3xl font-semibold tracking-tight text-[var(--slf-ink-900)] md:text-4xl">
                            A dual focus on local and global impact
                        </h2>
                        <p className="text-[17px] leading-relaxed text-[var(--slf-ink-500)]">
                            We address immediate community needs — food security, education, disaster relief, and public
                            health — while investing in large-scale development that lasts for generations.
                        </p>
                        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--slf-border)] bg-[var(--slf-border)]">
                            {IMPACT_STATS.map((s) => (
                                <div key={s.label} className="bg-white p-5">
                                    <div className="text-xl font-bold text-[var(--slf-blue-600)]">{s.value}</div>
                                    <p className="mt-1 text-[13px] leading-snug text-[var(--slf-ink-500)]">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="slf-section">
                <div className="slf-container">
                    <Reveal stagger className="grid grid-cols-1 gap-7 md:grid-cols-3">
                        {VALUES.map((v) => (
                            <div key={v.title} className="rounded-[18px] border border-[var(--slf-border)] bg-white p-8 slf-shadow-md transition-transform duration-500 hover:-translate-y-1.5">
                                <h3 className="text-xl font-semibold text-[var(--slf-ink-900)]">{v.title}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-[var(--slf-ink-500)]">{v.text}</p>
                            </div>
                        ))}
                    </Reveal>

                    <Reveal className="mt-14 flex flex-wrap items-center justify-center gap-4">
                        <Link to="/donate"><CTAButton size="lg" icon={Heart}>Support our mission</CTAButton></Link>
                        <Link to="/get-involved"><CTAButton size="lg" variant="secondary" icon={HandHeart}>Get involved</CTAButton></Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
