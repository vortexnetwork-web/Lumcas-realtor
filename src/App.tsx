import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { CinematicHero } from './components/CinematicHero';
import { SectionProperty } from './components/SectionProperty';
import { SectionServices } from './components/SectionServices';
import { SectionApproach } from './components/SectionApproach';
import { SectionFinalCta } from './components/SectionFinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SiteVisitModal } from './components/SiteVisitModal';
import { PropertyItem } from './data/lumcasData';

export default function App() {
  const [inspectionModalOpen, setInspectionModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);

  const handleOpenInspection = (property?: PropertyItem) => {
    setSelectedProperty(property || null);
    setInspectionModalOpen(true);
  };

  const handleScrollToProperties = () => {
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 relative selection:bg-purple-600/20 selection:text-purple-900">
      {/* Minimalist Top Navigation Contract */}
      <Navigation onOpenContact={() => handleOpenInspection()} />

      <main>
        {/* SECTION 01 — HERO: Cinematic Scroll-Driven Video Centerpiece */}
        <CinematicHero onExploreClick={handleScrollToProperties} />

        {/* SECTION 02 — PROPERTY: Property, With Purpose */}
        <SectionProperty onScheduleInspection={handleOpenInspection} />

        {/* SECTION 03 — SERVICES: Editorial 3-Step Layout */}
        <SectionServices />

        {/* SECTION 04 — THE LUMCAS APPROACH: Verified Consultation */}
        <SectionApproach onSpeakClick={() => handleOpenInspection()} />

        {/* SECTION 05 — FINAL CTA: Closing Brand Statement */}
        <SectionFinalCta />
      </main>

      {/* Quiet Production Footer */}
      <Footer />

      {/* Floating 1-Click WhatsApp Channel */}
      <FloatingWhatsApp />

      {/* Guided Site Visit Booking Dialog */}
      <SiteVisitModal
        isOpen={inspectionModalOpen}
        onClose={() => setInspectionModalOpen(false)}
        selectedProperty={selectedProperty}
      />
    </div>
  );
}
