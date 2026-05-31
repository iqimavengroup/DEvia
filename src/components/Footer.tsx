import Image from 'next/image';

const WA_LINK = 'https://wa.me/60123714815?text=Hi%2C%20I%27m%20interested%20in%20D%27Evia%20Kwasa%20Damansara';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Floor Plans', href: '#floor-plans' },
  { label: 'Location', href: '#location' },
  { label: 'Register', href: '#register' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/page_01.png"
                alt="D'Evia Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain brightness-0 invert"
              />
              <div>
                <p className="font-display text-white text-xl font-light tracking-widest">D&apos;Evia</p>
                <p className="font-body text-white/40 text-xs uppercase tracking-widest">Kwasa Damansara</p>
              </div>
            </div>
            <p className="font-body text-white/50 text-xs uppercase tracking-widest mb-2">A SOMA Company</p>
            <p className="font-body text-white/50 text-xs uppercase tracking-widest">By EXSIM</p>

            <div className="mt-6">
              <p className="font-heading italic text-brand-light-blue text-lg font-light">
                Where Life Flows
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="section-label text-brand-gold mb-4">Quick Links</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="section-label text-brand-gold mb-4">Sales Gallery</p>
            <address className="not-italic space-y-3 font-body text-sm text-white/60">
              <p className="leading-relaxed">
                Unit 1, Lot 18-G-1A,<br />
                Empire City, Jln PJU 8/8,<br />
                47820 Petaling Jaya, Selangor
              </p>
              <a
                href="tel:+60379621998"
                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                03-7962 1998
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-wa-green hover:text-green-400 transition-colors duration-200"
              >
                <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                +60 12-371 4815
              </a>
              <a
                href="mailto:info@exsim.com.my"
                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@exsim.com.my
              </a>
              <a
                href="https://exsim.com.my"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                exsim.com.my
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs font-body text-white/30">
            <p>© 2025 EXSIM MDX SDN. BHD. (146837-W). All rights reserved.</p>
            <p className="italic">
              Artist&apos;s Impression. All information is subject to change without notice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
