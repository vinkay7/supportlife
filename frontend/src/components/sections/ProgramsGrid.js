import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/motion/Reveal';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProgramCard } from '@/components/common/ProgramCard';
import { ACTIVE_PROGRAMS } from '@/data/content';
import { CTAButton } from '@/components/common/CTAButton';

export const ProgramsGrid = () => {
    return (
        <section className="slf-section slf-soft-wash">
            <div className="slf-container">
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <SectionHeading
                        eyebrow="What We Do"
                        title="Programs that make a difference"
                        description="Volunteer-driven initiatives delivering food, education, and relief to the communities that need them most."
                    />
                    <Link to="/programs" className="shrink-0">
                        <CTAButton variant="ghost" icon={ArrowRight} data-testid="programs-view-all">View all programs</CTAButton>
                    </Link>
                </div>

                <Reveal stagger className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {ACTIVE_PROGRAMS.map((p, i) => (
                        <ProgramCard key={p.slug} program={p} index={i} />
                    ))}
                </Reveal>
            </div>
        </section>
    );
};
