import React, { useState, useEffect } from 'react';
import { LumcasLogo } from './LumcasLogo';
import { LUMCAS_CONTACT, createWhatsAppLink, WHATSAPP_MESSAGES } from '../data/lumcasData';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';

interface NavigationProps {
  onOpenContact?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Properties', href: '#properties' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
            : 'bg-gradient-to-b from-white/95 via-white/80 to-transparent py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark / brand link */}
          <a
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9333ea] rounded-xl"
            aria-label="LUMCAS Realtor & Properties Ltd Home"
          >
            <LumcasLogo variant="purple" size="sm" showWordmark={false} />
            <span className="text-xl md:text-2xl font-bold tracking-[0.18em] uppercase text-neutral-900 font-sans transition-colors group-hover:text-[#9333ea]">
              LUMCAS
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-[0.16em] font-semibold text-neutral-700"
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-1 transition-colors hover:text-[#9333ea] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#9333ea] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={createWhatsAppLink(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs md:text-sm font-semibold tracking-wider uppercase text-white bg-[#9333ea] hover:bg-[#7e22ce] active:bg-[#6b21a8] rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(147,51,234,0.3)] hover:shadow-[0_6px_20px_rgba(147,51,234,0.45)] hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <span>Talk to LUMCAS</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            {/* Mobile menu hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-800 hover:text-[#9333ea] rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9333ea]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Light Theme with Curved Elements) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl md:hidden pt-24 px-6 pb-10 flex flex-col justify-between shadow-2xl"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold">Navigation</p>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif tracking-wide text-neutral-800 hover:text-[#9333ea] transition-colors py-2 border-b border-neutral-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-neutral-200">
            <p className="text-xs uppercase tracking-[0.16em] text-neutral-500 font-medium">Direct Inquiries (Benin City)</p>
            <div className="flex flex-col gap-3">
              <a
                href={createWhatsAppLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#9333ea] text-white text-sm font-semibold tracking-wider uppercase rounded-2xl shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Consultation</span>
              </a>
              <a
                href={`tel:${LUMCAS_CONTACT.phonePrimary}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-sm font-medium tracking-wider rounded-2xl transition-colors"
              >
                <Phone className="w-4 h-4 text-[#9333ea]" />
                <span>Call {LUMCAS_CONTACT.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
