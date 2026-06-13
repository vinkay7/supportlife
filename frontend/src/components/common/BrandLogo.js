// Official Support Life Foundation logo (provided by the organization).
export const BrandLogo = ({ light = false, className = '' }) => {
    return (
        <span
            className={`inline-flex items-center transition-all duration-300 ${
                light ? 'rounded-xl bg-white px-3 py-2 shadow-[0_4px_14px_rgba(11,18,32,0.12)]' : ''
            } ${className}`}
        >
            <img
                src="/images/logo.png"
                alt="Support Life Foundation"
                className="h-8 w-auto md:h-9"
                loading="eager"
            />
        </span>
    );
};
