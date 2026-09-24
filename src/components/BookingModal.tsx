import React, { useState } from 'react';
import { 
  X, Check, ShieldCheck, CreditCard, Smartphone, Building, 
  Sparkles, Calendar, Users, ArrowRight, Download, CheckCircle2,
  Lock, Phone, Mail, User, Clock, Plane
} from 'lucide-react';
import { RoomType, ROOMS } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
  checkInDate: string;
  checkOutDate: string;
  guestsCount: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomId = 'deluxe-heritage',
  checkInDate,
  checkOutDate,
  guestsCount
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(initialRoomId);
  const [step, setStep] = useState<'details' | 'payment' | 'confirmed'>('details');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  
  // Guest details state
  const [guestName, setGuestName] = useState('Rohan Sharma');
  const [guestEmail, setGuestEmail] = useState('rohan.sharma@example.com');
  const [guestPhone, setGuestPhone] = useState('+91 98765 43210');
  const [upiId, setUpiId] = useState('rohansharma@okhdfcbank');
  const [selectedUpiApp, setSelectedUpiApp] = useState<'gpay' | 'phonepe' | 'paytm' | 'custom'>('gpay');
  const [flightDetails, setFlightDetails] = useState('AI-492 arriving 3:15 PM');
  const [specialRequests, setSpecialRequests] = useState('Quiet room on upper floor if possible, early check-in requested');
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingRef, setBookingRef] = useState('RAWLA-JP-7824');

  if (!isOpen) return null;

  const currentRoom = ROOMS.find(r => r.id === selectedRoomId) || ROOMS[0];

  // Calculate nights
  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);
  const diffTime = Math.max(1, Math.abs(checkOut.getTime() - checkIn.getTime()));
  const totalNights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24))) || 2;

  const directBasePrice = currentRoom.pricePerNight * totalNights;
  const otaEquivalentPrice = currentRoom.otaPrice * totalNights;
  const directSavings = otaEquivalentPrice - directBasePrice;
  const gstTax = Math.round(directBasePrice * 0.12);
  const finalTotal = directBasePrice + gstTax;

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestEmail.trim() || !guestPhone.trim()) {
      return;
    }
    setStep('payment');
  };

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const randomCode = 'RAWLA-JP-' + Math.floor(1000 + Math.random() * 9000);
      setBookingRef(randomCode);
      setStep('confirmed');
    }, 1800);
  };

  const handleDownloadVoucher = () => {
    const voucherText = `
==============================================
RAWLA HAVELI HERITAGE HOTEL - JAIPUR
OFFICIAL DIRECT BOOKING CONFIRMATION VOUCHER
==============================================
Booking Reference: ${bookingRef}
Guest Name: ${guestName}
Contact: ${guestPhone} | ${guestEmail}
Room Category: ${currentRoom.name}
Check-in: ${checkInDate} (2:00 PM - Priority Early Pass)
Check-out: ${checkOutDate} (11:00 AM - Late Pass)
Nights: ${totalNights} | Guests: ${guestsCount}

Payment Status: PAID IN FULL (via Razorpay UPI/Secure)
Amount Paid: ₹${finalTotal.toLocaleString('en-IN')} (Incl. 12% GST)
Direct Booking Savings: ₹${directSavings.toLocaleString('en-IN')} Saved vs OTA

DIRECT BOOKING COMPLIMENTARY PERKS:
• 10% Guaranteed Lowest Rate
• Complimentary Airport / Station Chauffeur Transfer
• Welcome Kesar Badam Milk & Palace Tour
• Complimentary Royal Breakfast for all guests
• Flight Arrival Noted: ${flightDetails || 'Pending flight details'}

Hotel Address: 14 Rajputana Marg, Civil Lines, Jaipur 302006, Rajasthan
Concierge Direct: +91 141 289 4400 | WhatsApp: +91 98290 14400
==============================================
    `.trim();

    const element = document.createElement("a");
    const file = new Blob([voucherText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${bookingRef}-Voucher.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-xl shadow-2xl border border-[#D4AF37]/30 overflow-hidden my-6 transition-all"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="bg-[#0B192C] text-white px-5 py-4 flex items-center justify-between border-b border-[#D4AF37]/40">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="font-serif text-lg tracking-wide text-[#F4E8C1]">Rawla Haveli Direct Reservation</p>
              <p className="text-xs text-slate-300">Guaranteed Best Rate · 10% Direct Booking Discount Applied</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {step === 'details' && (
            <div className="space-y-6">
              {/* Step indicator */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-xs">
                <span className="font-semibold text-[#0B192C] flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#0B192C] text-white inline-flex items-center justify-center text-[10px]">1</span>
                  Room & Guest Details
                </span>
                <span className="text-slate-400 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 inline-flex items-center justify-center text-[10px]">2</span>
                  Razorpay Direct Checkout
                </span>
                <span className="text-slate-400 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 inline-flex items-center justify-center text-[10px]">3</span>
                  Instant Voucher
                </span>
              </div>

              {/* Room Selection Tabs */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Select Room Category</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {ROOMS.map(room => (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`text-left p-3 rounded-lg border transition-all text-xs ${
                        selectedRoomId === room.id 
                          ? 'border-[#D4AF37] bg-[#F7EFCF]/20 ring-1 ring-[#D4AF37]' 
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <p className="font-medium text-slate-900 truncate">{room.name}</p>
                      <p className="text-[#0B192C] font-semibold mt-1">₹{room.pricePerNight.toLocaleString('en-IN')}<span className="text-[10px] text-slate-500 font-normal">/nt</span></p>
                      <p className="text-[10px] text-emerald-700 font-medium">Save ₹{(room.otaPrice - room.pricePerNight).toLocaleString('en-IN')}/nt</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-[#0B192C]/5 rounded-xl p-4 border border-[#D4AF37]/30 space-y-3">
                <div className="flex flex-wrap items-center justify-between text-xs gap-2">
                  <span className="text-slate-600 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {checkInDate} to {checkOutDate} ({totalNights} {totalNights === 1 ? 'Night' : 'Nights'})
                  </span>
                  <span className="text-slate-600 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {guestsCount} {guestsCount === 1 ? 'Guest' : 'Guests'}
                  </span>
                </div>

                <div className="border-t border-slate-200 pt-3 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Direct Heritage Rate ({totalNights} × ₹{currentRoom.pricePerNight.toLocaleString('en-IN')})</span>
                    <span className="font-medium">₹{directBasePrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                    <span>OTA Price Comparison (Booking.com / Agoda)</span>
                    <span className="line-through text-slate-400">₹{otaEquivalentPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-xs text-emerald-800 font-medium px-2">
                    <span>Your Direct Booking Discount (10% Saved)</span>
                    <span>- ₹{directSavings.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Goods & Services Tax (GST 12%)</span>
                    <span>₹{gstTax.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold text-[#0B192C] pt-1 border-t border-slate-200">
                    <span>Total Direct Payable Amount</span>
                    <span className="text-base text-[#0B192C]">₹{finalTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Free perks included banner */}
                <div className="bg-[#D4AF37]/10 p-2.5 rounded-lg border border-[#D4AF37]/30 flex items-center gap-2 text-xs text-[#0B192C]">
                  <Plane className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span><strong>Included Free:</strong> Private chauffeur airport pickup + daily royal Rajasthani breakfast!</span>
                </div>
              </div>

              {/* Guest Information Form */}
              <form onSubmit={handleProceedToPayment} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-slate-400" /> Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={guestName}
                      onChange={e => setGuestName(e.target.value)}
                      placeholder="e.g. Rohan Sharma"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-slate-400" /> Mobile Number (WhatsApp) *
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={guestPhone}
                      onChange={e => setGuestPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-slate-400" /> Email Address *
                    </label>
                    <input 
                      type="email" 
                      required
                      value={guestEmail}
                      onChange={e => setGuestEmail(e.target.value)}
                      placeholder="rohan@example.com"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center gap-1">
                      <Plane className="w-3.5 h-3.5 text-slate-400" /> Flight/Train Info for Free Pickup
                    </label>
                    <input 
                      type="text" 
                      value={flightDetails}
                      onChange={e => setFlightDetails(e.target.value)}
                      placeholder="e.g. AI-492 / Vande Bharat Exp"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Special Preferences / Dietary Requests</label>
                  <input 
                    type="text"
                    value={specialRequests}
                    onChange={e => setSpecialRequests(e.target.value)}
                    placeholder="e.g. Non-smoking, upper floor, Jain / vegan breakfast options"
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg bg-[#D4AF37] hover:bg-[#B59325] text-[#0B192C] font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Direct Payment (₹{finalTotal.toLocaleString('en-IN')})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2 flex items-center justify-center gap-1.5">
                    <Lock className="w-3 h-3 text-slate-400" /> Instant Bank-grade 256-bit Secure Razorpay Checkout
                  </p>
                </div>
              </form>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-6">
              {/* Payment simulation header */}
              <div className="bg-[#0B192C] text-white p-4 rounded-xl flex items-center justify-between border border-[#D4AF37]/30">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#0C2340] text-[#3399CC] px-2 py-0.5 rounded text-[11px] font-bold tracking-wider border border-[#3399CC]/40">
                      RAZORPAY SECURE
                    </span>
                    <span className="text-xs text-slate-300">Merchant: Rawla Haveli Jaipur</span>
                  </div>
                  <p className="text-xl font-bold font-serif text-[#F4E8C1] mt-1.5">₹{finalTotal.toLocaleString('en-IN')}</p>
                </div>
                <div className="text-right text-xs text-slate-300">
                  <p className="font-medium text-white">{guestName}</p>
                  <p>{guestPhone}</p>
                </div>
              </div>

              {/* Payment Methods Tabs */}
              <div>
                <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Select Payment Method</p>
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`py-2.5 px-3 rounded-lg border text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'upi'
                        ? 'border-[#3399CC] bg-[#3399CC]/10 text-[#0B192C] font-semibold ring-1 ring-[#3399CC]'
                        : 'border-slate-200 text-slate-600 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <Smartphone className="w-4 h-4 text-[#3399CC]" />
                    <span>UPI / QR</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 px-3 rounded-lg border text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[#3399CC] bg-[#3399CC]/10 text-[#0B192C] font-semibold ring-1 ring-[#3399CC]'
                        : 'border-slate-200 text-slate-600 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#3399CC]" />
                    <span>Cards</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`py-2.5 px-3 rounded-lg border text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'netbanking'
                        ? 'border-[#3399CC] bg-[#3399CC]/10 text-[#0B192C] font-semibold ring-1 ring-[#3399CC]'
                        : 'border-slate-200 text-slate-600 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <Building className="w-4 h-4 text-[#3399CC]" />
                    <span>Net Banking</span>
                  </button>
                </div>
              </div>

              {/* Method content */}
              {paymentMethod === 'upi' && (
                <div className="space-y-4 bg-white p-4 rounded-xl border border-slate-200">
                  <p className="text-xs font-medium text-slate-700">Choose Instant UPI App:</p>
                  <div className="grid grid-cols-3 gap-2">
                    <button 
                      type="button"
                      onClick={() => setSelectedUpiApp('gpay')}
                      className={`p-2.5 rounded-lg border text-center text-xs flex flex-col items-center justify-center gap-1 ${
                        selectedUpiApp === 'gpay' ? 'border-[#3399CC] bg-blue-50/50' : 'border-slate-200'
                      }`}
                    >
                      <span className="font-bold text-slate-800">Google Pay</span>
                      <span className="text-[10px] text-emerald-600">Fastest</span>
                    </button>
                    <button 
                      type="button"
                      onClick={() => setSelectedUpiApp('phonepe')}
                      className={`p-2.5 rounded-lg border text-center text-xs flex flex-col items-center justify-center gap-1 ${
                        selectedUpiApp === 'phonepe' ? 'border-[#3399CC] bg-blue-50/50' : 'border-slate-200'
                      }`}
                    >
                      <span className="font-bold text-[#5f259f]">PhonePe</span>
                      <span className="text-[10px] text-slate-500">Auto-approve</span>
                    </button>
                    <button 
                      type="button"
                      onClick={() => setSelectedUpiApp('paytm')}
                      className={`p-2.5 rounded-lg border text-center text-xs flex flex-col items-center justify-center gap-1 ${
                        selectedUpiApp === 'paytm' ? 'border-[#3399CC] bg-blue-50/50' : 'border-slate-200'
                      }`}
                    >
                      <span className="font-bold text-[#00b9f5]">Paytm UPI</span>
                      <span className="text-[10px] text-slate-500">Instant</span>
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Or enter UPI ID / VPA</label>
                    <input 
                      type="text"
                      value={upiId}
                      onChange={e => setUpiId(e.target.value)}
                      placeholder="e.g. yourname@okhdfcbank"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#3399CC]"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="space-y-3 bg-white p-4 rounded-xl border border-slate-200 text-xs">
                  <div>
                    <label className="block text-slate-600 mb-1">Card Number</label>
                    <input 
                      type="text" 
                      defaultValue="4242 •••• •••• 4242"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-600 mb-1">Expiry MM/YY</label>
                      <input 
                        type="text" 
                        defaultValue="08/28"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 mb-1">CVV</label>
                      <input 
                        type="password" 
                        defaultValue="894"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'netbanking' && (
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                  <p className="font-medium text-slate-700">Popular Indian Banks:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button type="button" className="p-2 border rounded text-left hover:bg-slate-50">HDFC Bank</button>
                    <button type="button" className="p-2 border rounded text-left hover:bg-slate-50">State Bank of India</button>
                    <button type="button" className="p-2 border rounded text-left hover:bg-slate-50">ICICI Bank</button>
                    <button type="button" className="p-2 border rounded text-left hover:bg-slate-50">Axis Bank</button>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg"
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={handleSimulatePayment}
                  className="flex-1 py-3 px-4 rounded-lg bg-[#0C2340] hover:bg-[#0B192C] text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 border border-[#3399CC]/30 disabled:opacity-70"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Simulating Secure Payment...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Authorize Payment of ₹{finalTotal.toLocaleString('en-IN')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {step === 'confirmed' && (
            <div className="text-center py-4 space-y-5">
              <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0B192C]">Royal Reservation Confirmed!</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Khamma Ghani, {guestName}. We are honored to welcome you to Rawla Haveli.
                </p>
                <div className="inline-block mt-3 bg-[#F7EFCF] px-3 py-1.5 rounded-lg border border-[#D4AF37] text-xs font-semibold text-[#0B192C]">
                  Booking Reference: <span className="font-mono text-sm">{bookingRef}</span>
                </div>
              </div>

              {/* Voucher Card preview */}
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-left text-xs space-y-2.5 shadow-sm">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Room</span>
                  <span className="font-semibold text-slate-900">{currentRoom.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Dates</span>
                  <span className="font-medium text-slate-900">{checkInDate} to {checkOutDate} ({totalNights} Nights)</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Guests</span>
                  <span className="font-medium text-slate-900">{guestsCount} Adults</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Total Paid (Razorpay UPI)</span>
                  <span className="font-bold text-emerald-700">₹{finalTotal.toLocaleString('en-IN')} (Saved ₹{directSavings.toLocaleString('en-IN')})</span>
                </div>
                <div className="flex justify-between text-emerald-800 bg-emerald-50 p-2 rounded">
                  <span>Airport Chauffeur Transfer</span>
                  <span className="font-medium">Confirmed for your arrival</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleDownloadVoucher}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#B59325] text-[#0B192C] font-semibold text-xs flex items-center justify-center gap-2 shadow"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Voucher (.txt)</span>
                </button>
                <a
                  href={`https://wa.me/919829014400?text=Hello%20Rawla%20Haveli,%20I%20have%20confirmed%20direct%20booking%20${bookingRef}%20for%20${guestName}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow"
                >
                  <Phone className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="text-xs text-slate-500 hover:text-slate-800 underline pt-2"
              >
                Close Window & Return to Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
