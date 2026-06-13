import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { CONTACT, SOCIALS } from '@/data/content';

const socialIcon = { facebook: Facebook, twitter: Twitter, instagram: Instagram };

export const TopContactBar = () => {
    return (
        <div
            className="hidden w-full border-b border-[var(--slf-border)] bg-[var(--slf-blue-50)] text-[var(--slf-ink-700)] md:block"
            data-testid="top-contact-bar"
        >
            <div className="slf-container flex h-10 items-center justify-between text-[13px]">
                <div className="flex items-center gap-6">
                    <a
                        href={CONTACT.phoneHref}
                        data-testid="topbar-phone-link"
                        className="flex items-center gap-2 transition-colors hover:text-[var(--slf-blue-700)]"
                    >
                        <Phone className="h-3.5 w-3.5" /> {CONTACT.phone}
                    </a>
                    <a
                        href={CONTACT.emailHref}
                        data-testid="topbar-email-link"
                        className="flex items-center gap-2 transition-colors hover:text-[var(--slf-blue-700)]"
                    >
                        <Mail className="h-3.5 w-3.5" /> {CONTACT.email}
                    </a>
                    <span data-testid="topbar-address-text" className="hidden items-center gap-2 lg:flex">
                        <MapPin className="h-3.5 w-3.5" /> {CONTACT.address}
                    </span>
                </div>
                <div className="flex items-center gap-3" data-testid="topbar-social-links">
                    {SOCIALS.map((s) => {
                        const Icon = socialIcon[s.icon];
                        return (
                            <a
                                key={s.name}
                                href={s.href}
                                aria-label={s.name}
                                className="text-[var(--slf-ink-500)] transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--slf-blue-700)]"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
