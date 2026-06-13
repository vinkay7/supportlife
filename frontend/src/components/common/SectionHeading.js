import { Reveal } from '@/motion/Reveal';

export const SectionHeading = ({
    eyebrow,
    title,
    description,
    align = 'left',
    light = false,
    className = '',
}) => {
    const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left';
    return (
        <Reveal
            stagger
            className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}
        >
            {eyebrow && (
                <span
                    className={`slf-eyebrow ${light ? 'text-[var(--slf-sun-500)]' : 'text-[var(--slf-blue-600)]'}`}
                >
                    {eyebrow}
                </span>
            )}
            <h2
                className={`text-3xl font-semibold tracking-tight md:text-4xl ${
                    light ? 'text-white' : 'text-[var(--slf-ink-900)]'
                }`}
            >
                {title}
            </h2>
            {description && (
                <p
                    className={`text-[17px] leading-relaxed ${
                        light ? 'text-white/80' : 'text-[var(--slf-ink-500)]'
                    }`}
                >
                    {description}
                </p>
            )}
        </Reveal>
    );
};
