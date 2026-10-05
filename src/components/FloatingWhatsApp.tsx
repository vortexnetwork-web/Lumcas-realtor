import React, { useState } from 'react';
import { createWhatsAppLink, WHATSAPP_MESSAGES } from '../data/lumcasData';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on Desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#121217] border border-white/10 text-white text-xs py-2 px-3 shadow-xl">
          <span>Chat directly with LUMCAS on WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={createWhatsAppLink(WHATSAPP_MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:scale-105 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Chat with LUMCAS Realtor on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
};
