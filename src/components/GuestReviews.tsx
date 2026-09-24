import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { GUEST_REVIEWS } from '../data/hotelData';

export const GuestReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#F5EFEB]/50 border-t border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B59325]">
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
            <span>Guest Chronicles</span>
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B192C] tracking-tight">
            Loved by Discerning Travelers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Rated 4.9/5 stars across more than 1,200 verified reviews. Here is what guests share about their direct stay experience at Rawla Haveli.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUEST_REVIEWS.map((review, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Verified Direct Booking */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#D4AF37] gap-0.5">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified Direct Stay
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#0B192C] leading-snug">
                  "{review.title}"
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Room Attribution */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-[#0B192C]">{review.author}</p>
                  <p className="text-slate-500">{review.location}</p>
                </div>
                <div className="text-right text-slate-400">
                  <p className="font-medium text-slate-600">{review.stayedIn}</p>
                  <p>{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
