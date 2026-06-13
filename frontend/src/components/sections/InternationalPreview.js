import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/motion/Reveal';
import { INTERNATIONAL } from '@/data/content';
import { FundraisingCard } from '@/components/common/FundraisingCard';
import { Icon } from '@/components/common/Icon';
import { CTAButton } from '@/components/common/CTAButton';

export const InternationalPreview = () => {
    return (
        <section className="slf-section slf-soft-wash">
            <div className="slf-container grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
                <div className="lg:col-span-7">
                    <Reveal stagger className="flex flex-col gap-5">
                        <span className="slf-eyebrow text-[var(--slf-blue-600)]">International Programs</span>
                        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--slf-ink-900)] md:text-4xl">
                            {INTERNATIONAL.title}
                        </h2>
                        <p className="text-[17px] leading-relaxed text-[var(--slf-ink-500)]">{INTERNATIONAL.summary}</p>
                        <p className="text-[16px] leading-relaxed text-[var(--slf-ink-500)]">{INTERNATIONAL.body}</p>
                    </Reveal>

                    <Reveal stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {INTERNATIONAL.pillars.slice(0, 4).map((p) => (
                            <div key={p.title} className="flex items-start gap-3 rounded-xl border border-[var(--slf-border)] bg-white p-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--slf-blue-50)] text-[var(--slf-blue-600)]">
                                    <Icon name={p.icon} className="h-5 w-5" />
                                </span>
                                <div>
                                    <h4 className="text-sm font-semibold text-[var(--slf-ink-900)]">{p.title}</h4>
                                    <p className="mt-1 text-[13px] leading-snug text-[var(--slf-ink-500)]">{p.text}</p>
                                </div>
                            </div>
                        ))}
                    </Reveal>

                    <div className="mt-8">
                        <Link to="/international">
                            <CTAButton icon={ArrowRight} data-testid="international-explore">Explore the project</CTAButton>
                        </Link>
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <Reveal>
                        <FundraisingCard />
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
