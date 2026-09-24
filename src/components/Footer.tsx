import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles, MessageCircle, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#060E18] text-slate-300 text-xs border-t border-[#D4AF37]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Story */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#F4E8C1]">
              RAWLA HAVELI
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md font-light">
              An authentic 19th-century royal Rajputana haveli in Civil Lines, Jaipur. Restored into a premier boutique heritage sanctuary offering curated luxury, private courtyards, and genuine Indian hospitality.
            </p>
            <div className="flex items-center gap-3 text-[#D4AF37] pt-1">
              <Award className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-xs font-medium text-slate-300">
                Heritage Gold Class Distinction · Department of Tourism, Rajasthan
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-serif text-sm font-semibold uppercase tracking-wider text-[#F4E8C1]">
              The Palace
            </p>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#rooms" className="hover:text-[#D4AF37] transition-colors">Deluxe Heritage Rooms</a></li>
              <li><a href="#rooms" className="hover:text-[#D4AF37] transition-colors">The Royal Suite</a></li>
              <li><a href="#rooms" className="hover:text-[#D4AF37] transition-colors">Private Courtyard Suite</a></li>
              <li><a href="#amenities" className="hover:text-[#D4AF37] transition-colors">Turquoise Courtyard Pool</a></li>
              <li><a href="#amenities" className="hover:text-[#D4AF37] transition-colors">Shahi Rasoi Rooftop Dining</a></li>
            </ul>
          </div>

          {/* Direct Booking Advantages */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-serif text-sm font-semibold uppercase tracking-wider text-[#F4E8C1]">
              Direct Booking
            </p>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#book-direct" className="hover:text-[#D4AF37] transition-colors">10% Best Rate Guarantee</a></li>
              <li><a href="#book-direct" className="hover:text-[#D4AF37] transition-colors">Free Airport Pickup</a></li>
              <li><a href="#book-direct" className="hover:text-[#D4AF37] transition-colors">Early Check-in Priority</a></li>
              <li><a href="#book-direct" className="hover:text-[#D4AF37] transition-colors">Flexible 48h Cancellation</a></li>
              <li>
                <a 
                  href="https://wa.me/919829014400"
                  target="_blank"
                  rel="noreferrer"
                  className="text-left text-[#D4AF37] hover:underline transition-colors"
                >
                  Direct WhatsApp Helpdesk
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-serif text-sm font-semibold uppercase tracking-wider text-[#F4E8C1]">
              Reservations Desk
            </p>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>+91 141 289 4400</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <a href="https://wa.me/919829014400" target="_blank" rel="noreferrer" className="hover:text-white">
                  +91 98290 14400 (WhatsApp)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>reservations@rawlahavelijaipur.com</span>
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#D4AF37] hover:bg-[#B59325] text-[#0B192C] font-semibold text-xs transition-colors shadow"
                >
                  Book Direct &amp; Save 10%
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Booking Pledge Banner */}
        <div className="bg-[#162C46]/50 p-4 rounded-xl border border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-300">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs">
              <strong>Direct Booking Pledge:</strong> By booking directly, you help support our local artisan staff and heritage palace conservation without 18% OTA deductions.
            </span>
          </div>
          <button
            onClick={onOpenBooking}
            className="text-xs text-[#F4E8C1] hover:text-white underline whitespace-nowrap"
          >
            Check Availability Now →
          </button>
        </div>

        {/* Quiet Sub-Footer */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© 2026 Rawla Haveli Jaipur. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-300">Terms of Stay</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-300">Direct Booking Guarantee</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
