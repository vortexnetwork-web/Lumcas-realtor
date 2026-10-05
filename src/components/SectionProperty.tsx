import React, { useState } from 'react';
import { FEATURED_PROPERTIES, PropertyItem, createWhatsAppLink, WHATSAPP_MESSAGES } from '../data/lumcasData';
import { ArrowUpRight, CheckCircle2, MapPin, ShieldCheck, Compass, Calendar } from 'lucide-react';

interface SectionPropertyProps {
  onScheduleInspection?: (property: PropertyItem) => void;
}

export const SectionProperty: React.FC<SectionPropertyProps> = ({ onScheduleInspection }) => {
  const [activeProperty, setActiveProperty] = useState<PropertyItem>(FEATURED_PROPERTIES[0]);

  return (
    <section id="properties" className="relative py-28 md:py-36 bg-[#fafaf9] border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#9333ea] rounded-full" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#9333ea] font-bold">
              Featured Opportunities
            </span>
          </div>

          <h2
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-neutral-900 font-light leading-tight tracking-tight mb-6"
            style={{ textWrap: 'balance' }}
          >
            Property, With Purpose.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            From finding the right home to identifying the right property opportunity, LUMCAS brings a
            focused approach to real estate across Benin City and Edo State.
          </p>
        </div>

        {/* Marquee Spotlight: LUMCAS City Flagship Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-16 items-stretch">
          {/* Visual Showcase Block (Curved Rounded-3xl) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col justify-between min-h-[460px] md:min-h-[520px]">
            {/* Architectural Abstract Visual Canvas */}
            <div className="relative p-8 md:p-12 flex-1 flex flex-col justify-between bg-gradient-to-br from-purple-50/60 via-white to-purple-100/30">
              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, #9333ea 1px, transparent 0)',
                  backgroundSize: '28px 28px',
                }}
              />

              <div className="relative z-10 flex items-center justify-between border-b border-neutral-200/80 pb-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-neutral-600 font-mono font-medium">
                  <Compass className="w-4 h-4 text-[#9333ea]" />
                  <span>Master-Planned Community · Benin City</span>
                </div>
                <span className="text-xs font-mono text-[#9333ea] font-bold px-3 py-1 bg-purple-100/80 rounded-full border border-purple-200">
                  {activeProperty.status}
                </span>
              </div>

              {/* Architectural Concept Details */}
              <div className="relative z-10 my-8 space-y-4">
                <div className="inline-block px-3.5 py-1 bg-white border border-neutral-200 text-[11px] font-mono uppercase tracking-widest text-[#9333ea] rounded-full font-semibold shadow-xs">
                  Cadastral Plot Alignment · 100% High Ground
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-neutral-900 font-light">
                  {activeProperty.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed max-w-xl">
                  {activeProperty.description}
                </p>
              </div>

              {/* Location Badge */}
              <div className="relative z-10 pt-4 border-t border-neutral-200/80 flex items-center gap-2.5 text-xs text-neutral-700 font-medium">
                <MapPin className="w-4 h-4 text-[#9333ea] shrink-0" />
                <span>{activeProperty.location}</span>
              </div>
            </div>

            {/* Bottom Strip Actions (Curved & Light) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-neutral-200/80 bg-neutral-50/80">
              <a
                href={createWhatsAppLink(WHATSAPP_MESSAGES.propertyInquiry(activeProperty.title))}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-6 flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-white bg-[#9333ea] hover:bg-[#7e22ce] transition-colors font-semibold"
              >
                <span>Inquire on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => onScheduleInspection?.(activeProperty)}
                className="py-4 px-6 flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-neutral-800 hover:text-[#9333ea] hover:bg-purple-50 transition-colors font-medium border-t sm:border-t-0 sm:border-l border-neutral-200/80"
              >
                <Calendar className="w-3.5 h-3.5 text-[#9333ea]" />
                <span>Schedule Site Visit</span>
              </button>
            </div>
          </div>

          {/* Details & Key Assurance Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Property Selector Tabs */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono font-semibold">
                Select Development Axis
              </p>
              <div className="flex flex-col gap-2.5">
                {FEATURED_PROPERTIES.map((prop) => (
                  <button
                    key={prop.id}
                    onClick={() => setActiveProperty(prop)}
                    className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                      activeProperty.id === prop.id
                        ? 'border-[#9333ea] bg-white ring-2 ring-purple-100 shadow-md text-neutral-900'
                        : 'border-neutral-200 bg-white/70 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 hover:bg-white'
                    }`}
                  >
                    <div>
                      <p className="text-xs font-mono text-[#9333ea] uppercase tracking-wider font-bold">
                        {prop.category}
                      </p>
                      <p className="text-sm font-semibold mt-0.5 text-neutral-900">{prop.title}</p>
                    </div>
                    <span className="text-xs font-mono text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-full">
                      {prop.status}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Core Advantages List */}
            <div className="bg-white rounded-3xl border border-neutral-200/90 p-6 md:p-8 space-y-5 shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-800 font-bold">
                <ShieldCheck className="w-4 h-4 text-[#9333ea]" />
                <span>Verified LUMCAS Commitments</span>
              </div>

              <div className="space-y-3.5">
                {activeProperty.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#9333ea] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-neutral-700 font-normal leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-100 flex flex-wrap gap-2">
                {activeProperty.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono text-purple-900 bg-purple-50 px-3 py-1 rounded-full border border-purple-100 font-medium"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benin City Strategic Corridors Summary */}
        <div className="rounded-3xl border border-neutral-200/90 bg-white p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            <div className="space-y-2 md:pr-6">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#9333ea] font-bold">01. Upper Ekenwan Axis</p>
              <h4 className="text-lg font-serif text-neutral-900 font-semibold">Direct Airport Corridor Link</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Rapidly developing bypass connects Iguelegbon directly toward Airport Road, unlocking seamless travel to Benin central commercial hubs.
              </p>
            </div>

            <div className="space-y-2 pt-6 md:pt-0 md:px-6">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#9333ea] font-bold">02. Uncompromised Titles</p>
              <h4 className="text-lg font-serif text-neutral-900 font-semibold">Free Survey & Documentation</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                LUMCAS guarantees legitimate root of title, registered community sign-offs, and beacon coordinates registered with state land authorities.
              </p>
            </div>

            <div className="space-y-2 pt-6 md:pt-0 md:pl-6">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#9333ea] font-bold">03. Physical Infrastructure</p>
              <h4 className="text-lg font-serif text-neutral-900 font-semibold">Sand Supply & Site Logistics</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Backed by Lumcas resources including dedicated sand supply and construction aggregates, simplifying your building journey from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
