import { Injectable } from '@angular/core';

import { SITE_CONFIG } from '../../config/config';
import { Faq } from '../models/faq.model';
import { NavLink } from '../models/nav-link.model';
import { Service } from '../models/service.model';
import { TermsContent } from '../models/terms.model';
import { Value } from '../models/value.model';

@Injectable({ providedIn: 'root' })
export class ContentService {
  readonly navLinks: readonly NavLink[] = [
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  readonly services: readonly Service[] = [
    {
      icon: 'turbo',
      title: 'Dyno Tuning',
      description: 'Precision tuning for maximum power, reliability, and drivability on our professional dynojet system.',
    },
    {
      icon: 'piston',
      title: 'Performance Upgrades',
      description: 'Upgrades for more power and better performance. Turbo systems, exhaust, intake, fuel systems and more.',
    },
    {
      icon: 'engine',
      title: 'Engine Builds',
      description: 'Built to perform. From stock rebuilds to high performance engine builds, we do it all with precision.',
    },
    {
      icon: 'welder',
      title: 'Fabrication',
      description: 'Custom fabrication and welding. From exhaust systems to brackets and anything in between.',
    },
    {
      icon: 'bolt',
      title: 'Electrical & Wiring',
      description: 'Wiring, diagnostics, relays, lighting and electrical upgrades done right.',
    },
    {
      icon: 'clipboard',
      title: 'Maintenance & Repair',
      description: 'Diagnostics, maintenance and repairs for daily driven, performance and track vehicles.',
    },
  ];

  readonly values: readonly Value[] = [
    {
      icon: 'shield',
      title: 'Quality Workmanship',
      description: 'Attention to detail in every job.',
    },
    {
      icon: 'gear',
      title: 'Performance Focused',
      description: 'Built for power, reliability, and performance.',
    },
    {
      icon: 'wrench',
      title: 'Professional Environment',
      description: 'Clean, organized, and equipped with industry-leading tools.',
    },
    {
      icon: 'handshake',
      title: 'Customer Commitment',
      description: 'Honest service and solutions tailored to your goals.',
    },
  ];

  readonly faqs: readonly Faq[] = [
    {
      question: 'Where are you located?',
      answer: 'We are located at 10097 Patterson Park Rd, Ashland, VA 23005.',
    },
    {
      question: 'What are your hours of operation?',
      answer: 'Monday to Friday 9:30 AM – 6:30 PM, Saturday 10:30 AM – 3:30 PM, Sunday Closed.',
    },
    {
      question: 'How much does it cost to fix or service my car?',
      answer: 'Cost depends on the vehicle and service required. Contact us for a free estimate tailored to your needs.',
    },
  ];

  readonly galleryImages: readonly string[] = Array.from({ length: 12 }, (_, i) =>
    `/assets/carrusel/gallery${String(i + 1).padStart(2, '0')}.jpg`,
  );

  readonly heroServices: readonly Pick<Service, 'icon' | 'title'>[] = [
    { icon: 'gauge', title: 'Dyno Tuning' },
    { icon: 'turbo', title: 'Performance Upgrades' },
    { icon: 'welder', title: 'Fabrication' },
    { icon: 'engine', title: 'Engine Builds' },
    { icon: 'bolt', title: 'Electrical & Wiring' },
    { icon: 'diagnostics', title: 'Diagnostics' },
  ];

  readonly terms: TermsContent = {
    label: '// Terms & Conditions',
    titleTop: 'Terms &',
    titleAccent: 'Conditions',
    intro:
      'By requesting or authorizing any services from ASR Performance & Tuning LLC, the customer acknowledges and agrees to the following terms and conditions, regardless of whether the vehicle is delivered in person or by a third party.',
    overviewTitle: 'Terms Overview',
    overviewSubtitle:
      'Please review the key terms below. For the complete details, click the button at the bottom of the page to view the full Terms & Conditions.',
    items: [
      {
        number: '01',
        title: 'Off-Road Use Only',
        description:
          'All performance modifications and tuning services are intended for off-road use only. The customer assumes full responsibility for how the vehicle is operated.',
        icon: 'flag',
      },
      {
        number: '02',
        title: 'Scope of Work',
        description:
          'ASR Performance & Tuning LLC is responsible only for the services specifically described in the invoice or estimate.',
        icon: 'file-text',
      },
      {
        number: '03',
        title: 'Vehicle Storage',
        description: "Vehicles stored outside the shop premises are left at the owner's risk.",
        icon: 'shield',
      },
      {
        number: '04',
        title: 'Personal Belongings',
        description:
          'Customers are responsible for removing all personal belongings from their vehicles prior to service.',
        icon: 'bag',
      },
      {
        number: '05',
        title: 'Dyno Testing Disclaimer',
        description:
          'Dyno testing and performance tuning place additional stress on engine and drivetrain components.',
        icon: 'gauge',
      },
      {
        number: '06',
        title: 'Parts & Warranties',
        description:
          'Customer-supplied parts are not covered under warranty. Third party parts are warrantied by the manufacturer. ASR parts carry a limited warranty.',
        icon: 'gear',
      },
      {
        number: '07',
        title: 'Limitation of Liability',
        description:
          'The customer agrees not to hold ASR Performance & Tuning LLC liable for damages or losses arising from services performed or the use of the vehicle.',
        icon: 'alert-triangle',
      },
      {
        number: '08',
        title: 'Estimates',
        description:
          'All estimates are approximate. Final charges may vary based on actual labor, parts, or unforeseen issues.',
        icon: 'calculator',
      },
      {
        number: '09',
        title: 'Warranty & Inspections',
        description:
          'Warranty service requires inspection to determine the cause of the issue. Coverage applies only under the conditions outlined in the full terms.',
        icon: 'search',
      },
      {
        number: '10',
        title: 'Payment Authorization',
        description:
          'By authorizing services, the customer agrees to pay all charges. Chargebacks may result in legal action.',
        icon: 'credit-card',
      },
    ],
    cta: {
      text: 'For the complete details including Engine, Transmission & Machine Shop Policies, please view our Full Terms & Conditions.',
      buttonLabel: 'View Full Terms & Conditions',
      href: SITE_CONFIG.legal.termsPdfUrl,
    },
    importantNotice:
      'By leaving a vehicle with ASR Performance & Tuning LLC, or by authorizing work in any form (in person, electronically, or through a third party), the customer automatically accepts these Terms and Conditions.',
  };

  readonly business = SITE_CONFIG.business;

  readonly messaging = {
    number: SITE_CONFIG.messaging.number,
    url: `sms:${SITE_CONFIG.messaging.number}?&body=${encodeURIComponent(SITE_CONFIG.messaging.presetMessage)}`,
  };

  readonly contact = {
    address: SITE_CONFIG.contact.address.full,
    addressParts: SITE_CONFIG.contact.address,
    phone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    mapEmbed: SITE_CONFIG.map.embedUrl,
    mapDirections: SITE_CONFIG.map.directionsUrl,
    hours: SITE_CONFIG.hours,
    social: SITE_CONFIG.social,
  };
}
