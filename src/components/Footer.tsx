import React from 'react';
import { LUMCAS_CONTACT, createWhatsAppLink, WHATSAPP_MESSAGES } from '../data/lumcasData';
import { LumcasLogo } from './LumcasLogo';
import { MapPin, Phone, MessageSquare, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f8f8fa] border-t border-neutral-200/90 text-neutral-600 text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <LumcasLogo variant="purple" size="sm" showWordmark={false} />
              <span className="text-xl font-bold tracking-[0.18em] uppercase text-neutral-900 font-sans">
                LUMCAS
              </span>
            </div>

            <p className="text-neutral-600 leading-relaxed max-w-sm">
              LUMCAS Realtor & Properties Ltd connects individuals, families, and diaspora investors with
              verified land holdings and master-planned residential developments across Benin City, Edo State.
            </p>

            <div className="pt-2 text-neutral-500 font-mono text-[11px]">
              RC Certified Enterprise · Edo State, Nigeria
            </div>
          </div>

          {/* Developments Axis */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-neutral-900 font-semibold uppercase tracking-wider text-xs">
              Developments & Areas
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li>
                <a href="#properties" className="hover:text-[#9333ea] transition-colors">
                  LUMCAS City — Iguelegbon Estate
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#9333ea] transition-colors">
                  LUMCAS City — Evbouro Expansion
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#9333ea] transition-colors">
                  Upper Ekenwan & Airport Bypass
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#9333ea] transition-colors">
                  Commercial & Sand Supply Logistics
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-neutral-900 font-semibold uppercase tracking-wider text-xs">
              Benin City Headquarters
            </p>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9333ea] shrink-0 mt-0.5" />
                <span className="text-neutral-800">{LUMCAS_CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#9333ea] shrink-0" />
                <span className="text-neutral-800 font-mono">
                  {LUMCAS_CONTACT.phoneFormatted} · {LUMCAS_CONTACT.phoneSecondaryFormatted}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#9333ea] shrink-0" />
                <a
                  href={createWhatsAppLink(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9333ea] hover:text-[#7e22ce] font-semibold underline underline-offset-4"
                >
                  Direct WhatsApp Chat
                </a>
              </div>
              <p className="text-[11px] text-neutral-500 pt-1">
                Hours: {LUMCAS_CONTACT.hours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 font-mono text-[11px]">
            © {new Date().getFullYear()} LUMCAS Realtor & Properties Ltd. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-[#9333ea] transition-colors text-[11px] uppercase tracking-wider bg-white px-4 py-2 rounded-full border border-neutral-200 shadow-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
