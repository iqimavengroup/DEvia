'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionCTA from './SectionCTA';

const renders = [
  {
    src: '/assets/page_03.png',
    caption: 'Ripple Courts — Exterior Day View',
    label: 'Exterior',
  },
  {
    src: '/assets/page_09.png',
    caption: 'D\'Evia Tower — Exterior Dusk View',
    label: 'Exterior',
  },
  {
    src: '/assets/page_05.png',
    caption: 'Facade Overview — Full Tower',
    label: 'Exterior',
  },
  {
    src: '/assets/cropped/facility-flow-lobby.png',
    caption: 'The Flow Lobby',
    label: 'Facilities',
  },
  {
    src: '/assets/cropped/facility-evia-arcade.png',
    caption: 'Evia Arcade',
    label: 'Facilities',
  },
  {
    src: '/assets/cropped/facility-pulse-gym.png',
    caption: 'Pulse Gym',
    label: 'Facilities',
  },
];

export default function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-brand-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Visual Tour</p>
          <h2 className="font-display text-brand-navy text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide">
            Gallery
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Main image */}
        <div className="relative aspect-[16/9] sm:aspect-[16/7] rounded-sm overflow-hidden mb-4 shadow-xl">
          <Image
            src={renders[active].src}
            alt={renders[active].caption}
            fill
            className="object-cover transition-opacity duration-500"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/70 to-transparent p-4 sm:p-6">
            <p className="font-body text-white/60 text-xs uppercase tracking-widest mb-1">
              {renders[active].label}
            </p>
            <p className="font-body text-white text-sm sm:text-base">
              {renders[active].caption}
            </p>
            <p className="font-body text-white/40 text-xs italic mt-1">Artist&apos;s Impression</p>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {renders.map((r, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 relative w-24 h-16 sm:w-32 sm:h-20 rounded-sm overflow-hidden border-2 transition-all duration-200 ${
                i === active ? 'border-brand-gold' : 'border-transparent opacity-60 hover:opacity-90'
              }`}
            >
              <Image
                src={r.src}
                alt={r.caption}
                fill
                className="object-cover"
                sizes="128px"
              />
            </button>
          ))}
        </div>

        {/* Navigation dots (mobile) */}
        <div className="flex justify-center gap-2 mt-6 sm:hidden">
          {renders.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === active ? 'bg-brand-gold w-6' : 'bg-brand-charcoal/30'
              }`}
            />
          ))}
        </div>

        <SectionCTA href="#location" label="Explore the Location" variant="navy" />
      </div>
    </section>
  );
}
