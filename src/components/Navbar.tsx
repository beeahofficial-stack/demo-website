import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B192C]/95 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/30 py-3' 
          : 'bg-gradient-to-b from-[#0B192C]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#" 
            className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#F4E8C1] hover:text-[#D4AF37] transition-colors whitespace-nowrap"
          >
            RAWLA HAVELI
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-200">
            <a href="#rooms" className="hover:text-[#D4AF37] transition-colors">Rooms</a>
            <a href="#book-direct" className="hover:text-[#D4AF37] transition-colors">Why Book Direct</a>
            <a href="#amenities" className="hover:text-[#D4AF37] transition-colors">Amenities</a>
            <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">Reviews</a>
            <a href="#location" className="hover:text-[#D4AF37] transition-colors">Location</a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#B59325] text-[#0B192C] font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all whitespace-nowrap transform active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0B192C]" />
              <span>Book Direct &amp; Save 10%</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-200 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B192C] border-b border-[#D4AF37]/30 px-4 pt-3 pb-6 space-y-3 mt-3 shadow-xl">
          <a 
            href="#rooms" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-200 hover:text-[#D4AF37] border-b border-white/5"
          >
            Rooms &amp; Suites
          </a>
          <a 
            href="#book-direct" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-200 hover:text-[#D4AF37] border-b border-white/5"
          >
            Why Book Direct (Save 10%)
          </a>
          <a 
            href="#amenities" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-200 hover:text-[#D4AF37] border-b border-white/5"
          >
            Royal Amenities &amp; Dining
          </a>
          <a 
            href="#reviews" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-200 hover:text-[#D4AF37] border-b border-white/5"
          >
            Guest Reviews
          </a>
          <a 
            href="#location" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-200 hover:text-[#D4AF37] border-b border-white/5"
          >
            Location &amp; Contact
          </a>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-lg bg-[#D4AF37] text-[#0B192C] font-semibold text-xs text-center shadow"
            >
              Check Availability &amp; Book Direct
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
