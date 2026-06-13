import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { Reveal } from '@/motion/Reveal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Icon } from '@/components/common/Icon';
import { INVOLVE_PATHWAYS, IMAGES, CONTACT } from '@/data/content';
import { CTAButton } from '@/components/common/CTAButton';

export default function GetInvolved() {
    return (
        <div data-testid="page-get-involved">
            <PageHero
                eyebrow="Get Involved"
                title="Be the reason someone is not alone"
                subtitle="There are many ways to make a difference — give your time, your voice, or your generosity."
                image={IMAGES.carryingBox}
            />

            <section className="slf-section">
                <div className="slf-container">
                    <Reveal stagger className="grid grid-cols-1 gap-7 md:grid-cols-3">
                        {INVOLVE_PATHWAYS.map((p) => (
                            <div key={p.title} className="group flex flex-col rounded-[18px] border border-[var(--slf-border)] bg-white p-8 slf-shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:slf-shadow-lg">
                                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--slf-blue-50)] text-[var(--slf-blue-600)] transition-colors duration-500 group-hover:bg-[var(--slf-blue-600)] group-hover:text-white">
                                    <Icon name={p.icon} className="h-6 w-6" />
                                </span>
                                <h3 className="mt-6 text-xl font-semibold text-[var(--slf-ink-900)]">{p.title}</h3>
                                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[var(--slf-ink-500)]">{p.text}</p>
                                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--slf-blue-600)]">
                                    {p.cta} <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </div>
                        ))}
                    </Reveal>
                </div>
            </section>

            <section className="slf-section slf-soft-wash">
                <div className="slf-container grid grid-cols-1 gap-14 lg:grid-cols-2">
                    <Reveal stagger className="flex flex-col gap-5">
                        <span className="slf-eyebrow text-[var(--slf-blue-600)]">Volunteer Sign-up</span>
                        <h2 className="text-3xl font-semibold tracking-tight text-[var(--slf-ink-900)] md:text-4xl">
                            Join the team making it happen
                        </h2>
                        <p className="text-[16px] leading-relaxed text-[var(--slf-ink-500)]">
                            Tell us a little about you and how you would like to help. Our team will reach out with
                            upcoming opportunities across YANA, Hot Meals, and Project Educate.
                        </p>
                        <ul className="mt-2 space-y-3 text-[15px] text-[var(--slf-ink-700)]">
                            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[var(--slf-blue-600)]" /> {CONTACT.phone}</li>
                            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[var(--slf-blue-600)]" /> {CONTACT.email}</li>
                            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[var(--slf-blue-600)]" /> {CONTACT.address}</li>
                        </ul>
                    </Reveal>

                    <Reveal className="rounded-[20px] border border-[var(--slf-border)] bg-white p-8 slf-shadow-lg">
                        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()} data-testid="volunteer-form">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-[var(--slf-ink-700)]">First name</label>
                                    <Input placeholder="Jane" data-testid="volunteer-firstname" />
                                </div>
                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-[var(--slf-ink-700)]">Last name</label>
                                    <Input placeholder="Doe" data-testid="volunteer-lastname" />
                                </div>
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-[var(--slf-ink-700)]">Email</label>
                                <Input type="email" placeholder="jane@example.com" data-testid="volunteer-email" />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-[var(--slf-ink-700)]">How would you like to help?</label>
                                <Textarea rows={4} placeholder="I'd love to help deliver meals on weekends..." data-testid="volunteer-message" />
                            </div>
                            <CTAButton type="submit" className="mt-2 w-full" icon={ArrowRight} data-testid="volunteer-submit">
                                Submit application
                            </CTAButton>
                            <p className="text-center text-xs text-[var(--slf-ink-500)]">
                                This is a visual demo form — no information is collected.
                            </p>
                        </form>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
