/**
 * Verified LUMCAS Realtor & Properties Ltd Information
 * Based in Benin City, Edo State, Nigeria
 */

export const LUMCAS_CONTACT = {
  name: 'LUMCAS Realtor & Properties Ltd',
  shortName: 'LUMCAS',
  address: '17A Dawson Road by Forestry Junction, Benin City, Edo State, Nigeria',
  city: 'Benin City',
  state: 'Edo State',
  country: 'Nigeria',
  phonePrimary: '07030399918',
  phoneFormatted: '+234 703 039 9918',
  phoneSecondary: '09183313821',
  phoneSecondaryFormatted: '+234 918 331 3821',
  whatsappNumber: '2347030399918',
  hours: 'Mon — Sat: 8:00 AM – 6:00 PM',
};

export const CINEMATIC_VIDEO_URL =
  'https://github.com/vortexnetwork-web/Lumcas-building/raw/refs/heads/main/Real-estate_video_generation_prompt_20261003193441.mp4';

export function createWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${LUMCAS_CONTACT.whatsappNumber}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  general: 'Hello LUMCAS, I’m interested in your property services and would like to make an enquiry.',
  consultation: 'Hello LUMCAS, I’d like to speak with someone about my real estate needs.',
  inspection: 'Hello LUMCAS, I would like to schedule an inspection of LUMCAS City properties in Benin City.',
  propertyInquiry: (propertyName: string) =>
    `Hello LUMCAS, I am interested in learning more about ${propertyName} in Benin City. Please share the details and inspection schedule.`,
};

export interface PropertyItem {
  id: string;
  title: string;
  category: 'Master-Planned Estate' | 'Residential Plots' | 'Commercial & Mixed-Use';
  location: string;
  description: string;
  highlights: string[];
  features: string[];
  status: 'Available' | 'Allocating' | 'Phase 2 Open';
}

export const FEATURED_PROPERTIES: PropertyItem[] = [
  {
    id: 'lumcas-city-iguelegbon',
    title: 'LUMCAS City — Iguelegbon Estate',
    category: 'Master-Planned Estate',
    location: 'Iguelegbon Community, Off Upper Ekenwan Rd (Airport Rd Access), Benin City',
    description:
      'The crown jewel of LUMCAS residential communities. A master-planned estate designed with structured layout plans, elevated solid ground terrain, and twin accessibility from Upper Ekenwan and Airport Road.',
    highlights: [
      'Twin corridor access (Upper Ekenwan & Airport Road)',
      'Free deed documentation & registered survey plan',
      'Solid high-elevation topography (zero seasonal waterlogging)',
      'Planned asphalt road network & electrical infrastructure',
    ],
    features: ['Instant Plot Allocation', 'Perimeter Demarcation', 'Access to Commercial Hubs', 'Clean Water Scheme'],
    status: 'Allocating',
  },
  {
    id: 'lumcas-city-evbouro',
    title: 'LUMCAS City — Evbouro Expansion',
    category: 'Residential Plots',
    location: 'Evbouro Community, Off Ekenwan Road (near Ojemai), Benin City',
    description:
      'Strategically positioned along Benin City’s fastest residential expansion axis. Ideal for families and diaspora investors seeking secure generational equity with guaranteed capital growth.',
    highlights: [
      'Rapidly developing neighborhood with established residential presence',
      'Verified family title records & peaceful community clearance',
      'Flexible acquisition plans with bundled survey services',
      'Proximity to educational institutions and transport lines',
    ],
    features: ['Registered Layout', 'Survey Beacons Placed', 'Electricity Right of Way', 'Direct Site Inspection'],
    status: 'Available',
  },
  {
    id: 'lumcas-commercial-development',
    title: 'Commercial & Multi-Unit Land Holdings',
    category: 'Commercial & Mixed-Use',
    location: 'Strategic Growth Corridors, Benin City, Edo State',
    description:
      'Selected commercial plots suitable for institutional developments, schools, healthcare hubs, retail centers, and integrated logistics, supported by Lumcas sand supply resources.',
    highlights: [
      'High-traffic frontage along main arterial routes',
      'Institutional scale plots suitable for custom architectural footprints',
      'Complete title provenance & verified government gazette alignment',
      'Direct logistical support including sand and aggregate supply',
    ],
    features: ['Commercial Zoning Approval', 'Wide Road Frontage', 'Immediate Possession', 'Developer Support'],
    status: 'Phase 2 Open',
  },
];
