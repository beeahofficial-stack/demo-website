export const STANDALONE_HTML_CODE = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rawla Haveli - Jaipur Heritage Boutique Hotel</title>
  <meta name="description" content="Experience royal Rajasthani heritage luxury in Jaipur. Book direct to save 10%, free airport pickup, and guaranteed best rates." />
  
  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            royal: {
              DEFAULT: '#0B192C',
              dark: '#060E18',
              card: '#162C46',
            },
            gold: {
              DEFAULT: '#D4AF37',
              dark: '#B59325',
              light: '#F4E8C1',
              pale: '#F7EFCF',
            },
            cream: '#FDFBF7',
            emeraldCustom: '#064E3B',
          },
          fontFamily: {
            serif: ['Cormorant Garamond', 'Georgia', 'serif'],
            sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <!-- Google Fonts: Cormorant Garamond & Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #FDFBF7; color: #1E293B; }
    h1, h2, h3, h4, .font-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
  </style>
</head>
<body class="antialiased selection:bg-gold/30 selection:text-royal">

  <!-- TOP STICKY NAVIGATION BAR -->
  <header id="navbar" class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-royal/95 backdrop-blur-md border-b border-gold/30 py-3 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <!-- Zone 1: Brand Wordmark -->
      <a href="#" class="font-serif text-2xl font-bold tracking-wider text-gold-light hover:text-gold transition-colors">
        RAWLA HAVELI
      </a>

      <!-- Zone 2: Navigation Links -->
      <nav class="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-200">
        <a href="#rooms" class="hover:text-gold transition-colors">Rooms</a>
        <a href="#why-direct" class="hover:text-gold transition-colors">Why Book Direct</a>
        <a href="#amenities" class="hover:text-gold transition-colors">Amenities</a>
        <a href="#reviews" class="hover:text-gold transition-colors">Reviews</a>
        <a href="#location" class="hover:text-gold transition-colors">Location</a>
      </nav>

      <!-- Zone 3: Direct Action CTA -->
      <div class="flex items-center gap-3">
        <a href="https://wa.me/919829014400" target="_blank" class="hidden sm:inline-flex text-xs text-slate-300 hover:text-white items-center gap-1 border border-slate-600 px-3 py-2 rounded-lg">
          <span>WhatsApp 24/7</span>
        </a>
        <button onclick="openBookingModal('deluxe-heritage')" class="px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-gold hover:bg-gold-dark text-royal font-semibold text-xs sm:text-sm shadow-md transition-all">
          Book Direct &amp; Save 10%
        </button>
      </div>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 bg-royal text-center text-white overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=2000&q=80" alt="Jaipur Heritage Haveli" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-royal via-royal/70 to-royal/40"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto space-y-6">
      <div class="inline-flex items-center gap-2 text-xs sm:text-sm text-gold-light font-medium">
        <span>★ 4.9 / 5 Rating</span>
        <span>·</span>
        <span>1,200+ Verified Stays</span>
        <span>·</span>
        <span>Civil Lines, Jaipur</span>
      </div>

      <h1 class="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
        Experience Royal Heritage Luxury in the Heart of Jaipur
      </h1>

      <p class="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-light">
        A restored 19th-century royal Rajputana haveli blending majestic carved jharokhas, tranquil marble courtyards, and five-star bespoke hospitality.
      </p>

      <div class="inline-flex flex-wrap items-center justify-center gap-4 py-2 px-5 rounded-xl bg-black/40 backdrop-blur-md border border-gold/40 text-xs sm:text-sm text-slate-200">
        <span class="text-gold-light font-semibold">✨ Guaranteed Best Rate</span>
        <span>|</span>
        <span>🚗 Free Luxury Airport Pickup</span>
        <span>|</span>
        <span>☕ Free Royal Breakfast</span>
      </div>

      <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <button onclick="openBookingModal('deluxe-heritage')" class="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-gold hover:bg-gold-dark text-royal font-semibold text-sm shadow-xl transition-all">
          Check Availability &amp; Book Direct
        </button>
        <a href="#rooms" class="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 transition-all">
          View Rooms &amp; Suites
        </a>
      </div>
    </div>
  </section>

  <!-- INTERACTIVE DIRECT BOOKING WIDGET (FLOATING BAR) -->
  <div class="relative z-30 -mt-10 max-w-5xl mx-auto px-4">
    <div class="bg-cream rounded-2xl shadow-2xl border border-gold/40 p-4 sm:p-5">
      <div class="flex items-center justify-between text-xs pb-3 mb-3 border-b border-slate-200">
        <span class="font-semibold text-royal">✨ Direct Booking Engine · Automatic 10% Discount Applied</span>
        <span class="text-slate-500 hidden sm:inline">Zero Booking Fees · Instant Razorpay/UPI Checkout</span>
      </div>

      <form onsubmit="handleWidgetSubmit(event)" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end">
        <div class="lg:col-span-3">
          <label class="block text-[11px] font-semibold text-slate-600 uppercase mb-1">Check-In Date</label>
          <input type="date" id="widget-checkin" required class="w-full h-11 px-3 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm" />
        </div>
        <div class="lg:col-span-3">
          <label class="block text-[11px] font-semibold text-slate-600 uppercase mb-1">Check-Out Date</label>
          <input type="date" id="widget-checkout" required class="w-full h-11 px-3 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm" />
        </div>
        <div class="lg:col-span-2">
          <label class="block text-[11px] font-semibold text-slate-600 uppercase mb-1">Guests</label>
          <select id="widget-guests" class="w-full h-11 px-3 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm">
            <option value="1">1 Adult</option>
            <option value="2" selected>2 Adults</option>
            <option value="3">3 Adults</option>
            <option value="4">4 Adults</option>
          </select>
        </div>
        <div class="lg:col-span-2">
          <label class="block text-[11px] font-semibold text-slate-600 uppercase mb-1">Room Category</label>
          <select id="widget-room" class="w-full h-11 px-3 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm">
            <option value="deluxe-heritage">Deluxe Room (₹8,500)</option>
            <option value="royal-suite">Royal Suite (₹14,900)</option>
            <option value="courtyard-suite">Courtyard Suite (₹21,500)</option>
          </select>
        </div>
        <div class="lg:col-span-2">
          <button type="submit" class="w-full h-11 rounded-lg bg-gold hover:bg-gold-dark text-royal font-semibold text-xs sm:text-sm shadow">
            Check Availability
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- ROOMS & SUITES SECTION -->
  <section id="rooms" class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="text-center max-w-3xl mx-auto mb-14 space-y-2">
      <span class="text-xs font-semibold tracking-widest text-gold-dark uppercase">Accommodations</span>
      <h2 class="font-serif text-3xl sm:text-4xl font-bold text-royal">Rooms &amp; Royal Suites</h2>
      <p class="text-slate-600 text-sm">Save 10% when you book direct on our official website.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Card 1: Deluxe Heritage Room -->
      <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md flex flex-col justify-between">
        <div>
          <div class="relative aspect-[4/3] bg-slate-100">
            <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80" alt="Deluxe Heritage Room" class="w-full h-full object-cover" />
            <div class="absolute top-3 left-3 bg-royal/90 text-gold-light text-[11px] font-semibold px-2.5 py-1 rounded border border-gold/40">
              Direct Save ₹1,000/nt
            </div>
          </div>
          <div class="p-6 space-y-3">
            <div class="text-xs text-slate-500">380 sq.ft · Carved King Bed · Up to 2 Guests</div>
            <h3 class="font-serif text-2xl font-bold text-royal">Deluxe Heritage Room</h3>
            <p class="text-xs text-slate-600">Handcrafted teakwood four-poster bed, traditional hand-block indigo linens, and stone arch niches.</p>
            <div class="text-xs text-slate-600 space-y-1 pt-2 border-t border-slate-100">
              <p>✓ Free Royal Breakfast Included</p>
              <p>✓ High-Speed Wi-Fi &amp; Climate AC</p>
              <p>✓ Forest Essentials Luxury Toiletries</p>
            </div>
          </div>
        </div>
        <div class="p-6 pt-0">
          <div class="flex items-baseline justify-between mb-3">
            <div>
              <span class="font-serif text-2xl font-bold text-royal">₹8,500</span>
              <span class="text-xs text-slate-500">/ night</span>
            </div>
            <div class="text-right text-[11px] text-slate-400">
              OTA: <span class="line-through">₹9,500</span>
            </div>
          </div>
          <button onclick="openBookingModal('deluxe-heritage')" class="w-full py-3 rounded-lg bg-royal hover:bg-slate-800 text-gold-light font-semibold text-xs sm:text-sm transition-colors">
            Book Now (10% Off)
          </button>
        </div>
      </div>

      <!-- Card 2: Royal Suite -->
      <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md flex flex-col justify-between">
        <div>
          <div class="relative aspect-[4/3] bg-slate-100">
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" alt="Royal Suite" class="w-full h-full object-cover" />
            <div class="absolute top-3 left-3 bg-royal/90 text-gold-light text-[11px] font-semibold px-2.5 py-1 rounded border border-gold/40">
              Direct Save ₹1,900/nt
            </div>
          </div>
          <div class="p-6 space-y-3">
            <div class="text-xs text-slate-500">620 sq.ft · Royal Maharani King Bed · Up to 3 Guests</div>
            <h3 class="font-serif text-2xl font-bold text-royal">The Royal Suite</h3>
            <p class="text-xs text-slate-600">Gold-leaf scalloped arches, hand-painted floral frescoes, private living salon, and a clawfoot soaking bathtub.</p>
            <div class="text-xs text-slate-600 space-y-1 pt-2 border-t border-slate-100">
              <p>✓ All Deluxe Amenities Included</p>
              <p>✓ Clawfoot Soaking Bathtub</p>
              <p>✓ 24/7 Dedicated Palace Butler</p>
            </div>
          </div>
        </div>
        <div class="p-6 pt-0">
          <div class="flex items-baseline justify-between mb-3">
            <div>
              <span class="font-serif text-2xl font-bold text-royal">₹14,900</span>
              <span class="text-xs text-slate-500">/ night</span>
            </div>
            <div class="text-right text-[11px] text-slate-400">
              OTA: <span class="line-through">₹16,800</span>
            </div>
          </div>
          <button onclick="openBookingModal('royal-suite')" class="w-full py-3 rounded-lg bg-royal hover:bg-slate-800 text-gold-light font-semibold text-xs sm:text-sm transition-colors">
            Book Now (10% Off)
          </button>
        </div>
      </div>

      <!-- Card 3: Private Courtyard Suite -->
      <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md flex flex-col justify-between">
        <div>
          <div class="relative aspect-[4/3] bg-slate-100">
            <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80" alt="Private Courtyard Suite" class="w-full h-full object-cover" />
            <div class="absolute top-3 left-3 bg-royal/90 text-gold-light text-[11px] font-semibold px-2.5 py-1 rounded border border-gold/40">
              Direct Save ₹2,700/nt
            </div>
          </div>
          <div class="p-6 space-y-3">
            <div class="text-xs text-slate-500">850 sq.ft · Emperor Bed + Daybed · Up to 4 Guests</div>
            <h3 class="font-serif text-2xl font-bold text-royal">Private Courtyard Suite</h3>
            <p class="text-xs text-slate-600">Private walled Mughal courtyard with carved marble lotus fountain, shaded daybed canopy, and alfresco dining.</p>
            <div class="text-xs text-slate-600 space-y-1 pt-2 border-t border-slate-100">
              <p>✓ Private Lotus Fountain &amp; Sun Patio</p>
              <p>✓ Complimentary Ayurvedic Couple Massage</p>
              <p>✓ Express In-Room Check-In &amp; Concierge</p>
            </div>
          </div>
        </div>
        <div class="p-6 pt-0">
          <div class="flex items-baseline justify-between mb-3">
            <div>
              <span class="font-serif text-2xl font-bold text-royal">₹21,500</span>
              <span class="text-xs text-slate-500">/ night</span>
            </div>
            <div class="text-right text-[11px] text-slate-400">
              OTA: <span class="line-through">₹24,200</span>
            </div>
          </div>
          <button onclick="openBookingModal('courtyard-suite')" class="w-full py-3 rounded-lg bg-royal hover:bg-slate-800 text-gold-light font-semibold text-xs sm:text-sm transition-colors">
            Book Now (10% Off)
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY BOOK DIRECT TRUST SECTION -->
  <section id="why-direct" class="py-20 bg-royal text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-2">
        <span class="text-xs font-semibold tracking-widest text-gold uppercase">Direct Reservation Privileges</span>
        <h2 class="font-serif text-3xl sm:text-4xl font-bold text-white">Why Book Direct?</h2>
        <p class="text-slate-300 text-sm">When you reserve directly, we pass OTA commissions directly back to you.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-royal-card p-6 rounded-2xl border border-gold/20 space-y-3">
          <div class="text-2xl text-gold">🛡️</div>
          <h3 class="font-serif text-xl font-bold text-white">Best Rate Guaranteed</h3>
          <p class="text-xs text-gold font-semibold">10% Instant Discount</p>
          <p class="text-xs text-slate-300 leading-relaxed">No intermediary markups or hidden booking charges. You are guaranteed the lowest rate anywhere on the web.</p>
        </div>

        <div class="bg-royal-card p-6 rounded-2xl border border-gold/20 space-y-3">
          <div class="text-2xl text-gold">🚗</div>
          <h3 class="font-serif text-xl font-bold text-white">Free Luxury Airport Pickup</h3>
          <p class="text-xs text-gold font-semibold">Private Chauffeur Sedan</p>
          <p class="text-xs text-slate-300 leading-relaxed">Direct guests staying 2+ nights receive complimentary private pickup from Jaipur Airport or Railway Station.</p>
        </div>

        <div class="bg-royal-card p-6 rounded-2xl border border-gold/20 space-y-3">
          <div class="text-2xl text-gold">⏱️</div>
          <h3 class="font-serif text-xl font-bold text-white">Early Check-In Priority</h3>
          <p class="text-xs text-gold font-semibold">Flexible Timings</p>
          <p class="text-xs text-slate-300 leading-relaxed">Enjoy priority early arrival and late departure, plus a traditional welcome drink of chilled kesar badam milk.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- AMENITIES SECTION -->
  <section id="amenities" class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="text-center max-w-3xl mx-auto mb-14 space-y-2">
      <span class="text-xs font-semibold tracking-widest text-gold-dark uppercase">Palace Living</span>
      <h2 class="font-serif text-3xl sm:text-4xl font-bold text-royal">Boutique Amenities &amp; Experiences</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="p-6 bg-white rounded-2xl border border-slate-200">
        <h3 class="font-serif text-xl font-bold text-royal">The Turquoise Courtyard Pool</h3>
        <p class="text-xs text-slate-600 mt-2">A serene marble pool surrounded by frangipani blossoms and shaded colonnades.</p>
      </div>
      <div class="p-6 bg-white rounded-2xl border border-slate-200">
        <h3 class="font-serif text-xl font-bold text-royal">Shahi Rasoi Rooftop Dining</h3>
        <p class="text-xs text-slate-600 mt-2">Authentic royal Rajasthani feasts with views of the illuminated Nahargarh Fort.</p>
      </div>
      <div class="p-6 bg-white rounded-2xl border border-slate-200">
        <h3 class="font-serif text-xl font-bold text-royal">Siddha Ayurvedic Wellness Spa</h3>
        <p class="text-xs text-slate-600 mt-2">Warm herbal oil massages and sandalwood body scrubs administered by master therapists.</p>
      </div>
      <div class="p-6 bg-white rounded-2xl border border-slate-200">
        <h3 class="font-serif text-xl font-bold text-royal">Evening Live Sitar &amp; Folk Dance</h3>
        <p class="text-xs text-slate-600 mt-2">Soulful live melodies under the starlit palace courtyard every evening at dusk.</p>
      </div>
    </div>
  </section>

  <!-- GUEST REVIEWS -->
  <section id="reviews" class="py-20 bg-slate-50 border-t border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-3xl mx-auto mb-14 space-y-2">
        <span class="text-xs font-semibold tracking-widest text-gold-dark uppercase">Guest Chronicle</span>
        <h2 class="font-serif text-3xl sm:text-4xl font-bold text-royal">Verified Reviews</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
          <div class="text-gold">★★★★★</div>
          <h4 class="font-serif text-lg font-bold text-royal">"Far surpassed five-star chains"</h4>
          <p class="text-xs text-slate-600 italic">"Booking direct saved us ₹4,500 and the airport pickup was waiting right on time. Pure heritage bliss."</p>
          <p class="text-xs text-slate-400">— Vikram S., Mumbai</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
          <div class="text-gold">★★★★★</div>
          <h4 class="font-serif text-lg font-bold text-royal">"Magical haveli in Jaipur"</h4>
          <p class="text-xs text-slate-600 italic">"The private courtyard suite is a dream. The direct booking team organized our entire palace itinerary."</p>
          <p class="text-xs text-slate-400">— Evelyn M., London</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
          <div class="text-gold">★★★★★</div>
          <h4 class="font-serif text-lg font-bold text-royal">"Genuine best price guarantee"</h4>
          <p class="text-xs text-slate-600 italic">"Checked on Booking.com before paying, direct price was 10% lower and included breakfast."</p>
          <p class="text-xs text-slate-400">— Arjun M., Bengaluru</p>
        </div>
      </div>
    </div>
  </section>

  <!-- LOCATION & FOOTER SECTION -->
  <section id="location" class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div class="lg:col-span-5 bg-royal text-white p-6 sm:p-8 rounded-2xl space-y-4">
        <span class="text-xs text-gold uppercase tracking-wider font-semibold">Direct Desk</span>
        <h3 class="font-serif text-2xl font-bold text-gold-light">Rawla Haveli Jaipur</h3>
        <p class="text-xs text-slate-300">14 Rajputana Marg, Civil Lines, Jaipur 302006, Rajasthan, India</p>
        
        <div class="space-y-2 text-xs pt-2">
          <p>📞 Phone: +91 141 289 4400 / +91 141 289 4401</p>
          <p>💬 WhatsApp: +91 98290 14400 (Direct 24/7)</p>
          <p>✉️ Email: reservations@rawlahavelijaipur.com</p>
        </div>

        <div class="pt-4 border-t border-slate-700 text-xs text-slate-400 space-y-1">
          <p>• City Palace &amp; Hawa Mahal: 12 mins drive</p>
          <p>• Jaipur International Airport: 25 mins drive</p>
          <p>• Amber Fort: 28 mins drive</p>
        </div>
      </div>

      <div class="lg:col-span-7 bg-slate-200 rounded-2xl overflow-hidden min-h-[350px]">
        <iframe title="Map" width="100%" height="100%" class="w-full h-full min-h-[350px] border-0" loading="lazy" src="https://maps.google.com/maps?q=Civil%20Lines,%20Jaipur,%20Rajasthan&t=&z=14&ie=UTF8&iwloc=&output=embed"></iframe>
      </div>
    </div>
  </section>

  <footer class="bg-royal-dark text-slate-400 text-xs py-8 border-t border-slate-800 text-center">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-serif text-base text-gold-light">RAWLA HAVELI HERITAGE HOTEL · JAIPUR</p>
      <p>© 2026 Rawla Haveli Jaipur. All rights reserved. Direct Reservation Guaranteed.</p>
    </div>
  </footer>

  <!-- RAZORPAY / UPI DIRECT BOOKING MODAL -->
  <div id="booking-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-cream w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-gold/40">
      <!-- Modal Header -->
      <div class="bg-royal text-white p-4 flex items-center justify-between border-b border-gold/40">
        <div>
          <p class="font-serif text-lg text-gold-light">Rawla Haveli Direct Booking</p>
          <p class="text-xs text-slate-300">10% Direct Discount Applied · Instant Razorpay Simulation</p>
        </div>
        <button onclick="closeBookingModal()" class="text-slate-400 hover:text-white text-lg">✕</button>
      </div>

      <!-- Step 1: Booking Form -->
      <div id="modal-step-details" class="p-6 space-y-4 text-xs">
        <div class="bg-royal/5 p-3 rounded-xl border border-gold/30 space-y-1">
          <div class="flex justify-between font-semibold text-royal">
            <span id="summary-room-title">Deluxe Heritage Room</span>
            <span id="summary-room-price">₹8,500/nt</span>
          </div>
          <div class="flex justify-between text-emerald-800">
            <span>Direct 10% Discount Saved:</span>
            <span id="summary-savings">₹1,000 / nt</span>
          </div>
          <div class="flex justify-between text-slate-500 pt-1 border-t border-slate-200">
            <span>Total Payable with 12% GST:</span>
            <span id="summary-total" class="font-bold text-royal text-sm">₹9,520</span>
          </div>
        </div>

        <form onsubmit="handleProceedToPayment(event)" class="space-y-3">
          <div>
            <label class="block font-medium text-slate-700 mb-1">Guest Full Name *</label>
            <input type="text" id="guest-name" required value="Rohan Sharma" class="w-full px-3 py-2 rounded-lg border border-slate-300" />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-medium text-slate-700 mb-1">WhatsApp Mobile *</label>
              <input type="tel" id="guest-phone" required value="+91 98765 43210" class="w-full px-3 py-2 rounded-lg border border-slate-300" />
            </div>
            <div>
              <label class="block font-medium text-slate-700 mb-1">Email *</label>
              <input type="email" id="guest-email" required value="rohan@example.com" class="w-full px-3 py-2 rounded-lg border border-slate-300" />
            </div>
          </div>
          <button type="submit" class="w-full py-3 bg-gold hover:bg-gold-dark text-royal font-semibold rounded-lg text-sm mt-2">
            Proceed to Razorpay Direct Checkout
          </button>
        </form>
      </div>

      <!-- Step 2: Payment Gateway Simulation -->
      <div id="modal-step-payment" class="p-6 space-y-4 text-xs hidden">
        <div class="bg-royal text-white p-3 rounded-xl flex items-center justify-between">
          <span class="bg-blue-950 text-blue-400 font-bold px-2 py-0.5 rounded">RAZORPAY SECURE</span>
          <span id="payment-amount-display" class="font-bold text-gold-light text-base">₹9,520</span>
        </div>
        <p class="font-medium text-slate-700">Select Instant UPI Method:</p>
        <div class="grid grid-cols-3 gap-2">
          <button type="button" class="p-2 border rounded-lg text-center font-bold text-slate-800 bg-blue-50">Google Pay</button>
          <button type="button" class="p-2 border rounded-lg text-center font-bold text-[#5f259f] bg-purple-50">PhonePe</button>
          <button type="button" class="p-2 border rounded-lg text-center font-bold text-[#00b9f5] bg-sky-50">Paytm UPI</button>
        </div>
        <div>
          <label class="block text-slate-600 mb-1">Or UPI ID:</label>
          <input type="text" value="rohansharma@okhdfcbank" class="w-full px-3 py-2 border rounded-lg" />
        </div>
        <button onclick="simulateSuccessfulPayment()" id="pay-btn" class="w-full py-3 bg-royal text-white font-semibold rounded-lg text-sm">
          Simulate Payment Authorization
        </button>
      </div>

      <!-- Step 3: Confirmed Voucher -->
      <div id="modal-step-confirmed" class="p-6 text-center space-y-4 text-xs hidden">
        <div class="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto text-xl font-bold">✓</div>
        <h3 class="font-serif text-2xl font-bold text-royal">Reservation Confirmed!</h3>
        <p class="text-slate-600">Booking Ref: <strong id="confirmed-booking-id">RAWLA-JP-2026</strong></p>
        <div class="bg-white p-4 rounded-xl border border-slate-200 text-left space-y-1">
          <p>✓ 10% Direct Discount Applied</p>
          <p>✓ Complimentary Airport Chauffeur Dispatch Active</p>
          <p>✓ Free Royal Breakfast Included</p>
        </div>
        <button onclick="closeBookingModal()" class="w-full py-2.5 bg-gold text-royal font-semibold rounded-lg">
          Done
        </button>
      </div>
    </div>
  </div>

  <!-- NATIVE JAVASCRIPT LOGIC -->
  <script>
    const ROOM_DATA = {
      'deluxe-heritage': { name: 'Deluxe Heritage Room', rate: 8500, ota: 9500 },
      'royal-suite': { name: 'The Royal Suite', rate: 14900, ota: 16800 },
      'courtyard-suite': { name: 'Private Courtyard Suite', rate: 21500, ota: 24200 }
    };

    let activeRoomKey = 'deluxe-heritage';

    // Set default dates
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date(tomorrow);
    dayAfter.setDate(dayAfter.getDate() + 2);

    document.getElementById('widget-checkin').value = tomorrow.toISOString().split('T')[0];
    document.getElementById('widget-checkout').value = dayAfter.toISOString().split('T')[0];

    function openBookingModal(roomKey) {
      if (roomKey && ROOM_DATA[roomKey]) activeRoomKey = roomKey;
      const room = ROOM_DATA[activeRoomKey];
      const savings = room.ota - room.rate;
      const totalWithGst = Math.round(room.rate * 1.12);

      document.getElementById('summary-room-title').innerText = room.name;
      document.getElementById('summary-room-price').innerText = '₹' + room.rate.toLocaleString('en-IN') + '/nt';
      document.getElementById('summary-savings').innerText = '₹' + savings.toLocaleString('en-IN') + ' / nt';
      document.getElementById('summary-total').innerText = '₹' + totalWithGst.toLocaleString('en-IN');
      document.getElementById('payment-amount-display').innerText = '₹' + totalWithGst.toLocaleString('en-IN');

      document.getElementById('modal-step-details').classList.remove('hidden');
      document.getElementById('modal-step-payment').classList.add('hidden');
      document.getElementById('modal-step-confirmed').classList.add('hidden');
      document.getElementById('booking-modal').classList.remove('hidden');
    }

    function closeBookingModal() {
      document.getElementById('booking-modal').classList.add('hidden');
    }

    function handleWidgetSubmit(e) {
      e.preventDefault();
      const selected = document.getElementById('widget-room').value;
      openBookingModal(selected);
    }

    function handleProceedToPayment(e) {
      e.preventDefault();
      document.getElementById('modal-step-details').classList.add('hidden');
      document.getElementById('modal-step-payment').classList.remove('hidden');
    }

    function simulateSuccessfulPayment() {
      const btn = document.getElementById('pay-btn');
      btn.innerText = 'Authorizing with UPI Bank...';
      btn.disabled = true;

      setTimeout(() => {
        btn.disabled = false;
        btn.innerText = 'Simulate Payment Authorization';
        const randomId = 'RAWLA-JP-' + Math.floor(1000 + Math.random() * 9000);
        document.getElementById('confirmed-booking-id').innerText = randomId;
        document.getElementById('modal-step-payment').classList.add('hidden');
        document.getElementById('modal-step-confirmed').classList.remove('hidden');
      }, 1500);
    }
  </script>
</body>
</html>`;
