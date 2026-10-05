import React from 'react';
import { LUMCAS_CONTACT, createWhatsAppLink, WHATSAPP_MESSAGES } from '../data/lumcasData';
import { LumcasLogo } from './LumcasLogo';
import { MessageSquare, Phone, ArrowUpRight } from 'lucide-react';

export const SectionFinalCta: React.FC = () => {
  const quickActions = [
    {
      title: 'General Enquiry',
      desc: 'Learn about property acquisition & prices',
      msg: WHATSAPP_MESSAGES.general,
    },
    {
      title: 'Private Consultation',
      desc: 'Speak directly with a LUMCAS advisor',
      msg: WHATSAPP_MESSAGES.consultation,
    },
    {
      title: 'LUMCAS City Site Inspection',
      desc: 'Arrange an in-person physical visit in Benin City',
      msg: WHATSAPP_MESSAGES.inspection,
    },
  ];

  return (
    <section id="contact" className="relative py-32 md:py-40 bg-white border-t border-neutral-200/70 overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Brand Emblem in Purple */}
        <div className="flex justify-center mb-6">
          <LumcasLogo variant="purple" size="lg" showWordmark={false} />
        </div>

        {/* Large Headline in Brand Purple */}
        <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.08em] uppercase text-[#9333ea] font-bold mb-4 select-none">
          LUMCAS
        </h2>

        {/* Secondary Headline */}
        <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-neutral-900 font-light max-w-3xl mx-auto mb-4">
          Property. Possibility. Your Next Chapter.
        </p>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Begin your real-estate journey with LUMCAS Realtor & Properties Ltd.
        </p>

        {/* Primary CTA (Curved Rounded-Full) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-16">
          <a
            href={createWhatsAppLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4.5 bg-[#9333ea] hover:bg-[#7e22ce] text-white font-bold text-sm uppercase tracking-[0.16em] rounded-full transition-all shadow-[0_6px_25px_rgba(147,51,234,0.35)] hover:shadow-[0_8px_30px_rgba(147,51,234,0.5)] hover:-translate-y-0.5"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Talk to LUMCAS on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={`tel:${LUMCAS_CONTACT.phonePrimary}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold text-sm uppercase tracking-[0.14em] rounded-full transition-colors"
          >
            <Phone className="w-4 h-4 text-[#9333ea]" />
            <span>Call {LUMCAS_CONTACT.phoneFormatted}</span>
          </a>
        </div>

        {/* Interactive WhatsApp Topic Cards (Curved Rounded-3xl) */}
        <div className="max-w-4xl mx-auto border-t border-neutral-200 pt-14 text-left">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9333ea] font-mono font-bold">
              Direct WhatsApp Starters
            </span>
            <span className="text-xs text-neutral-500 font-mono hidden sm:inline">
              Verified Line: {LUMCAS_CONTACT.phoneFormatted}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((qa, index) => (
              <a
                key={index}
                href={createWhatsAppLink(qa.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-[#fafaf9] rounded-3xl border border-neutral-200/90 hover:border-purple-300 hover:bg-purple-50/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-neutral-400 group-hover:text-[#9333ea] mb-3">
                    <span className="text-xs font-mono font-bold">0{index + 1}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h4 className="text-neutral-900 text-base font-semibold mb-1 group-hover:text-[#9333ea]">
                    {qa.title}
                  </h4>
                  <p className="text-neutral-600 text-xs leading-relaxed">
                    {qa.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-neutral-200/60 text-[11px] text-[#9333ea] font-mono font-bold">
                  Launch WhatsApp →
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
