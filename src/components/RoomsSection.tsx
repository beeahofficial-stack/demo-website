import React, { useState } from 'react';
import { 
  Wifi, Coffee, Wind, Sparkles, Check, ArrowRight, 
  Maximize2, Eye, Bed, ShieldCheck, Info
} from 'lucide-react';
import { ROOMS, RoomType } from '../data/hotelData';

interface RoomsSectionProps {
  onSelectRoomForBooking: (roomId: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onSelectRoomForBooking }) => {
  const [activeDetailRoom, setActiveDetailRoom] = useState<RoomType | null>(null);

  return (
    <section id="rooms" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B59325]">
          <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
          <span>Accommodations</span>
          <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B192C] tracking-tight">
          Rooms &amp; Royal Suites
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Each residence combines historical Rajasthani craftsmanship with modern five-star comfort. Book direct to unlock our guaranteed best rate, complimentary airport pickup, and royal welcome amenities.
        </p>
      </div>

      {/* 3 Room Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {ROOMS.map((room) => {
          const savingsPerNight = room.otaPrice - room.pricePerNight;

          return (
            <div 
              key={room.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Fallback */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={room.image}
                  alt={`${room.name} at Rawla Haveli Jaipur`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Direct Booking Badge */}
                <div className="absolute top-3 left-3 bg-[#0B192C]/90 backdrop-blur-md text-[#F4E8C1] border border-[#D4AF37]/50 text-[11px] font-semibold px-2.5 py-1 rounded-md shadow flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  <span>Save ₹{savingsPerNight.toLocaleString('en-IN')}/night Direct</span>
                </div>

                {/* View Details Quick Button */}
                <button
                  onClick={() => setActiveDetailRoom(room)}
                  className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-slate-800 text-[11px] font-medium px-2.5 py-1 rounded-md shadow backdrop-blur-sm transition-colors flex items-center gap-1"
                  aria-label={`View full details of ${room.name}`}
                >
                  <Eye className="w-3 h-3 text-slate-600" />
                  <span>View Details</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Clean unboxed metadata separator */}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{room.size}</span>
                    <span aria-hidden="true">·</span>
                    <span>{room.bedType}</span>
                    <span aria-hidden="true">·</span>
                    <span>Up to {room.maxGuests} Guests</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#0B192C] group-hover:text-[#B59325] transition-colors">
                    {room.name}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {room.tagline}
                  </p>
                </div>

                {/* Key Amenities Icons */}
                <div className="border-t border-b border-slate-100 py-3 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Coffee className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span className="truncate">Complimentary Royal Breakfast Buffet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span className="truncate">High-Speed Optical Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span className="truncate">Climate Controlled Air Conditioning</span>
                  </div>
                </div>

                {/* Pricing & Booking Action */}
                <div className="pt-1">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-[#0B192C] tracking-tight">
                          ₹{room.pricePerNight.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-slate-500 font-normal">/ night</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-0.5">
                        <span>OTA Price:</span>
                        <span className="line-through">₹{room.otaPrice.toLocaleString('en-IN')}</span>
                        <span className="text-emerald-700 font-semibold">(10% Direct Save)</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectRoomForBooking(room.id)}
                    className="w-full py-3 px-4 rounded-lg bg-[#0B192C] hover:bg-[#162C46] text-[#F4E8C1] font-semibold text-xs sm:text-sm transition-all duration-200 shadow hover:shadow-md flex items-center justify-center gap-2 group-hover:bg-[#0B192C]"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Room Details Modal */}
      {activeDetailRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 border border-[#D4AF37]/30">
            <div className="relative aspect-[16/9] bg-slate-100">
              <img
                src={activeDetailRoom.image}
                alt={activeDetailRoom.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveDetailRoom(null)}
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/80 text-white p-1.5 rounded-full backdrop-blur-sm"
              >
                ✕
              </button>
              <div className="absolute bottom-3 left-3 bg-[#0B192C]/90 text-[#F4E8C1] px-3 py-1 rounded text-xs font-semibold">
                Direct Rate: ₹{activeDetailRoom.pricePerNight.toLocaleString('en-IN')}/nt (Save ₹{(activeDetailRoom.otaPrice - activeDetailRoom.pricePerNight).toLocaleString('en-IN')})
              </div>
            </div>

            <div className="p-6 space-y-4 max-h-[50vh] overflow-y-auto text-xs sm:text-sm text-slate-700">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0B192C]">{activeDetailRoom.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{activeDetailRoom.size} · {activeDetailRoom.bedType} · {activeDetailRoom.view}</p>
              </div>

              <p className="leading-relaxed text-slate-600">{activeDetailRoom.description}</p>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Room Amenities &amp; Services:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {activeDetailRoom.amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F7EFCF]/30 p-3 rounded-lg border border-[#D4AF37]/40 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#0B192C]">Direct Booking Guarantee</p>
                  <p className="text-xs text-slate-600">Free airport pickup + 10% discount included</p>
                </div>
                <button
                  onClick={() => {
                    const roomId = activeDetailRoom.id;
                    setActiveDetailRoom(null);
                    onSelectRoomForBooking(roomId);
                  }}
                  className="py-2 px-4 rounded-lg bg-[#D4AF37] hover:bg-[#B59325] text-[#0B192C] font-semibold text-xs"
                >
                  Book This Room
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
