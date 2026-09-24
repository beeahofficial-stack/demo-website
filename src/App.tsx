import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingWidget } from './components/BookingWidget';
import { RoomsSection } from './components/RoomsSection';
import { WhyBookDirect } from './components/WhyBookDirect';
import { RoyalAmenities } from './components/RoyalAmenities';
import { GuestReviews } from './components/GuestReviews';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FAQS } from './data/hotelData';
import { ChevronDown, MessageCircle, Sparkles, ShieldCheck, PhoneCall } from 'lucide-react';

export default function App() {
  // Booking dates default (tomorrow and 2 nights later)
  const getTomorrowString = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const getCheckOutString = () => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split('T')[0];
  };

  const [checkInDate, setCheckInDate] = useState<string>(getTomorrowString());
  const [checkOutDate, setCheckOutDate] = useState<string>(getCheckOutString());
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [selectedRoomId, setSelectedRoomId] = useState<string>('deluxe-heritage');

  // Modals state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  // FAQ accordion open states
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleSelectRoomForBooking = (roomId: string) => {
    setSelectedRoomId(roomId);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1E293B] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#0B192C]">
      {/* Sticky Navigation Header */}
      <Navbar 
        onOpenBooking={handleOpenBooking} 
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Floating Direct Reservation Widget */}
        <BookingWidget 
          checkInDate={checkInDate}
          setCheckInDate={setCheckInDate}
          checkOutDate={checkOutDate}
          setCheckOutDate={setCheckOutDate}
          guestsCount={guestsCount}
          setGuestsCount={setGuestsCount}
          selectedRoomId={selectedRoomId}
          setSelectedRoomId={setSelectedRoomId}
          onCheckAvailability={handleOpenBooking}
        />

        {/* Rooms & Suites 3-Card Grid */}
        <RoomsSection onSelectRoomForBooking={handleSelectRoomForBooking} />

        {/* Why Book Direct Trust & Benefits Section */}
        <WhyBookDirect onOpenBooking={handleOpenBooking} />

        {/* Royal Amenities & Experiences */}
        <RoyalAmenities />

        {/* Verified Guest Reviews */}
        <GuestReviews />

        {/* Direct Booking FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-semibold tracking-widest text-[#B59325] uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B192C]">
              Direct Reservations &amp; Stay Queries
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Everything you need to know about our guaranteed direct rates and arrival privileges.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isExpanded = expandedFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-colors shadow-sm"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-semibold text-[#0B192C] hover:text-[#B59325] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#D4AF37]' : ''}`} />
                  </button>
                  {isExpanded && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Location & Embedded Map Section */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={handleOpenBooking} 
      />

      {/* Direct Booking Modal with Razorpay/UPI Simulation */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialRoomId={selectedRoomId}
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        guestsCount={guestsCount}
      />

      {/* Floating 24/7 Concierge WhatsApp Button */}
      <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-30">
        <a
          href="https://wa.me/919829014400?text=Hello%20Rawla%20Haveli%20Jaipur,%20I%20am%20interested%20in%20direct%20booking%20and%20the%2010%25%20discount."
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-2.5 group border border-emerald-400/30"
          title="Direct WhatsApp with Hotel Concierge"
          aria-label="Direct WhatsApp inquiry"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="hidden sm:inline text-xs font-semibold tracking-wide">Direct WhatsApp</span>
        </a>
      </aside>

      {/* Mobile-Only Bottom Sticky Quick Booking Bar (Cap <15% height) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-20 bg-[#0B192C]/95 backdrop-blur-md border-t border-[#D4AF37]/40 px-4 py-2.5 flex items-center justify-between shadow-2xl">
        <div>
          <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Save 10% Direct
          </span>
          <span className="text-xs font-bold text-[#F4E8C1]">From ₹8,500/night</span>
        </div>
        <button
          onClick={handleOpenBooking}
          className="px-4 py-2 rounded-lg bg-[#D4AF37] text-[#0B192C] font-bold text-xs shadow-md"
        >
          Book Direct Now
        </button>
      </div>
    </div>
  );
}
