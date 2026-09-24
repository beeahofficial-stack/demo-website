export interface RoomType {
  id: string;
  name: string;
  tagline: string;
  pricePerNight: number;
  otaPrice: number;
  size: string;
  maxGuests: number;
  bedType: string;
  view: string;
  image: string;
  description: string;
  amenities: string[];
  features: string[];
}

export const ROOMS: RoomType[] = [
  {
    id: 'deluxe-heritage',
    name: 'Deluxe Heritage Room',
    tagline: 'Timeless Rajput elegance with handcrafted teakwood and arched niches',
    pricePerNight: 8500,
    otaPrice: 9500,
    size: '380 sq.ft',
    maxGuests: 2,
    bedType: 'Carved King Bed',
    view: 'Inner Courtyard Garden',
    image: '/src/assets/images/deluxe_heritage_room_1790183996712.jpg',
    description: 'Immerse yourself in authentic Rajasthani craftsmanship featuring hand-block printed indigo linens, hand-carved jali stone lattice, brass bedside sconces, and an ensuite Italian marble bath.',
    amenities: [
      'Complimentary Royal Breakfast',
      'High-Speed Wi-Fi',
      'Air Conditioning & Climate Control',
      'Artisan Forest Essentials Toiletries',
      'Ensuite Rain Shower',
      'Smart LED TV & Heritage Tea Bar'
    ],
    features: ['Inner Courtyard View', 'Teakwood Four-Poster Bed', 'Hand-Painted Fresco Accents']
  },
  {
    id: 'royal-suite',
    name: 'The Royal Suite',
    tagline: 'Aristocratic grandeur with scalloped arches and antique crystal chandeliers',
    pricePerNight: 14900,
    otaPrice: 16800,
    size: '620 sq.ft',
    maxGuests: 3,
    bedType: 'Royal Maharani King Bed',
    view: 'Palace Pool & Bougainvillea Gardens',
    image: '/src/assets/images/royal_suite_jaipur_1790184012179.jpg',
    description: 'A lavish sanctuary once reserved for visiting dignitaries, showcasing gold-leaf scalloped arches, hand-painted wall frescoes, an expansive royal sitting salon, and a heritage clawfoot soaking tub.',
    amenities: [
      'Complimentary Royal Breakfast Buffet',
      'Chauffeured Airport / Station Transfer',
      'Clawfoot Soaking Bathtub',
      'Dedicated 24/7 Royal Valet / Butler',
      'Complimentary Evening High Tea',
      'Bespoke Mini Bar & Nespresso'
    ],
    features: ['Separate Salon & Bedroom', 'Palace Pool View', 'Heritage Soaking Tub']
  },
  {
    id: 'courtyard-suite',
    name: 'Private Courtyard Suite',
    tagline: 'Exclusive seclusion with a private marble fountain and sun-drenched patio',
    pricePerNight: 21500,
    otaPrice: 24200,
    size: '850 sq.ft',
    maxGuests: 4,
    bedType: 'Emperor King Bed + Daybed',
    view: 'Private Mughal Courtyard & Water Fountain',
    image: '/src/assets/images/private_courtyard_suite_1790184025805.jpg',
    description: 'The pinnacle of private luxury. High French glass doors lead directly to your secluded walled courtyard with a hand-carved lotus fountain, shaded daybed canopy, private alfresco dining, and bespoke concierge.',
    amenities: [
      'All Royal Suite Privileges Included',
      'Private Walled Mughal Courtyard',
      'Private Candlelit Dinner Setup',
      'Complimentary 60-min Couple Ayurvedic Massage',
      'Express In-Room Check-In',
      'Personalized Cultural Itinerary Guide'
    ],
    features: ['Private Lotus Fountain', 'Alfresco Sun Deck', 'Personal Butler Service']
  }
];

