import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Heart } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { NAV_LINKS } from '@/data/content';
import { BrandLogo } from '@/components/common/BrandLogo';
import { CTAButton } from '@/components/common/CTAButton';

export const SiteNavbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();
    const isHome = pathname === '/';
    const transparent = isHome && !scrolled;

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            data-testid="site-navbar"
            className={`sticky top-0 z-50 w-full transition-all duration-500 ${
                transparent
                    ? 'bg-transparent'
                    : 'border-b border-[var(--slf-border)] bg-white/95 backdrop-blur-sm slf-shadow-md'
            }`}
        >
            <div
                className={`slf-container flex items-center justify-between transition-all duration-500 ${
                    scrolled ? 'h-16' : 'h-20'
                }`}
            >
                <Link to="/" data-testid="navbar-logo-link" className="flex items-center">
                    <BrandLogo light={transparent} />
                </Link>

                <nav className="hidden items-center gap-9 lg:flex" data-testid="navbar-primary-nav">
                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            data-testid={`nav-link-${link.to.replace('/', '')}`}
                            className={({ isActive }) =>
                                `slf-link text-[15px] font-medium transition-colors ${
                                    transparent ? 'text-white/90 hover:text-white' : 'text-[var(--slf-ink-700)]'
                                } ${isActive ? 'text-[var(--slf-blue-600)]' : ''}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link to="/donate" className="hidden sm:block">
                        <CTAButton data-testid="navbar-donate-button" size="sm" icon={Heart}>
                            Donate
                        </CTAButton>
                    </Link>

                    <Sheet>
                        <SheetTrigger asChild>
                            <button
                                data-testid="navbar-mobile-menu-button"
                                aria-label="Open menu"
                                className={`inline-flex h-10 w-10 items-center justify-center rounded-lg lg:hidden ${
                                    transparent ? 'text-white' : 'text-[var(--slf-ink-900)]'
                                }`}
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] bg-white">
                            <div className="mt-8 flex flex-col gap-1">
                                {NAV_LINKS.map((link) => (
                                    <SheetClose asChild key={link.to}>
                                        <NavLink
                                            to={link.to}
                                            className="rounded-lg px-3 py-3 text-lg font-medium text-[var(--slf-ink-900)] transition-colors hover:bg-[var(--slf-blue-50)]"
                                        >
                                            {link.label}
                                        </NavLink>
                                    </SheetClose>
                                ))}
                                <SheetClose asChild>
                                    <Link to="/donate" className="mt-4">
                                        <CTAButton className="w-full" icon={Heart}>
                                            Donate
                                        </CTAButton>
                                    </Link>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};
