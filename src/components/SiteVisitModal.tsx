import React, { useState } from 'react';
import { LUMCAS_CONTACT, PropertyItem, createWhatsAppLink } from '../data/lumcasData';
import { X, Calendar, MessageSquare, Phone } from 'lucide-react';

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProperty?: PropertyItem | null;
}

export const SiteVisitModal: React.FC<SiteVisitModalProps> = ({
  isOpen,
  onClose,
  selectedProperty,
}) => {
  const [preferredDate, setPreferredDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [plotPreference, setPlotPreference] = useState(
    selectedProperty ? selectedProperty.title : 'LUMCAS City — Iguelegbon Estate'
  );
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello LUMCAS, my name is ${clientName || 'an interested investor'}. I would like to schedule a physical site inspection for ${plotPreference}.${
      preferredDate ? ` Preferred Date: ${preferredDate}.` : ''
    }${notes ? ` Notes: ${notes}` : ''}`;

    window.open(createWhatsAppLink(message), '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="site-visit-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-8 shadow-2xl text-neutral-900">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1">
          <p className="text-xs uppercase tracking-[0.25em] text-[#9333ea] font-mono font-bold">
            Benin City Site Inspection
          </p>
          <h3 id="site-visit-title" className="text-2xl font-serif text-neutral-900 font-light">
            Schedule a Guided Property Visit
          </h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Free guided tours to LUMCAS City and active development sites in Benin City with verified LUMCAS advisors.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-semibold">
              Your Full Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Osasere Idahosa"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#9333ea]/30 focus:border-[#9333ea]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-semibold">
              Preferred Development Axis
            </label>
            <select
              value={plotPreference}
              onChange={(e) => setPlotPreference(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#9333ea]/30 focus:border-[#9333ea]"
            >
              <option value="LUMCAS City — Iguelegbon Estate">LUMCAS City — Iguelegbon (Upper Ekenwan / Airport Link)</option>
              <option value="LUMCAS City — Evbouro Expansion">LUMCAS City — Evbouro Expansion (Off Ekenwan)</option>
              <option value="Commercial Land & Sand Logistics">Commercial Land & Building Sand Supply</option>
              <option value="General Property Consultation">General Property Consultation at Dawson Rd Office</option>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-semibold">
              Preferred Inspection Date
            </label>
            <input
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#9333ea]/30 focus:border-[#9333ea]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-1.5 font-semibold">
              Additional Notes / Inquiries (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Inquiring from diaspora, need airport pickup / weekend slot"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#9333ea]/30 focus:border-[#9333ea] resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-[#9333ea] hover:bg-[#7e22ce] text-white text-xs uppercase tracking-widest font-bold rounded-full flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Confirm & Send to WhatsApp</span>
            </button>

            <a
              href={`tel:${LUMCAS_CONTACT.phonePrimary}`}
              className="w-full py-3 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs uppercase tracking-wider font-semibold rounded-full text-center flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#9333ea]" />
              <span>Or Call Direct: {LUMCAS_CONTACT.phoneFormatted}</span>
            </a>
          </div>
        </form>

        {/* Office details */}
        <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
          <span>17A Dawson Rd, Benin City</span>
          <span>Mon – Sat: 8am – 6pm</span>
        </div>
      </div>
    </div>
  );
};
