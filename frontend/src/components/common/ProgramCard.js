import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Icon } from '@/components/common/Icon';
import { FALLBACK_IMAGE } from '@/data/content';

const STATUS_BADGE = {
    active: null,
    inactive: { label: 'No Longer Active', cls: 'bg-[var(--slf-ink-500)]/10 text-[var(--slf-ink-500)]' },
    expired: { label: 'Expired', cls: 'bg-[var(--slf-orange-500)]/12 text-[var(--slf-orange-500)]' },
};

// Premium program card with image, soft elevation + hover lift/tilt.
export const ProgramCard = ({ program, index = 0 }) => {
    const badge = STATUS_BADGE[program.status];
    return (
        <Link
            to={`/programs/${program.slug}`}
            data-testid={`program-card-${program.slug}`}
            className="group relative flex h-full flex-col overflow-hidden rounded-[18px] border border-[var(--slf-border)] bg-white slf-shadow-md transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:rotate-[0.4deg] hover:slf-shadow-lg"
        >
            <div className="relative h-52 overflow-hidden">
                <img
                    src={program.image}
                    alt={program.title}
                    loading="lazy"
                    onError={(e) => { if (e.target.src !== FALLBACK_IMAGE) e.target.src = FALLBACK_IMAGE; }}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/45 to-transparent" />
                <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-[var(--slf-blue-600)] shadow-md">
                    <Icon name={program.icon} className="h-5 w-5" />
                </span>
                {badge && (
                    <span className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold ${badge.cls} bg-white/95`}>
                        {badge.label}
                    </span>
                )}
            </div>
            <div className="flex flex-1 flex-col p-6">
                <span className="slf-eyebrow text-[var(--slf-blue-600)]">{program.short}</span>
                <h3 className="mt-2 text-xl font-semibold text-[var(--slf-ink-900)]">{program.title}</h3>
                <p className="mt-3 line-clamp-3 flex-1 text-[15px] leading-relaxed text-[var(--slf-ink-500)]">
                    {program.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--slf-blue-600)]">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
            </div>
        </Link>
    );
};
