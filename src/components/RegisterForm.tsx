'use client';

import { useState } from 'react';

const unitOptions = [
  { value: '', label: 'Select unit type' },
  { value: 'Type A (657 sqft, 2-Bed)', label: 'Type A — 657 sq.ft. | 2 Bed' },
  { value: 'Type B1 (958 sqft, 3-Bed, Balcony)', label: 'Type B1 — 958 sq.ft. | 3 Bed + Balcony' },
  { value: 'Type B2 (958 sqft, 3-Bed)', label: 'Type B2 — 958 sq.ft. | 3 Bed' },
  { value: 'Type B3 (958 sqft, 3-Bed, Balcony)', label: 'Type B3 — 958 sq.ft. | 3 Bed + Balcony' },
  { value: 'Type B4 (958 sqft, 3-Bed)', label: 'Type B4 — 958 sq.ft. | 3 Bed' },
  { value: 'Type C1 (1109 sqft, 4-Bed, Balcony)', label: 'Type C1 — 1,109 sq.ft. | 4 Bed + Balcony' },
  { value: 'Type C2 (1109 sqft, 4-Bed)', label: 'Type C2 — 1,109 sq.ft. | 4 Bed' },
];

export default function RegisterForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', unit: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi, I'm interested in D'Evia Kwasa Damansara.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nUnit Interest: ${form.unit || 'Not specified'}`
    );
    window.open(`https://wa.me/60123714815?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="register" className="py-20 lg:py-32 bg-brand-navy relative overflow-hidden">
      {/* Background wave pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <path d="M0,100 C240,180 480,20 720,100 C960,180 1200,20 1440,100 L1440,400 L0,400 Z" fill="white"/>
          <path d="M0,200 C240,280 480,120 720,200 C960,280 1200,120 1440,200 L1440,400 L0,400 Z" fill="white" opacity="0.5"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="section-label text-brand-gold mb-3">Get in Touch</p>
          <h2 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide">
            Register Interest
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4 mb-4" />
          <p className="font-body text-white/60 text-base max-w-md mx-auto">
            Fill in your details and we&apos;ll connect you via WhatsApp — no backend, no waiting.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label className="block font-body text-white/70 text-xs uppercase tracking-widest mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Ahmad Razif"
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/30 rounded-sm px-4 py-3 text-sm font-body focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-body text-white/70 text-xs uppercase tracking-widest mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. 012-345 6789"
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/30 rounded-sm px-4 py-3 text-sm font-body focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-body text-white/70 text-xs uppercase tracking-widest mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="e.g. ahmad@email.com"
              className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/30 rounded-sm px-4 py-3 text-sm font-body focus:outline-none focus:border-brand-gold transition-colors"
            />
          </div>

          {/* Unit type */}
          <div>
            <label className="block font-body text-white/70 text-xs uppercase tracking-widest mb-2">
              Unit Type Interest
            </label>
            <select
              name="unit"
              value={form.unit}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 text-white rounded-sm px-4 py-3 text-sm font-body focus:outline-none focus:border-brand-gold transition-colors appearance-none"
            >
              {unitOptions.map((o) => (
                <option key={o.value} value={o.value} className="text-brand-navy bg-white">
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-brand-wa-green hover:bg-green-500 text-white font-body font-medium text-sm py-4 rounded-sm tracking-wider uppercase transition-colors duration-200"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send via WhatsApp
          </button>

          <p className="text-center font-body text-white/30 text-xs">
            Your details will be sent directly to our sales team via WhatsApp. No data is stored.
          </p>
        </form>
      </div>
    </section>
  );
}
