'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionCTA from './SectionCTA';

const levels = [
  {
    id: 'gf',
    label: 'Ground Floor',
    items: [
      'Meadow Garden',
      'Outdoor Gym',
      'Ripple Courts',
      'Forest Training Court',
      'Cascade Drop-Off',
      'The Flow Lobby',
      'Co-working Lounge',
    ],
  },
  {
    id: 'l8',
    label: 'Level 8',
    items: ['Herbs Garden', 'Bayview Pavilion', 'Ripple Playground', 'Healing Garden'],
  },
  {
    id: 'l9',
    label: 'Level 9',
    items: [
      'The Evia Pool',
      'The Lido Lagoon',
      'The Sol Deck',
      'Tree Shade Retreat',
      'Evia Arcade',
      'Pulse Gym',
      'The Flow Hall',
    ],
  },
];

const highlights = [
  {
    title: 'Evia Arcade',
    subtitle: 'Entertainment & Recreation',
    src: '/assets/cropped/facility-evia-arcade.png',
    description: 'Fully equipped games and social space with vibrant design, bringing residents together in style.',
  },
  {
    title: 'Pulse Gym',
    subtitle: 'Health & Fitness',
    src: '/assets/cropped/facility-pulse-gym.png',
    description: 'State-of-the-art fitness centre with panoramic views — designed to energise your body and mind.',
  },
  {
    title: 'The Flow Lobby',
    subtitle: 'Arrival Experience',
    src: '/assets/cropped/facility-flow-lobby.png',
    description: 'A grand arrival lobby that embodies the flow philosophy — calm, elegant, and welcoming.',
  },
];

export default function Facilities() {
  const [activeLevel, setActiveLevel] = useState('gf');
  const current = levels.find((l) => l.id === activeLevel)!;

  return (
    <section id="facilities" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Elevated Lifestyle</p>
          <h2 className="font-display text-brand-navy text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide">
            Facilities
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4 mb-4" />
          <p className="font-body text-brand-charcoal/60 max-w-xl mx-auto text-base">
            Over 20 thoughtfully curated facilities across three levels, designed to support every
            dimension of your lifestyle.
          </p>
        </div>

        {/* Facility plan image */}
        <div className="relative aspect-[16/7] rounded-sm overflow-hidden mb-10 shadow-lg">
          <Image
            src="/assets/page_10.png"
            alt="Facility Plan — D'Evia Kwasa Damansara"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <p className="absolute bottom-2 right-3 font-body text-white/50 text-xs italic">
            Artist&apos;s Impression
          </p>
        </div>

        {/* Level tabs */}
        <div className="flex gap-2 mb-8">
          {levels.map((l) => (
            <button
              key={l.id}
              onClick={() => setActiveLevel(l.id)}
              className={`px-4 py-2 text-sm font-body rounded-sm border transition-all duration-200 ${
                l.id === activeLevel
                  ? 'bg-brand-navy text-white border-brand-navy'
                  : 'bg-white text-brand-navy/70 border-brand-navy/20 hover:border-brand-blue'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Facility items grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-16">
          {current.items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 p-3 rounded-sm bg-brand-section-bg border border-brand-light-blue/30"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
              <span className="font-body text-sm text-brand-navy font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-sm overflow-hidden shadow-md group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={h.src}
                  alt={h.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="section-label mb-1">{h.subtitle}</p>
                  <h3 className="font-display text-white text-xl font-light">{h.title}</h3>
                </div>
              </div>
              <div className="p-4 bg-brand-cream">
                <p className="font-body text-brand-charcoal/70 text-sm leading-relaxed">{h.description}</p>
              </div>
            </div>
          ))}
        </div>

        <SectionCTA href="#about" label="Discover D'Evia" variant="gold" />
      </div>
    </section>
  );
}
