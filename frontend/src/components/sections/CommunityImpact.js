import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { ParallaxImage } from '@/motion/ParallaxImage';
import { Reveal } from '@/motion/Reveal';
import { IMAGES, getProgram } from '@/data/content';
import { CTAButton } from '@/components/common/CTAButton';

const hotMeals = getProgram('hot-meals');
const yana = getProgram('you-are-not-alone');

const Block = ({ reverse, eyebrow, title, text, points, image, to }) => (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className={`lg:col-span-6 ${reverse ? 'lg:order-2' : ''}`}>
            <ParallaxImage src={image} className="aspect-[16/11] w-full" strength={8} />
        </div>
        <div className={`lg:col-span-6 ${reverse ? 'lg:order-1' : ''}`}>
            <Reveal stagger className="flex flex-col gap-5">
                <span className="slf-eyebrow text-[var(--slf-blue-600)]">{eyebrow}</span>
                <h3 className="text-3xl font-semibold tracking-tight text-[var(--slf-ink-900)]">{title}</h3>
                <p className="text-[17px] leading-relaxed text-[var(--slf-ink-500)]">{text}</p>
                <ul className="flex flex-col gap-3">
                    {points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-[15px] text-[var(--slf-ink-700)]">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--slf-teal-50)] text-[var(--slf-success)]">
                                <Check className="h-3 w-3" />
                            </span>
                            {p}
                        </li>
                    ))}
                </ul>
                <div className="mt-2">
                    <Link to={to}>
                        <CTAButton variant="secondary" icon={ArrowRight}>Explore program</CTAButton>
                    </Link>
                </div>
            </Reveal>
        </div>
    </div>
);

export const CommunityImpact = () => {
    return (
        <section className="slf-section">
            <div className="slf-container flex flex-col gap-24">
                <Block
                    eyebrow="Community Impact · Hot Meals"
                    title={hotMeals.title}
                    text={hotMeals.summary}
                    points={[
                        'Free HALAL hot meals from local restaurants and kitchens every week until September',
                        'Curated, balanced, healthy meals pre-packaged in to-go boxes',
                        'Powered by our community kitchen and perishable ingredients',
                    ]}
                    image={IMAGES.hotMeal}
                    to="/programs/hot-meals"
                />
                <Block
                    reverse
                    eyebrow="Community Impact · YANA Food Share"
                    title={yana.title}
                    text={yana.summary}
                    points={[
                        'Fresh produce and groceries delivered with dignity',
                        'Entirely volunteer driven, neighbor helping neighbor',
                        'Client and volunteer forms make getting involved simple',
                    ]}
                    image={IMAGES.foodHands}
                    to="/programs/you-are-not-alone"
                />
            </div>
        </section>
    );
};
