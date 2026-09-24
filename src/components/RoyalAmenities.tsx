import React from 'react';
import { Sparkles, Utensils, Waves, HeartHandshake, Music, Compass } from 'lucide-react';
import { HOTEL_AMENITIES } from '../data/hotelData';

export const RoyalAmenities: React.FC = () => {
  const icons = [
    <Waves key="1" className="w-5 h-5 text-[#D4AF37]" />,
    <Utensils key="2" className="w-5 h-5 text-[#D4AF37]" />,
    <HeartHandshake key="3" className="w-5 h-5 text-[#D4AF37]" />,
    <Music key="4" className="w-5 h-5 text-[#D4AF37]" />
  ];

  return (
    <section id="amenities" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B59325]">
          <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
          <span>Bespoke Hospitality</span>
          <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B192C] tracking-tight">
          Heritage Experiences &amp; Amenities
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          From tranquil morning swims in our marble pool to candlelit rooftop royal feasts, every moment at Rawla Haveli is steeped in the timeless grace of the Pink City.
        </p>
      </div>

      {/* 4 Asymmetric Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {HOTEL_AMENITIES.map((item, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 hover:border-[#D4AF37]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#0B192C] flex items-center justify-center">
                  {icons[idx]}
                </div>
                <span className="text-xs font-medium text-slate-500">
                  {item.category}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B192C]">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 font-light">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0B192C]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Complimentary Access for In-House Guests</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
