import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { ProgramCard } from '@/components/common/ProgramCard';
import { Reveal } from '@/motion/Reveal';
import { FundraisingCard } from '@/components/common/FundraisingCard';
import { PROGRAMS, IMAGES, INTERNATIONAL } from '@/data/content';
import { CTAButton } from '@/components/common/CTAButton';

const FILTERS = [
    { key: 'all', label: 'All Programs' },
    { key: 'active', label: 'Active' },
    { key: 'inactive', label: 'No Longer Active' },
];

export default function Programs() {
    const [filter, setFilter] = useState('all');
    const list = PROGRAMS.filter((p) => {
        if (filter === 'all') return true;
        if (filter === 'active') return p.status === 'active';
        return p.status !== 'active';
    });

    return (
        <div data-testid="page-programs">
            <PageHero
                eyebrow="Local Programs"
                title="Programs built around real community needs"
                subtitle="From food and education to disaster relief and public health — explore the initiatives powering our mission, locally and internationally."
                image={IMAGES.distribution}
            />

            <section className="slf-section">
                <div className="slf-container">
                    <div className="mb-10 flex flex-wrap items-center gap-3">
                        {FILTERS.map((f) => (
                            <button
                                key={f.key}
                                onClick={() => setFilter(f.key)}
                                data-testid={`programs-filter-${f.key}`}
                                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                                    filter === f.key
                                        ? 'border-[var(--slf-blue-600)] bg-[var(--slf-blue-600)] text-white shadow-[0_8px_20px_rgba(11,95,255,0.3)]'
                                        : 'border-[var(--slf-border)] bg-white text-[var(--slf-ink-700)] hover:border-[var(--slf-blue-600)]'
                                }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    <Reveal key={filter} stagger className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                        {list.map((p, i) => (
                            <ProgramCard key={p.slug} program={p} index={i} />
                        ))}
                    </Reveal>
                </div>
            </section>

            <section className="slf-section slf-soft-wash">
                <div className="slf-container grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <span className="slf-eyebrow text-[var(--slf-blue-600)]">International Programs</span>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--slf-ink-900)] md:text-4xl">
                            {INTERNATIONAL.title}
                        </h2>
                        <p className="mt-5 text-[17px] leading-relaxed text-[var(--slf-ink-500)]">{INTERNATIONAL.body}</p>
                        <div className="mt-8">
                            <Link to="/international">
                                <CTAButton icon={ArrowRight}>View international project</CTAButton>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <FundraisingCard />
                    </div>
                </div>
            </section>
        </div>
    );
}
