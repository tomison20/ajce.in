export function SectionTitle({ title, subtitle, gradient = true, center = true, className = '' }) {
    return (
        <div className={`mb-16 ${center ? 'text-center' : ''} ${className}`}>
            <h2 className={`section-title ${gradient ? 'gradient-text' : ''}`}>
                {title}
            </h2>
            {subtitle && (
                <p className="section-subtitle mt-4">{subtitle}</p>
            )}
            <div className="mt-6 flex items-center justify-center gap-2">
                <div className="h-1 w-12 rounded-full bg-primary"></div>
                <div className="h-1 w-8 rounded-full bg-secondary"></div>
                <div className="h-1 w-4 rounded-full bg-accent"></div>
            </div>
        </div>
    );
}
