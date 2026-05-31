'use client';

import Image from 'next/image';

const WA_LINK = 'https://wa.me/60123714815?text=Hi%2C%20I%27m%20interested%20in%20D%27Evia%20Kwasa%20Damansara';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Background render */}
      <Image
        src="/assets/page_03.png"
        alt="D'Evia Kwasa Damansara exterior render"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay — bottom (content legibility) */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/60 to-brand-navy/30" />

      {/* Gradient overlay — top (navbar legibility) */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-brand-navy/80 to-transparent" />

      {/* Wave pattern overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
            fill="white"
            fillOpacity="0.06"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="max-w-2xl">
          {/* Section label */}
          <p className="text-white font-body text-xs uppercase tracking-[0.15em] font-medium mb-4">
            Kwasa Damansara, Selangor
          </p>

          {/* Project name */}
          <h1 className="font-display text-white text-5xl sm:text-6xl lg:text-8xl font-light tracking-[0.04em] leading-none mb-4">
            D&apos;Evia
          </h1>

          {/* Tagline */}
          <p className="font-heading italic text-brand-light-blue text-xl sm:text-2xl lg:text-3xl mb-2 font-light">
            Where Life Flows
          </p>
          <p className="font-body text-white/70 text-sm sm:text-base mb-8 max-w-md">
            A sanctuary inspired by the flow of nature — where tranquillity meets elevated living.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#floor-plans"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-yellow-600 text-white font-body font-medium text-sm px-8 py-3.5 rounded-sm tracking-wider uppercase transition-colors duration-200"
            >
              View Floor Plans
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-body font-medium text-sm px-8 py-3.5 rounded-sm tracking-wider uppercase backdrop-blur-sm transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Key stats */}
          <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/20">
            <div>
              <p className="text-white font-display text-2xl font-light">657–1,109</p>
              <p className="text-white/50 text-xs font-body uppercase tracking-wider mt-0.5">sq.ft.</p>
            </div>
            <div>
              <p className="text-white font-display text-2xl font-light">2–4</p>
              <p className="text-white/50 text-xs font-body uppercase tracking-wider mt-0.5">Bedrooms</p>
            </div>
            <div>
              <p className="text-white font-display text-2xl font-light">~600m</p>
              <p className="text-white/50 text-xs font-body uppercase tracking-wider mt-0.5">MRT Kwasa Sentral</p>
            </div>
            <div>
              <p className="text-white font-display text-2xl font-light">GreenRE</p>
              <p className="text-white/50 text-xs font-body uppercase tracking-wider mt-0.5">Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
