'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionCTA from './SectionCTA';

const WA_BASE = 'https://wa.me/60123714815?text=Hi%2C%20I%27m%20interested%20in%20D%27Evia%20Kwasa%20Damansara%20-%20';

const unitTypes = [
  {
    type: 'A',
    sqft: 657,
    sqm: 61,
    beds: 2,
    baths: 2,
    balcony: false,
    src: '/assets/cropped/floorplan-a.png',
    label: 'Type A — Studio-Sized 2-Bedroom',
  },
  {
    type: 'B1',
    sqft: 958,
    sqm: 89,
    beds: 3,
    baths: 2,
    balcony: true,
    src: '/assets/cropped/floorplan-b1.png',
    label: 'Type B1 — 3-Bedroom with Balcony',
  },
  {
    type: 'B2',
    sqft: 958,
    sqm: 89,
    beds: 3,
    baths: 2,
    balcony: false,
    src: '/assets/cropped/floorplan-b2.png',
    label: 'Type B2 — 3-Bedroom',
  },
  {
    type: 'B3',
    sqft: 958,
    sqm: 89,
    beds: 3,
    baths: 2,
    balcony: true,
    src: '/assets/cropped/floorplan-b3.png',
    label: 'Type B3 — 3-Bedroom with Balcony',
  },
  {
    type: 'B4',
    sqft: 958,
    sqm: 89,
    beds: 3,
    baths: 2,
    balcony: false,
    src: '/assets/cropped/floorplan-b4.png',
    label: 'Type B4 — 3-Bedroom',
  },
  {
    type: 'C1',
    sqft: 1109,
    sqm: 103,
    beds: 4,
    baths: 2,
    balcony: true,
    src: '/assets/cropped/floorplan-c1.png',
    label: 'Type C1 — 4-Bedroom with Balcony',
  },
  {
    type: 'C2',
    sqft: 1109,
    sqm: 103,
    beds: 4,
    baths: 2,
    balcony: false,
    src: '/assets/cropped/floorplan-c2.png',
    label: 'Type C2 — 4-Bedroom',
  },
];

const filters = ['All', 'Type A', 'Type B', 'Type C'];

export default function FloorPlans() {
  const [filter, setFilter] = useState('All');

  const filtered = unitTypes.filter((u) => {
    if (filter === 'All') return true;
    return `Type ${u.type[0]}` === filter;
  });

  return (
    <section id="floor-plans" className="py-20 lg:py-32 bg-brand-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Layouts & Spaces</p>
          <h2 className="font-display text-brand-navy text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide">
            Floor Plans
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4 mb-4" />
          <p className="font-body text-brand-charcoal/60 max-w-xl mx-auto text-base">
            Choose from 7 thoughtfully designed unit configurations — from compact 2-bedroom to
            spacious 4-bedroom homes.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 justify-center mb-8 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 text-sm font-body rounded-sm border transition-all duration-200 ${
                f === filter
                  ? 'bg-brand-navy text-white border-brand-navy'
                  : 'bg-white text-brand-navy/70 border-brand-navy/20 hover:border-brand-blue'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Unit type cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((unit) => (
            <div
              key={unit.type}
              className="bg-white rounded-sm overflow-hidden shadow-md border border-brand-light-blue/20 hover:shadow-lg transition-shadow duration-200 flex flex-col"
            >
              {/* Floor plan image */}
              <div className="relative aspect-[4/3] bg-brand-blue overflow-hidden">
                <Image
                  src={unit.src}
                  alt={`Floor plan ${unit.label}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Card content */}
              <div className="p-4 flex flex-col flex-1">
                {/* Type label */}
                <p className="section-label mb-1">Type {unit.type}</p>
                <p className="font-body text-brand-navy text-sm font-medium mb-3 leading-snug">
                  {unit.label.split('—')[1]?.trim()}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-brand-section-bg rounded-sm p-2 text-center">
                    <p className="font-display text-brand-navy text-lg font-light">
                      {unit.sqft.toLocaleString()}
                    </p>
                    <p className="font-body text-brand-charcoal/50 text-xs uppercase tracking-wider">sq.ft.</p>
                  </div>
                  <div className="bg-brand-section-bg rounded-sm p-2 text-center">
                    <p className="font-display text-brand-navy text-lg font-light">{unit.sqm}</p>
                    <p className="font-body text-brand-charcoal/50 text-xs uppercase tracking-wider">sm</p>
                  </div>
                </div>

                {/* Bed/bath/balcony */}
                <div className="flex items-center gap-3 mb-4 text-brand-charcoal/60 text-xs font-body">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {unit.beds} Bed
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {unit.baths} Bath
                  </span>
                  <span
                    className={`ml-auto px-2 py-0.5 rounded-sm text-xs font-medium ${
                      unit.balcony
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-gray-50 text-gray-500 border border-gray-200'
                    }`}
                  >
                    {unit.balcony ? 'Balcony' : 'No Balcony'}
                  </span>
                </div>

                {/* CTA */}
                <a
                  href={`${WA_BASE}Type%20${unit.type}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto block text-center bg-brand-navy hover:bg-brand-blue text-white text-xs font-body font-medium py-2.5 rounded-sm tracking-wider uppercase transition-colors duration-200"
                >
                  Enquire via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <SectionCTA href="#facilities" label="Explore Facilities" variant="navy" />
      </div>
    </section>
  );
}
