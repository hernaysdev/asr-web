/**
 * Central business config — edit values here and they propagate to every
 * component that reads from `ContentService.contact` / `.business`.
 *
 * NOTE: EmailJS keys live in `app.config.ts` (injected via EMAILJS_CONFIG
 * token), not here — they should not be checked into a generic config.
 */
export const SITE_CONFIG = {
  business: {
    name: 'ASR Performance & Tuning LLC',
    shortName: 'ASR',
    tagline: 'Precision. Power. Reliability.',
  },

  contact: {
    phone: '804-616-7636',
    email: 'Asrperformanceandtuning@gmail.com',
    address: {
      street: '10097 Patterson Park Rd',
      city: 'Ashland',
      state: 'VA',
      zip: '23005',
      full: '10097 Patterson Park Rd, Ashland, VA 23005',
    },
  },

  social: {
    instagram: 'https://www.instagram.com/asr.team?igsh=MTIycmJ3OTUwY2FpMQ==',
    facebook: 'https://www.facebook.com/share/1E8K2QB4au/?mibextid=wwXIfr',
  },

  messaging: {
    // E.164 con '+', US country code (1) + número. Para el protocolo sms:
    number: '+18046167636',
    presetMessage: "Hi ASR! I'd like to ask about your services.",
  },

  hours: [
    { day: 'Monday - Friday', value: '9:30 AM - 6:30 PM' },
    { day: 'Saturday', value: '10:30 AM - 3:30 PM' },
    { day: 'Sunday', value: 'Closed' },
  ],

  map: {
    embedUrl:
      'https://www.google.com/maps?q=10097+Patterson+Park+Rd,+Ashland,+VA+23005&output=embed',
    directionsUrl: 'https://maps.app.goo.gl/9eZpA6JsXVt1HL8P8?g_st=iw',
  },

  legal: {
    termsPdfUrl: '/assets/asr-terms-and-conditions.pdf',
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
