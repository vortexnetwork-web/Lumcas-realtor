import React from 'react';
import { LUMCAS_CONTACT, createWhatsAppLink, WHATSAPP_MESSAGES } from '../data/lumcasData';
import { MessageSquare, Phone, MapPin, ShieldCheck, Check, Clock } from 'lucide-react';

interface SectionApproachProps {
  onSpeakClick?: () => void;
}

export const SectionApproach: React.FC<SectionApproachProps> = ({ onSpeakClick }) => {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#fafaf9] border-t border-neutral-200/70 overflow-hidden">
      {/* Subtle background ambient warmth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Statement */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#9333ea] rounded-full" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#9333ea] font-bold">
                The LUMCAS Approach
              </p>
            </div>

            <h2
              className="font-serif text-4xl sm:text-5xl md:text-6xl text-neutral-900 font-light leading-[1.1] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Your Next Move Starts With the Right Conversation.
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl">
              Whether you are searching for a home, exploring property opportunities, or planning your next
              real-estate move, start with LUMCAS.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={createWhatsAppLink(WHATSAPP_MESSAGES.consultation)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#9333ea] hover:bg-[#7e22ce] text-white font-semibold text-xs sm:text-sm uppercase tracking-[0.16em] rounded-full transition-all shadow-[0_4px_20px_rgba(147,51,234,0.3)] hover:shadow-[0_6px_25px_rgba(147,51,234,0.45)] hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Speak With LUMCAS</span>
              </a>

              <a
                href={`tel:${LUMCAS_CONTACT.phonePrimary}`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 font-semibold text-xs sm:text-sm uppercase tracking-[0.16em] rounded-full transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#9333ea]" />
                <span>Call {LUMCAS_CONTACT.phonePrimary}</span>
              </a>
            </div>

            {/* Core Pillars */}
            <div className="pt-8 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-neutral-900 text-sm font-semibold">
                  <Check className="w-4 h-4 text-[#9333ea]" />
                  <span>Diaspora Investment Protection</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Seamless remote verification, video walkthroughs, and direct registered documentation for clients in the UK, US, Europe, and Canada.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-neutral-900 text-sm font-semibold">
                  <Check className="w-4 h-4 text-[#9333ea]" />
                  <span>Zero Dispute Guarantee</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Every parcel undergoes authentic family-community title clearance, avoiding traditional communal friction or unauthorized encroachment.
                </p>
              </div>
            </div>
          </div>

          {/* Location & Trust Card (Curved Rounded-3xl in Light Palette) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-neutral-200/90 p-8 sm:p-10 space-y-7 shadow-[0_10px_35px_rgba(0,0,0,0.05)]">
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9333ea] font-bold">
                Official Headquarters
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-neutral-900 font-light">
                Benin City Presence
              </h3>
            </div>

            <div className="space-y-5 text-sm text-neutral-700">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#9333ea] shrink-0 mt-0.5" />
                <div>
                  <p className="text-neutral-900 font-semibold text-sm">Physical Office</p>
                  <p className="text-neutral-600 text-xs mt-0.5 leading-relaxed">
                    {LUMCAS_CONTACT.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#9333ea] shrink-0 mt-0.5" />
                <div>
                  <p className="text-neutral-900 font-semibold text-sm">Direct Telephone Lines</p>
                  <p className="text-neutral-600 text-xs mt-0.5 font-mono">
                    {LUMCAS_CONTACT.phoneFormatted} · {LUMCAS_CONTACT.phoneSecondaryFormatted}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#9333ea] shrink-0 mt-0.5" />
                <div>
                  <p className="text-neutral-900 font-semibold text-sm">Consultation Hours</p>
                  <p className="text-neutral-600 text-xs mt-0.5">
                    {LUMCAS_CONTACT.hours}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-[#9333ea] shrink-0 mt-0.5" />
                <div>
                  <p className="text-neutral-900 font-semibold text-sm">RC Registered Enterprise</p>
                  <p className="text-neutral-600 text-xs mt-0.5">
                    LUMCAS Realtor and Property Limited (Edo State)
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-100">
              <a
                href={createWhatsAppLink(WHATSAPP_MESSAGES.inspection)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-purple-50 hover:bg-purple-100 text-[#9333ea] text-xs uppercase tracking-wider font-bold rounded-2xl transition-colors border border-purple-200"
              >
                <span>Book Private Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
