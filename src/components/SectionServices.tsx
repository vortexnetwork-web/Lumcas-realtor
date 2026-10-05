import React, { useState } from 'react';
import { createWhatsAppLink } from '../data/lumcasData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const SectionServices: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      headline: 'Understand what you are looking for.',
      summary:
        'We begin by defining your exact criteria: intended use (personal residence, commercial venture, or long-term land banking), timeline, preferred corridor in Benin City, and budget framework.',
      details: [
        'Personal consultation covering your short and multi-decade real estate vision',
        'Topographical and infrastructural corridor assessment across Benin City',
        'Diaspora advisory tailored to investors living abroad with absolute transparency',
        'Clear title verification briefing on Edo State land administration protocols',
      ],
      tagline: 'Clarity before commitment.',
    },
    {
      number: '02',
      title: 'SELECT',
      headline: 'Explore suitable property opportunities.',
      summary:
        'Navigate pre-vetted land plots and master-planned layouts within LUMCAS City developments. Every option features verified coordinates, beacon boundaries, and complete physical access.',
      details: [
        'Private guided physical inspections at Lumcas City and prime growth axes',
        'Precise beacon and survey plan reviews conducted before any funds exchange',
        'Topographic elevation inspection guaranteeing solid high-ground integrity',
        'Full review of neighborhood amenities, access roads, and municipal power links',
      ],
      tagline: 'Vetted precision, zero ambiguity.',
    },
    {
      number: '03',
      title: 'MOVE FORWARD',
      headline: 'Take the next step with clear guidance.',
      summary:
        'Experience seamless execution with free deed documentation, prompt on-site beacon placement, and ongoing logistical support from LUMCAS sand and development resources.',
      details: [
        'Complimentary deed and title documentation handled directly by LUMCAS',
        'Immediate site pegging, boundary fencing authorization, and allocation',
        'Support with sand supply and building aggregates for commencement',
        'Lifetime relationship with direct executive access to the LUMCAS team',
      ],
      tagline: 'Secure possession with complete peace of mind.',
    },
  ];

  return (
    <section id="services" className="relative py-28 md:py-36 bg-white border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#9333ea] rounded-full" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#9333ea] font-bold">
              The LUMCAS Experience
            </span>
          </div>

          <h2
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-neutral-900 font-light leading-tight tracking-tight mb-6"
            style={{ textWrap: 'balance' }}
          >
            A Deliberate Process for Enduring Value.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Real estate in Benin City requires rigorous local insight, verified community relations, and
            unyielding title certainty. Our three-stage approach guarantees clarity at every milestone.
          </p>
        </div>

        {/* Editorial Three-Step Layout with Curved Containers */}
        <div className="space-y-6">
          {steps.map((step, index) => {
            const isCurrent = activeStep === index;
            return (
              <div
                key={step.number}
                className={`transition-all duration-300 rounded-3xl border p-8 md:p-10 cursor-pointer ${
                  isCurrent
                    ? 'border-[#9333ea]/50 bg-gradient-to-r from-purple-50/70 via-white to-purple-50/30 shadow-[0_10px_30px_rgba(147,51,234,0.06)] ring-1 ring-purple-200'
                    : 'border-neutral-200 bg-[#fafaf9] hover:border-purple-200 hover:bg-white'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Step Number & Title */}
                  <div className="lg:col-span-4 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#9333ea] font-bold">
                        Phase {step.number}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9333ea]" />
                      <span className="text-xs uppercase tracking-[0.16em] text-neutral-500 font-medium">
                        {step.tagline}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-neutral-900 tracking-wide font-light pt-2">
                      {step.title}
                    </h3>
                  </div>

                  {/* Headline & Summary */}
                  <div className="lg:col-span-5 space-y-3.5">
                    <h4 className="text-lg sm:text-xl text-neutral-800 font-semibold leading-snug">
                      {step.headline}
                    </h4>
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                      {step.summary}
                    </p>

                    {/* Expandable Key Steps */}
                    <div className="pt-3 space-y-2.5">
                      {step.details.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#9333ea] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-neutral-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Action Link */}
                  <div className="lg:col-span-3 flex lg:justify-end items-center pt-2 lg:pt-0">
                    <a
                      href={createWhatsAppLink(`Hello LUMCAS, I want to discuss Phase ${step.number}: ${step.title} for my real estate plans.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#9333ea] hover:text-[#7e22ce] transition-colors py-2.5 px-4 rounded-full border border-purple-200 bg-white hover:bg-purple-50 shadow-xs"
                    >
                      <span>Inquire Regarding {step.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Quote with Curved Border */}
        <div className="mt-16 p-8 md:p-10 rounded-3xl bg-purple-50/50 border border-purple-100 flex flex-col md:flex-row items-baseline justify-between gap-6">
          <p className="font-serif italic text-xl md:text-2xl text-neutral-800 font-light max-w-2xl leading-relaxed">
            “No hidden fees, no disputed boundaries, no delays. Only authentic land ownership backed by the LUMCAS seal.”
          </p>
          <div className="text-xs uppercase tracking-[0.2em] text-[#9333ea] font-mono font-bold">
            Benin City · Edo State
          </div>
        </div>
      </div>
    </section>
  );
};
