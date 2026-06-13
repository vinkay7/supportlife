import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { CTAButton } from '@/components/common/CTAButton';

export default function NotFound() {
    return (
        <div data-testid="page-not-found" className="slf-container flex min-h-[70vh] flex-col items-center justify-center text-center">
            <span className="text-7xl font-bold text-[var(--slf-blue-600)]">404</span>
            <h1 className="mt-4 text-2xl font-semibold text-[var(--slf-ink-900)]">Page not found</h1>
            <p className="mt-3 max-w-md text-[var(--slf-ink-500)]">
                The page you are looking for may have moved. Let’s get you back to making a difference.
            </p>
            <Link to="/" className="mt-8">
                <CTAButton icon={Home}>Back to home</CTAButton>
            </Link>
        </div>
    );
}
