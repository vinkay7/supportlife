import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { ParallaxImage } from '@/motion/ParallaxImage';
import { Reveal } from '@/motion/Reveal';
import { getProgram, PROGRAMS } from '@/data/content';
import { CTAButton } from '@/components/common/CTAButton';
import { Icon } from '@/components/common/Icon';
import { ProgramCard } from '@/components/common/ProgramCard';

const STATUS_LABEL = { inactive: 'No Longer Active', expired: 'Expired' };

export default function ProgramDetail() {
    const { slug } = useParams();
    const program = getProgram(slug);
    if (!program) return <Navigate to="/programs" replace />;

    const related = PROGRAMS.filter((p) => p.slug !== slug && p.status === 'active').slice(0, 3);

    return (
        <div data-testid="page-program-detail">
            <PageHero
                eyebrow={`${program.category} Program`}
                title={program.title}
                subtitle={program.summary}
                image={program.image}
                badge={STATUS_LABEL[program.status]}
            />

            <section className="slf-section">
                <div className="slf-container grid grid-cols-1 gap-14 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <Reveal stagger className="flex flex-col gap-10">
                            {program.sections.map((s) => (
                                <div key={s.heading}>
                                    <h2 className="flex items-center gap-3 text-2xl font-semibold text-[var(--slf-ink-900)]">
                                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--slf-blue-50)] text-[var(--slf-blue-600)]">
                                            <Icon name={program.icon} className="h-5 w-5" />
                                        </span>
                                        {s.heading}
                                    </h2>
                                    <p className="mt-4 text-[17px] leading-relaxed text-[var(--slf-ink-500)]">{s.body}</p>
                                </div>
                            ))}

                            {program.ctas.length > 0 && (
                                <div className="flex flex-wrap gap-4 pt-2">
                                    {program.ctas.map((c) => (
                                        <CTAButton
                                            key={c.label}
                                            variant={c.variant === 'primary' ? 'primary' : 'secondary'}
                                            icon={ArrowRight}
                                            data-testid={`program-cta-${c.label.toLowerCase().replace(/\s+/g, '-')}`}
                                        >
                                            {c.label}
                                        </CTAButton>
                                    ))}
                                </div>
                            )}
                        </Reveal>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="sticky top-28 flex flex-col gap-6">
                            <ParallaxImage src={program.image} className="aspect-[4/3] w-full" parallax={false} />
                            <div className="rounded-[18px] border border-[var(--slf-border)] bg-[var(--slf-surface-2)] p-7">
                                <h3 className="text-lg font-semibold text-[var(--slf-ink-900)]">Support this program</h3>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--slf-ink-500)]">
                                    Your donation directly fuels {program.title} and the families it serves.
                                </p>
                                <Link to="/donate" className="mt-5 block">
                                    <CTAButton className="w-full" icon={Heart}>Donate</CTAButton>
                                </Link>
                                <Link to="/get-involved" className="mt-3 block">
                                    <CTAButton variant="secondary" className="w-full">Volunteer</CTAButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="slf-section slf-soft-wash">
                <div className="slf-container">
                    <div className="mb-10 flex items-center justify-between">
                        <h2 className="text-2xl font-semibold text-[var(--slf-ink-900)] md:text-3xl">More programs</h2>
                        <Link to="/programs" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--slf-blue-600)]">
                            <ArrowLeft className="h-4 w-4" /> All programs
                        </Link>
                    </div>
                    <Reveal stagger className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                        {related.map((p, i) => (
                            <ProgramCard key={p.slug} program={p} index={i} />
                        ))}
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
