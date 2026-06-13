import { Heart, Shield, Repeat, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { PageHero } from '@/components/common/PageHero';
import { Reveal } from '@/motion/Reveal';
import { DONATION_TIERS, IMAGES, formatCurrency } from '@/data/content';
import { CTAButton } from '@/components/common/CTAButton';
import { FundraisingCard } from '@/components/common/FundraisingCard';

const TRUST = [
    { icon: Shield, title: 'Secure & Transparent', text: 'Your generosity goes directly to programs serving real families.' },
    { icon: Repeat, title: 'One-time or Monthly', text: 'Give once or become a recurring supporter of the mission.' },
    { icon: Sparkles, title: 'Local + Global Impact', text: 'Fund hot meals in Oakland and a school rising in Sierra Leone.' },
];

export default function Donate() {
    const [selected, setSelected] = useState(75);

    return (
        <div data-testid="page-donate">
            <PageHero
                eyebrow="Make a Difference"
                title="Your gift changes lives"
                subtitle="Choose an amount and become part of a movement empowering communities and inspiring action."
                image={IMAGES.foodHands}
            />

            <section className="slf-section">
                <div className="slf-container grid grid-cols-1 gap-14 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <Reveal stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            {DONATION_TIERS.map((t) => (
                                <button
                                    key={t.amount}
                                    onClick={() => setSelected(t.amount)}
                                    data-testid={`donate-tier-${t.amount}`}
                                    className={`relative flex flex-col items-start rounded-[18px] border p-7 text-left transition-all duration-300 ${
                                        selected === t.amount
                                            ? 'border-[var(--slf-blue-600)] bg-[var(--slf-blue-50)] slf-shadow-md -translate-y-0.5'
                                            : 'border-[var(--slf-border)] bg-white hover:border-[var(--slf-blue-600)]'
                                    }`}
                                >
                                    {t.featured && (
                                        <span className="absolute right-4 top-4 rounded-full bg-[var(--slf-sun-500)] px-3 py-1 text-[11px] font-bold uppercase text-[var(--slf-ink-900)]">
                                            Popular
                                        </span>
                                    )}
                                    <span className="text-3xl font-bold text-[var(--slf-blue-600)]">{formatCurrency(t.amount)}</span>
                                    <span className="mt-3 text-base font-semibold text-[var(--slf-ink-900)]">{t.title}</span>
                                    <span className="mt-2 text-[14px] leading-relaxed text-[var(--slf-ink-500)]">{t.text}</span>
                                </button>
                            ))}
                        </Reveal>

                        <Reveal className="mt-8 rounded-[20px] border border-[var(--slf-border)] bg-[var(--slf-surface-2)] p-7">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm text-[var(--slf-ink-500)]">Selected donation</p>
                                    <p data-testid="donate-selected-amount" className="text-3xl font-bold text-[var(--slf-ink-900)]">
                                        {formatCurrency(selected)}
                                    </p>
                                </div>
                                <CTAButton size="lg" icon={Heart} data-testid="donate-submit">
                                    Donate {formatCurrency(selected)}
                                </CTAButton>
                            </div>
                            <p className="mt-4 text-xs text-[var(--slf-ink-500)]">
                                This is a visual demo — no payment is processed.
                            </p>
                        </Reveal>

                        <Reveal stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
                            {TRUST.map((t) => (
                                <div key={t.title} className="rounded-[16px] border border-[var(--slf-border)] bg-white p-6">
                                    <t.icon className="h-6 w-6 text-[var(--slf-blue-600)]" />
                                    <h4 className="mt-4 font-semibold text-[var(--slf-ink-900)]">{t.title}</h4>
                                    <p className="mt-2 text-[13px] leading-relaxed text-[var(--slf-ink-500)]">{t.text}</p>
                                </div>
                            ))}
                        </Reveal>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="sticky top-28">
                            <FundraisingCard compact />
                            <p className="mt-4 px-1 text-sm leading-relaxed text-[var(--slf-ink-500)]">
                                Featured campaign: the Islamic Center of Sierra Leone — building a school, water, and food
                                programs for a growing community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
