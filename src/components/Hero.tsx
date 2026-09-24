import React from 'react';
import { ShieldCheck, Award, ArrowDown, Sparkles, Plane, Star } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B192C]">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/jaipur_heritage_palace_hero_1790183975410.jpg"
          alt="Rawla Haveli luxury heritage palace hotel in Jaipur illuminated at twilight"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured scrim to ensure WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/70 to-[#0B192C]/50" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-8">
        {/* Unboxed Metadata Trust Line (Zero Pill Discipline) */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-wide text-[#F4E8C1] font-medium">
          <div className="flex items-center gap-1 text-[#D4AF37]">
            <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
            <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
            <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
            <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
            <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
          </div>
          <span>4.9 / 5 Rating</span>
          <span aria-hidden="true" className="text-white/40">·</span>
          <span>1,200+ Verified Stays</span>
          <span aria-hidden="true" className="text-white/40">·</span>
          <span>Heritage Rajputana Haveli</span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] text-balance">
          Experience Royal Heritage Luxury in the Heart of Jaipur
        </h1>

        {/* Value Proposition */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
          Step into a 130-year-old aristocratic palace of carved jharokhas, tranquil marble courtyards, and personalized royal hospitality.
        </p>

        {/* Direct Booking Highlight Ribbon */}
        <div className="inline-flex flex-wrap items-center justify-center gap-y-2 gap-x-6 py-2.5 px-5 rounded-xl bg-black/40 backdrop-blur-md border border-[#D4AF37]/40 text-xs sm:text-sm text-slate-200">
          <span className="flex items-center gap-1.5 text-[#F4E8C1] font-semibold">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            Book Direct &amp; Save 10% Instantly
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="flex items-center gap-1.5">
            <Plane className="w-3.5 h-3.5 text-[#D4AF37]" />
            Complimentary Airport Pickup
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Guaranteed Best Public Rate
          </span>
        </div>

        {/* Primary Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#D4AF37] hover:bg-[#B59325] text-[#0B192C] font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Check Availability &amp; Book Direct
          </button>
          <a
            href="#rooms"
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base backdrop-blur-sm border border-white/20 transition-all text-center"
          >
            Explore Rooms &amp; Suites
          </a>
        </div>
      </div>

      {/* Subtle Bottom Scroll Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1 text-[#F4E8C1]/70 text-xs pointer-events-none">
        <span>Reserve Direct Guarantee</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
};
