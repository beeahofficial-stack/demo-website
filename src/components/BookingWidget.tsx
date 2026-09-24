import React from 'react';
import { Calendar, Users, Home, Sparkles, ArrowRight } from 'lucide-react';
import { ROOMS } from '../data/hotelData';

interface BookingWidgetProps {
  checkInDate: string;
  setCheckInDate: (date: string) => void;
  checkOutDate: string;
  setCheckOutDate: (date: string) => void;
  guestsCount: number;
  setGuestsCount: (count: number) => void;
  selectedRoomId: string;
  setSelectedRoomId: (id: string) => void;
  onCheckAvailability: () => void;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  guestsCount,
  setGuestsCount,
  selectedRoomId,
  setSelectedRoomId,
  onCheckAvailability
}) => {
  return (
    <div className="relative z-30 -mt-10 sm:-mt-12 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-[#FDFBF7] rounded-2xl shadow-2xl border border-[#D4AF37]/40 p-4 sm:p-5 backdrop-blur-md">
        {/* Top Direct Guarantee Callout */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200/80 text-xs">
          <div className="flex items-center gap-1.5 font-semibold text-[#0B192C]">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Direct Reservation Engine</span>
            <span className="text-slate-400 font-normal">|</span>
            <span className="text-emerald-700 font-medium">Automatic 10% Discount Applied vs OTA</span>
          </div>
          <div className="text-slate-500 hidden md:block">
            Instant Confirmation · Zero Booking Fees · Razorpay / UPI Accepted
          </div>
        </div>

        {/* Floating Bar Inputs Grid */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            onCheckAvailability();
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end"
        >
          {/* Check-In Date */}
          <div className="lg:col-span-3 space-y-1">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> Check-In
            </label>
            <input
              type="date"
              value={checkInDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="w-full h-11 px-3 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-sm"
              required
            />
          </div>

          {/* Check-Out Date */}
          <div className="lg:col-span-3 space-y-1">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> Check-Out
            </label>
            <input
              type="date"
              value={checkOutDate}
              min={checkInDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="w-full h-11 px-3 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-sm"
              required
            />
          </div>

          {/* Guests Picker */}
          <div className="lg:col-span-2 space-y-1">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#D4AF37]" /> Guests
            </label>
            <select
              value={guestsCount}
              onChange={(e) => setGuestsCount(Number(e.target.value))}
              className="w-full h-11 px-3 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-sm"
            >
              <option value={1}>1 Adult</option>
              <option value={2}>2 Adults</option>
              <option value={3}>3 Adults</option>
              <option value={4}>4 Adults</option>
            </select>
          </div>

          {/* Room Type Selector */}
          <div className="lg:col-span-2 space-y-1">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 flex items-center gap-1">
              <Home className="w-3.5 h-3.5 text-[#D4AF37]" /> Suite Category
            </label>
            <select
              value={selectedRoomId}
              onChange={(e) => setSelectedRoomId(e.target.value)}
              className="w-full h-11 px-3 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-sm truncate"
            >
              {ROOMS.map(room => (
                <option key={room.id} value={room.id}>
                  {room.name} (from ₹{room.pricePerNight.toLocaleString('en-IN')})
                </option>
              ))}
            </select>
          </div>

          {/* Check Availability CTA Button */}
          <div className="lg:col-span-2">
            <button
              type="submit"
              className="w-full h-11 px-4 rounded-lg bg-[#D4AF37] hover:bg-[#B59325] text-[#0B192C] font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap active:scale-[0.98]"
            >
              <span>Check Availability</span>
              <ArrowRight className="w-4 h-4 text-[#0B192C]" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
