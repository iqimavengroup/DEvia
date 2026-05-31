import Image from 'next/image';
import SectionCTA from './SectionCTA';

const connectivity = [
  {
    label: 'MRT Kwasa Sentral',
    value: '~600m',
    sub: '8-min walk',
  },
  {
    label: 'HELP University',
    value: '< 5 min',
    sub: 'By car',
  },
  {
    label: 'HELP International School',
    value: 'Nearby',
    sub: 'International curriculum',
  },
  {
    label: 'Kota Damansara Forest',
    value: 'Adjacent',
    sub: 'Community forest reserve',
  },
  {
    label: 'Guthrie Corridor',
    value: 'Direct',
    sub: 'Major expressway access',
  },
  {
    label: 'NKVE · DASH · ELITE',
    value: 'Minutes',
    sub: 'Highway network',
  },
];

export default function Location() {
  return (
    <section id="location" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Strategic Position</p>
          <h2 className="font-display text-brand-navy text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide">
            Location
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4 mb-4" />
          <p className="font-body text-brand-charcoal/60 max-w-xl mx-auto text-base">
            Strategically located at Kwasa Damansara — one of the most exciting new townships in
            Klang Valley, with unmatched connectivity and a planned community masterplan.
          </p>
        </div>

        {/* Location map image from brochure */}
        <div className="relative aspect-[16/9] sm:aspect-[16/7] rounded-sm overflow-hidden mb-8 shadow-xl">
          <Image
            src="/assets/page_13.png"
            alt="D'Evia Kwasa Damansara location map"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        {/* Google Maps embed */}
        <div className="rounded-sm overflow-hidden shadow-lg mb-12 border border-brand-light-blue/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.4267453849867!2d101.56003807499!3d3.1637900967793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc48ff2c0e2f93%3A0x8c32d69a5bfcde5a!2sKwasa%20Damansara%2C%20Selangor!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="D'Evia Kwasa Damansara location"
          />
        </div>

        {/* Connectivity grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {connectivity.map((item) => (
            <div
              key={item.label}
              className="text-center p-4 rounded-sm bg-brand-section-bg border border-brand-light-blue/30"
            >
              <span className="block w-8 h-px bg-brand-gold mx-auto mb-3" />
              <p className="font-display text-brand-navy text-xl font-light">{item.value}</p>
              <p className="font-body text-xs font-medium text-brand-gold uppercase tracking-wider mt-1">
                {item.label}
              </p>
              <p className="font-body text-brand-charcoal/50 text-xs mt-1">{item.sub}</p>
            </div>
          ))}
        </div>

        <SectionCTA href="#register" label="Register Your Interest" variant="navy" />
      </div>
    </section>
  );
}
