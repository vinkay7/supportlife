import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Heart } from 'lucide-react';
import { CONTACT, SOCIALS, MISSION_STATEMENT, PROGRAMS } from '@/data/content';
import { BrandLogo } from '@/components/common/BrandLogo';
import { CTAButton } from '@/components/common/CTAButton';

const socialIcon = { facebook: Facebook, twitter: Twitter, instagram: Instagram };

export const SiteFooter = () => {
    const active = PROGRAMS.filter((p) => p.status === 'active');
    const inactive = PROGRAMS.filter((p) => p.status !== 'active');

    return (
        <footer className="border-t border-[var(--slf-border)] bg-[var(--slf-surface-2)]" data-testid="site-footer">
            <div className="slf-container grid grid-cols-1 gap-12 py-16 md:grid-cols-12">
                <div className="md:col-span-4">
                    <BrandLogo />
                    <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[var(--slf-ink-500)]">
                        {MISSION_STATEMENT}
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                        {SOCIALS.map((s) => {
                            const Icon = socialIcon[s.icon];
                            return (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    aria-label={s.name}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--slf-border)] bg-white text-[var(--slf-ink-700)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--slf-blue-600)] hover:text-[var(--slf-blue-600)]"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="md:col-span-2">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--slf-ink-900)]">Projects</h4>
                    <ul className="mt-4 space-y-3 text-sm text-[var(--slf-ink-500)]">
                        {active.map((p) => (
                            <li key={p.slug}>
                                <Link to={`/programs/${p.slug}`} className="slf-link">{p.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--slf-ink-900)]">No Longer Active</h4>
                    <ul className="mt-4 space-y-3 text-sm text-[var(--slf-ink-500)]">
                        {inactive.map((p) => (
                            <li key={p.slug}>
                                <Link to={`/programs/${p.slug}`} className="slf-link">{p.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--slf-ink-900)]">Get In Touch</h4>
                    <ul className="mt-4 space-y-4 text-sm text-[var(--slf-ink-500)]">
                        <li>
                            <a href={CONTACT.phoneHref} data-testid="footer-contact-phone" className="flex items-start gap-3 transition-colors hover:text-[var(--slf-blue-600)]">
                                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--slf-blue-600)]" /> {CONTACT.phone}
                            </a>
                        </li>
                        <li>
                            <a href={CONTACT.emailHref} data-testid="footer-contact-email" className="flex items-start gap-3 transition-colors hover:text-[var(--slf-blue-600)]">
                                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--slf-blue-600)]" /> {CONTACT.email}
                            </a>
                        </li>
                        <li>
                            <a href={CONTACT.addressMap} target="_blank" rel="noreferrer" data-testid="footer-address" className="flex items-start gap-3 transition-colors hover:text-[var(--slf-blue-600)]">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--slf-blue-600)]" /> {CONTACT.address}
                            </a>
                        </li>
                    </ul>
                    <Link to="/donate" className="mt-6 inline-block">
                        <CTAButton size="sm" icon={Heart}>Donate Now</CTAButton>
                    </Link>
                </div>
            </div>

            <div className="border-t border-[var(--slf-border)]">
                <div className="slf-container flex flex-col items-center justify-between gap-3 py-6 text-xs text-[var(--slf-ink-500)] sm:flex-row">
                    <p>© {new Date().getFullYear()} Support Life Foundation. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="slf-link">Terms</a>
                        <a href="#" className="slf-link">Privacy</a>
                        <Link to="/mission" className="slf-link">Mission</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