export const DIRECT_BOOKING_PERKS = [
  {
    id: 'best-rate',
    title: 'Guaranteed Best Rate',
    highlight: 'Instant 10% Savings',
    description: 'Skip high OTA commissions. You always get the lowest verified price anywhere online, with no hidden reservation fees or surcharges.',
    badge: '10% OFF'
  },
  {
    id: 'free-transfer',
    title: 'Complimentary Airport Transfer',
    highlight: 'Private Luxury Sedan',
    description: 'Arrive stress-free. Direct guests staying 2+ nights receive a private chauffeur pickup from Jaipur International Airport (JAI) or Railway Station with chilled wet towels and bottled water.',
    badge: 'WORTH ₹1,800'
  },
  {
    id: 'early-checkin',
    title: 'Priority Early Check-in & Late Checkout',
    highlight: 'Subject to availability',
    description: 'Enjoy 2 hours early arrival or late departure priority, plus a complimentary traditional kesar badam milk welcome drink upon arrival.',
    badge: 'PRIORITY PASS'
  }
];

export const HOTEL_AMENITIES = [
  {
    title: 'The Turquoise Courtyard Pool',
    category: 'Relaxation & Leisure',
    description: 'A serene marble-edged pool secluded amidst flowering frangipani trees and sandstone colonnades, heated during winter evenings.',
  },
  {
    title: 'Shahi Rasoi Rooftop Dining',
    category: 'Gastronomy',
    description: 'Authentic royal Rajasthani delicacies and North Indian slow-cooked feasts with panoramic views of the illuminated Nahargarh Fort.',
  },
  {
    title: 'Siddha Ayurvedic Wellness Spa',
    category: 'Holistic Spa',
    description: 'Ancient healing therapies, abhyanga warm herbal oil massages, and custom sandalwood scrubs administered by certified therapists.',
  },
  {
    title: 'Diwan-e-Khaas Evening Heritage Recitals',
    category: 'Cultural Immersion',
    description: 'Soulful live sitar melodies, classical Rajasthani folk dances, and heritage storytelling under the starlit courtyard sky every twilight.',
  }
];

export const GUEST_REVIEWS = [
  {
    author: 'Vikram & Radhika Singhal',
    location: 'Mumbai, India',
    stayedIn: 'Royal Suite',
    rating: 5,
    title: 'Far surpassed five-star chain hotels in Jaipur',
    date: 'February 2026',
    comment: 'Booking directly on their website was seamless and saved us nearly ₹5,000 on our 3-night stay. The private airport pickup was punctual and courteous. The haveli architecture is pure poetry.'
  },
  {
    author: 'Evelyn Montgomery',
    location: 'London, United Kingdom',
    stayedIn: 'Private Courtyard Suite',
    rating: 5,
    title: 'Magical tranquility in the heart of the Pink City',
    date: 'January 2026',
    comment: 'The private courtyard suite was an oasis after exploring the bustling bazaars. The direct booking team arranged our sunrise hot air balloon over Amber Fort flawlessly. Will return every winter!'
  },
  {
    author: 'Arjun Mehra',
    location: 'Bengaluru, India',
    stayedIn: 'Deluxe Heritage Room',
    rating: 5,
    title: 'Best rate guarantee is genuine — great direct perks',
    date: 'March 2026',
    comment: 'Checked against Booking.com right at reception and the direct price was genuinely 10% lower plus included breakfast and late checkout. The staff treats you like family royalty.'
  }
];

export const FAQS = [
  {
    q: 'How does the 10% Direct Booking Discount work?',
    a: 'When you book directly through our official website or phone reservations, we pass the OTA intermediary commission directly back to you as an automatic 10% discount off the best available public rate.'
  },
  {
    q: 'What is your cancellation and modification policy?',
    a: 'Direct bookings enjoy our Flexible Royal Policy: free cancellation or date modification up to 48 hours prior to check-in with a full refund to your original payment method.'
  },
  {
    q: 'How do I claim my complimentary airport pickup?',
    a: 'Once your direct reservation is confirmed, our concierge team will WhatsApp and email you to collect your flight or train details and dispatch our private chauffeur.'
  },
  {
    q: 'What are the check-in and check-out timings?',
    a: 'Standard check-in is 2:00 PM and check-out is 11:00 AM. Direct bookings receive top priority for early check-in (from 11:00 AM) and late check-out (until 1:30 PM) upon availability.'
  }
];
