import { HeartHandshake } from 'lucide-react';

// Brand wordmark for Support Life Foundation.
export const BrandLogo = ({ light = false }) => {
    return (
        <span className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--slf-blue-600)] text-white shadow-[0_6px_16px_rgba(11,95,255,0.35)]">
                <HeartHandshake className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-none">
                <span
                    className={`text-[15px] font-bold tracking-tight ${
                        light ? 'text-white' : 'text-[var(--slf-ink-900)]'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    SUPPORT LIFE
                </span>
                <span
                    className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${
                        light ? 'text-[var(--slf-sun-500)]' : 'text-[var(--slf-blue-600)]'
                    }`}
                >
                    Foundation
                </span>
            </span>
        </span>
    );
};
