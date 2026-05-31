import Image from 'next/image';
import SectionCTA from './SectionCTA';

const elements = [
  { name: 'Earth', description: 'Grounding stability and natural materials' },
  { name: 'Fire', description: 'Warmth, energy, and vibrant community' },
  { name: 'Water', description: 'Flow, tranquillity, and renewal — the hero element' },
  { name: 'Sky', description: 'Openness, light, and elevated perspectives' },
  { name: 'Wind', description: 'Breath, movement, and natural ventilation' },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: content */}
          <div>
            <p className="section-label mb-4">Brand Story</p>
            <h2 className="font-display text-brand-navy text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6 tracking-wide">
              Where Life<br />
              <span className="italic text-brand-blue">Flows</span>
            </h2>

            <div className="w-12 h-px bg-brand-gold mb-6" />

            <p className="font-heading italic text-brand-navy/80 text-lg sm:text-xl mb-4 leading-relaxed">
              A Sanctuary Inspired by the Flow of Nature
            </p>
            <p className="font-body text-brand-charcoal/70 text-base leading-relaxed mb-6">
              D&apos;Evia represents the element of Water — the essence of life, flow, and renewal.
              Drawing from the purity and tranquillity associated with water, D&apos;Evia is designed
              as a serene sanctuary for residents seeking balance and clarity amid the pulse of urban life.
            </p>
            <p className="font-body text-brand-charcoal/70 text-base leading-relaxed mb-8">
              Formed by gentle curves, soft textures, and an organic design philosophy, D&apos;Evia invites
              you into a space where your rhythm of life flows gently — reflecting the ever-moving yet
              ever-peaceful spirit of water.
            </p>

            {/* GreenRE badge */}
            <div className="inline-flex items-center gap-3 border border-brand-gold/40 rounded px-4 py-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-brand-gold font-medium">GreenRE Certified</p>
                <p className="font-body text-brand-charcoal/60 text-xs mt-0.5">Eco-Responsible Developer</p>
              </div>
            </div>
          </div>

          {/* Right: 5 elements page from brochure */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/assets/page_04.png"
                alt="5 Elements of Nature — D'Evia brand concept"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-brand-gold/30 rounded-sm -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-brand-light-blue/50 rounded-sm -z-10" />
          </div>
        </div>

        {/* 5 Elements strip */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {elements.map((el) => (
            <div
              key={el.name}
              className="text-center p-4 rounded-sm border border-brand-light-blue/30 hover:border-brand-blue/50 hover:bg-brand-section-bg transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 group-hover:bg-brand-blue/20 flex items-center justify-center mx-auto mb-3 transition-colors duration-200">
                <span className="text-brand-blue text-xs font-body uppercase tracking-wider font-medium">
                  {el.name[0]}
                </span>
              </div>
              <p className="font-body text-xs uppercase tracking-widest text-brand-gold font-medium mb-1">{el.name}</p>
              <p className="font-body text-brand-charcoal/60 text-xs leading-relaxed">{el.description}</p>
            </div>
          ))}
        </div>

        <SectionCTA href="#gallery" label="View the Gallery" variant="gold" />
      </div>
    </section>
  );
}
