import React from 'react';
import { ShieldCheck, Car, Clock, Sparkles, Check, X, ArrowRight, Gift } from 'lucide-react';
import { DIRECT_BOOKING_PERKS } from '../data/hotelData';

interface WhyBookDirectProps {
  onOpenBooking: () => void;
}

export const WhyBookDirect: React.FC<WhyBookDirectProps> = ({ onOpenBooking }) => {
  return (
    <section id="book-direct" className="py-20 bg-[#0B192C] text-white relative overflow-hidden">
      {/* Subtle royal background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#064E3B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
            <span>The Direct Advantage</span>
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Why Discerning Guests Book Direct
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Third-party travel agents charge high intermediary fees. When you book directly through our official website, we invest those savings straight back into your stay.
          </p>
        </div>

        {/* 3 Core Perks Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {DIRECT_BOOKING_PERKS.map((perk, index) => {
            const icons = [
              <ShieldCheck key="1" className="w-7 h-7 text-[#D4AF37]" />,
              <Car key="2" className="w-7 h-7 text-[#D4AF37]" />,
              <Clock key="3" className="w-7 h-7 text-[#D4AF37]" />
            ];

            return (
              <div 
                key={perk.id}
                className="bg-[#162C46]/60 rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#0B192C] border border-[#D4AF37]/40 flex items-center justify-center">
                      {icons[index]}
                    </div>
                    <span className="text-[11px] font-bold text-[#F4E8C1] tracking-wider bg-[#D4AF37]/15 px-2.5 py-1 rounded border border-[#D4AF37]/30">
                      {perk.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#F4E8C1] transition-colors">
                      {perk.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#D4AF37] mt-1">
                      {perk.highlight}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {perk.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct vs OTA Comparison Table */}
        <div className="max-w-4xl mx-auto bg-[#162C46]/80 rounded-2xl border border-[#D4AF37]/30 overflow-hidden shadow-2xl">
          <div className="p-5 sm:p-6 bg-[#0B192C] border-b border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F4E8C1]">
                Rawla Haveli Direct vs. Third-Party OTAs
              </h3>
              <p className="text-xs text-slate-400">See what you receive when booking official direct vs. Booking.com / Agoda</p>
            </div>
            <button
              onClick={onOpenBooking}
              className="py-2.5 px-5 rounded-lg bg-[#D4AF37] hover:bg-[#B59325] text-[#0B192C] font-semibold text-xs transition-all whitespace-nowrap"
            >
              Claim Direct 10% Rate
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-700 bg-white/5 text-slate-300">
                  <th className="py-3.5 px-4 sm:px-6 font-semibold">Benefit / Privileges</th>
                  <th className="py-3.5 px-4 sm:px-6 font-semibold text-[#D4AF37] bg-[#D4AF37]/10 text-center w-1/3">
                    Book Direct With Us
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 font-semibold text-slate-400 text-center w-1/3">
                    Third-Party OTA Portals
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60">
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 text-white font-medium">Nightly Room Rate</td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-400 font-semibold text-center bg-[#D4AF37]/5">
                    Guaranteed 10% Lower
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-400 text-center">
                    Higher (Includes OTA Commission)
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 text-white font-medium">Airport / Station Chauffeur Transfer</td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-400 font-semibold text-center bg-[#D4AF37]/5 flex items-center justify-center gap-1">
                    <Check className="w-4 h-4 text-emerald-400" /> Complimentary (2+ Nights)
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-400 text-center flex items-center justify-center gap-1">
                    <X className="w-4 h-4 text-rose-400" /> ₹1,800 Extra Charge
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 text-white font-medium">Early Check-In &amp; Late Check-Out</td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-400 font-semibold text-center bg-[#D4AF37]/5">
                    1st Priority Queue
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-400 text-center">
                    Subject to Strictest Standard Times
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 text-white font-medium">Welcome Ritual &amp; Palace Tour</td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-400 font-semibold text-center bg-[#D4AF37]/5 flex items-center justify-center gap-1">
                    <Check className="w-4 h-4 text-emerald-400" /> Kesar Badam Milk &amp; Heritage Tour
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-400 text-center">
                    Basic Standard Check-in
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 text-white font-medium">Direct Concierge Communication</td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-400 font-semibold text-center bg-[#D4AF37]/5">
                    Direct WhatsApp with GM &amp; Front Desk
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-400 text-center">
                    Automated Call Centers / Slow Messaging
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
