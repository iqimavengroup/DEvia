interface SectionCTAProps {
  href: string;
  label: string;
  /** 'gold' = filled gold (on light bg), 'light' = outline light (on dark/blue bg) */
  variant?: 'gold' | 'light' | 'navy';
}

export default function SectionCTA({ href, label, variant = 'gold' }: SectionCTAProps) {
  const styles = {
    gold: 'bg-brand-gold hover:bg-yellow-600 text-white',
    navy: 'bg-brand-navy hover:bg-brand-blue text-white',
    light: 'bg-white/10 hover:bg-white/20 border border-white/30 text-white backdrop-blur-sm',
  } as const;

  return (
    <div className="flex justify-center mt-12">
      <a
        href={href}
        className={`inline-flex items-center justify-center gap-2 font-body font-medium text-sm px-8 py-3.5 rounded-sm tracking-wider uppercase transition-colors duration-200 ${styles[variant]}`}
      >
        {label}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </div>
  );
}
