import { Reveal } from '@/motion/Reveal';
import { IMPACT_STATS } from '@/data/content';

export const ImpactStats = () => {
    return (
        <section className="relative z-10 -mt-16">
            <div className="slf-container">
                <Reveal
                    stagger
                    className="grid grid-cols-1 gap-px overflow-hidden rounded-[18px] border border-[var(--slf-border)] bg-[var(--slf-border)] slf-shadow-lg sm:grid-cols-2 lg:grid-cols-4"
                >
                    {IMPACT_STATS.map((s) => (
                        <div key={s.label} className="bg-white p-7">
                            <div className="text-3xl font-bold tracking-tight text-[var(--slf-blue-600)]">{s.value}</div>
                            <p className="mt-2 text-sm leading-relaxed text-[var(--slf-ink-500)]">{s.label}</p>
                        </div>
                    ))}
                </Reveal>
            </div>
        </section>
    );
};
