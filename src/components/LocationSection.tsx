import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Navigation, Clock, ShieldCheck, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B59325]">
          <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
          <span>The Prime Address</span>
          <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B192C] tracking-tight">
          Heart of Jaipur's Heritage Quarter
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Nestled along regal, tree-lined avenues in Civil Lines, Rawla Haveli offers peaceful tranquility minutes away from the Pink City's greatest palaces, bazaars, and fortresses.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Direct Contact & Landmarks */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          {/* Direct Concierge Box */}
          <div className="bg-[#0B192C] text-white p-6 sm:p-7 rounded-2xl border border-[#D4AF37]/30 shadow-lg space-y-5">
            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#D4AF37]">
                Official Direct Desk
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F4E8C1] mt-1">
                Reach Our Palace Team
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                For bespoke suite inquiries, direct corporate rates, or wedding celebrations.
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <a 
                href="tel:+911412894400"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-semibold">Reservations Hotline</p>
                  <p className="font-medium text-white">+91 141 289 4400 / +91 141 289 4401</p>
                </div>
              </a>

              <a 
                href="https://wa.me/919829014400?text=Hello%20Rawla%20Haveli%20Jaipur,%20I%20would%20like%20to%20inquire%20about%20direct%20room%20availability."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-emerald-900/30 hover:bg-emerald-900/50 border border-emerald-500/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-emerald-300 text-[10px] uppercase font-semibold">Instant WhatsApp Desk (24/7)</p>
                  <p className="font-medium text-emerald-200">+91 98290 14400 (Click to Chat)</p>
                </div>
              </a>

              <a 
                href="mailto:reservations@rawlahavelijaipur.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-semibold">Official Email</p>
                  <p className="font-medium text-white">reservations@rawlahavelijaipur.com</p>
                </div>
              </a>
            </div>

            <div className="pt-2 border-t border-white/10 text-xs text-slate-400 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>14 Rajputana Marg, Near Jacob Road, Civil Lines, Jaipur 302006, Rajasthan, India</span>
            </div>
          </div>

          {/* Proximity Distances */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <h4 className="font-serif text-base font-bold text-[#0B192C]">Distances &amp; Key Landmarks</h4>
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <p className="font-semibold text-slate-800">City Palace &amp; Jantar Mantar</p>
                <p className="text-slate-500 text-[11px] mt-0.5">12 mins drive (4.2 km)</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <p className="font-semibold text-slate-800">Hawa Mahal (Wind Palace)</p>
                <p className="text-slate-500 text-[11px] mt-0.5">14 mins drive (4.8 km)</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <p className="font-semibold text-slate-800">Jaipur International Airport</p>
                <p className="text-slate-500 text-[11px] mt-0.5">25 mins drive (11.5 km)</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <p className="font-semibold text-slate-800">Amber Fort &amp; Palace</p>
                <p className="text-slate-500 text-[11px] mt-0.5">28 mins drive (12.8 km)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Embedded Google Maps Placeholder */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden flex flex-col">
          {/* Map Header */}
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs">
            <span className="font-medium text-slate-700 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-[#B59325]" />
              Live Interactive Location · Civil Lines, Jaipur
            </span>
            <a 
              href="https://maps.google.com/?q=Civil+Lines+Jaipur+Rajasthan" 
              target="_blank" 
              rel="noreferrer"
              className="text-[#0B192C] font-semibold hover:text-[#B59325] flex items-center gap-1 transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Interactive Styled Google Map iframe */}
          <div className="relative flex-1 min-h-[360px] bg-slate-100">
            <iframe
              title="Rawla Haveli Location Map"
              width="100%"
              height="100%"
              className="border-0 w-full h-full min-h-[380px]"
              loading="lazy"
              src="https://maps.google.com/maps?q=Civil%20Lines,%20Jaipur,%20Rajasthan&t=&z=14&ie=UTF8&iwloc=&output=embed"
            />

            {/* Custom Hotel Pin Overlay Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-[#D4AF37]/50 max-w-xs text-xs pointer-events-none hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#D4AF37] ring-4 ring-[#D4AF37]/30"></div>
                <p className="font-bold text-[#0B192C]">Rawla Haveli Heritage Hotel</p>
              </div>
              <p className="text-slate-500 mt-1 text-[11px]">Free private airport pickup included with all direct bookings.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
