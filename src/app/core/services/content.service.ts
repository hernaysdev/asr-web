import { Injectable } from '@angular/core';

import { SITE_CONFIG } from '../../config/config';
import { Faq } from '../models/faq.model';
import { NavLink } from '../models/nav-link.model';
import { Service } from '../models/service.model';
import { ProcessContent } from '../models/process-step.model';
import { TermsContent } from '../models/terms.model';
import { Value } from '../models/value.model';

@Injectable({ providedIn: 'root' })
export class ContentService {
  readonly navLinks: readonly NavLink[] = [
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Our Process' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
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
      question: 'Do I need an appointment?',
      answer:
        'Yes. We recommend scheduling an appointment to ensure we can properly inspect your vehicle and dedicate the necessary time to your project.',
    },
    {
      question: 'What types of vehicles do you work on?',
      answer:
        'We work on domestic, import, and performance vehicles, from daily drivers to fully built street and race cars.',
    },
    {
      question: 'Do you offer Dyno Tuning?',
      answer:
        'Yes. We offer DynoJet dyno tuning services to optimize performance, drivability, and reliability.',
    },
    {
      question: 'Can I bring my own parts?',
      answer:
        'Yes. Customer-supplied parts are accepted; however, warranty coverage cannot be provided on parts supplied by the customer.',
    },
    {
      question: 'How much does it cost to service my vehicle?',
      answer:
        'Pricing varies depending on the vehicle and the services required. Contact us for a personalized estimate.',
    },
    {
      question: 'What services do you offer?',
      answer:
        'We specialize in dyno tuning, engine builds, custom fabrication, diagnostics, electrical repair, performance upgrades, maintenance, and general automotive repair services.',
    },
  ];

  readonly galleryImages: readonly string[] = Array.from({ length: 11 }, (_, i) =>
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

  readonly about = {
    paragraphs: [
      'ASR Performance & Tuning LLC is a full-service performance shop specializing in dyno tuning, custom fabrication, engine builds, diagnostics, and electrical work.',
      "Whether you're looking for a simple upgrade or a complete performance build, our team is committed to delivering quality workmanship, honest service, and reliable results every step of the way.",
    ],
  } as const;

  readonly process: ProcessContent = {
    id: 'process',
    label: '// Our Process',
    titleTop: 'Our',
    titleAccent: 'Process',
    subtitle: 'A clear process. Proven results.',
    steps: [
      {
        number: '01',
        title: 'Consultation',
        description: 'We discuss your goals, budget, and vision for your vehicle.',
        imageUrl: '/assets/figma/IMG-20260514-WA0014.png',
      },
      {
        number: '02',
        title: 'Inspection',
        description: 'We inspect your vehicle and evaluate any existing issues.',
        imageUrl: '/assets/figma/IMG-20260514-WA0015.png',
      },
      {
        number: '03',
        title: 'Build Plan',
        description: 'We create a plan tailored to your power goals and performance needs.',
        imageUrl: '/assets/figma/IMG-20260514-WA0016.png',
      },
      {
        number: '04',
        title: 'Installation / Fabrication',
        description: 'Our team gets to work with precision and attention to detail.',
        imageUrl: '/assets/figma/IMG-20260514-WA0017.png',
      },
      {
        number: '05',
        title: 'Dyno / Testing',
        description: 'We tune, test, and verify performance to ensure everything is perfect.',
        imageUrl: '/assets/figma/portada.jpg',
      },
      {
        number: '06',
        title: 'Final Review & Delivery',
        description:
          'We review the completed work, explain recommendations, and verify that the vehicle is ready for delivery.',
        imageUrl: '/assets/figma/about.jpg',
      },
    ],
    cta: {
      text: 'Ready to get started?',
      subtext: "Let's build something amazing.",
      buttonLabel: 'Schedule an Appointment',
      scrollTo: 'contact',
    },
  };

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
    fullTermsTitle: 'Full Terms & Conditions',
    fullTermsSubtitle:
      'The complete text of our Terms and Conditions. Please read carefully before authorizing any service.',
    fullTerms: [
      {
        title: 'ASR Performance & Tuning LLC – Terms and Conditions',
        intro:
          'By requesting or authorizing any services from ASR Performance & Tuning LLC ("the shop"), the customer acknowledges and agrees to the following terms and conditions, regardless of whether the vehicle is delivered in person or by a third party.',
        clauses: [
          {
            number: '1',
            title: 'Off-Road Use Only',
            body: 'All performance modifications, tuning services, and aftermarket components installed by ASR Performance & Tuning LLC are intended for off-road use only. The customer assumes full responsibility for how the vehicle is operated after service. The shop is not responsible for accidents, damages, or legal violations resulting from the use of modified vehicles on public roads.',
          },
          {
            number: '2',
            title: 'Scope of Work',
            body: 'The shop is responsible only for the services specifically described in the invoice or estimate and is not responsible for pre-existing conditions, unrelated mechanical issues, or failures in other vehicle systems that were not part of the approved work.',
          },
          {
            number: '3',
            title: 'Vehicle Storage and Parking',
            body: "Vehicles stored outside the shop premises are left at the owner's risk. The shop is not responsible for theft, vandalism, weather damage, or incidents occurring while the vehicle is parked outside the shop.",
          },
          {
            number: '4',
            title: 'Personal Belongings',
            body: 'Customers are responsible for removing all personal belongings from their vehicles prior to service. The shop is not responsible for lost, stolen, or damaged items left inside the vehicle.',
          },
          {
            number: '5',
            title: 'Dyno Testing Disclaimer',
            body: 'Dyno testing and performance tuning place additional stress on engine and drivetrain components. The customer acknowledges these risks and agrees that the shop is not responsible for engine, transmission, or drivetrain failures that occur during or after dyno testing if the vehicle was not in proper mechanical condition. The shop may estimate achievable power levels; however, the shop is not responsible if the engine cannot safely reach or sustain the power levels requested by the customer.',
          },
          {
            number: '6',
            title: 'Customer-Supplied Parts',
            body: 'If a customer supplies their own parts, the shop provides no warranty on those parts. The shop is not responsible for defects, malfunctions, or failures related to customer-supplied components. Labor required to replace defective parts will be charged accordingly.',
          },
          {
            number: '7',
            title: 'Third-Party Parts Warranty',
            body: 'For parts purchased through the shop from third-party manufacturers or suppliers, the warranty is provided solely by the manufacturer. The shop may assist the customer with warranty claims but is not responsible for product defects. Labor for replacement of warranty parts is not included unless otherwise stated.',
          },
          {
            number: '8',
            title: 'ASR Parts Warranty',
            body: 'If the shop sells a product under its own warranty, the warranty covers the part itself only, unless otherwise stated in writing. Labor for removal or reinstallation is not included unless specified.',
          },
          {
            number: '9',
            title: 'Off-Road Liability Release',
            body: 'The customer releases ASR Performance & Tuning LLC from any liability related to the use of modified vehicles on public roads.',
          },
          {
            number: '10',
            title: 'Limitation of Liability',
            body: 'The customer agrees not to hold the shop liable for damages, losses, or claims arising from services performed, aftermarket modifications, or the use of the vehicle after completion of the work.',
          },
          {
            number: '11',
            title: 'Estimates',
            body: 'All estimates are approximate. Final charges may vary depending on actual labor required, additional parts, fabrication, or unforeseen issues discovered during the repair process.',
          },
          {
            number: '12',
            title: 'Performance Modification Risk',
            body: 'The customer acknowledges that performance modifications, tuning, and aftermarket components increase stress on engine, drivetrain, and vehicle systems. The shop is not responsible for failures caused by increased power levels, racing use, or aggressive driving.',
          },
          {
            number: '13',
            title: 'Additional Labor Authorization',
            body: 'During the course of service, additional issues may be discovered that require further labor or parts. The shop will make reasonable efforts to contact the customer for approval before proceeding.',
          },
        ],
        importantNotice:
          'By leaving a vehicle with ASR Performance & Tuning LLC ("the shop"), or by authorizing work in any form (in person, electronically, or through a third party), the customer automatically accepts these Terms and Conditions.',
      },
      {
        title: 'Engine, Transmission & Machine Shop – Terms and Conditions',
        intro:
          'By requesting or authorizing any services from ASR Performance & Tuning LLC ("the shop"), the customer acknowledges and agrees to the following terms and conditions, regardless of whether the vehicle is delivered in person or by a third party.',
        clauses: [
          {
            number: '14',
            title: 'Customer-Supplied Engine or Transmission',
            body: 'If a customer provides an engine, transmission, or drivetrain component for installation, the shop provides no warranty on that component.',
          },
          {
            number: '15',
            title: 'Engine & Transmission Rebuild Warranty',
            body: 'ASR Performance & Tuning LLC provides a limited warranty on engine and transmission rebuilds performed by our shop. This warranty covers workmanship related to the rebuilding service. The warranty applies only to components repaired or replaced during the rebuild and only when installation is performed by the shop. Failures caused by racing, improper tuning, overheating, oil starvation, lack of maintenance, or failure of unrelated components are not covered.',
          },
          {
            number: '16',
            title: 'Customer-Installed Engine or Transmission',
            body: 'If a rebuilt engine or transmission is installed by a third party, ASR Performance & Tuning LLC cannot guarantee proper installation and assumes no responsibility for failures resulting from improper installation.',
          },
          {
            number: '17',
            title: 'Machine Shop Services',
            body: 'Machine shop services provided by the shop are limited to machining operations such as resurfacing, boring, honing, balancing, or cleaning. No warranty is expressed or implied on machine work once the component has been assembled or installed.',
          },
          {
            number: '18',
            title: 'Warranty Void Conditions',
            body: 'Any warranty becomes void if the vehicle or component is subjected to racing, abuse, overheating, detonation, improper tuning, lack of maintenance, or installation of incompatible parts.',
          },
          {
            number: '19',
            title: 'Warranty Inspection',
            body: 'When requesting warranty service for an engine, transmission, wiring, or related components, the vehicle or component will be inspected to determine the cause of the issue. If the problem is determined to be due to negligence or workmanship errors by the shop, warranty service will be provided according to these terms. If the issue is unrelated to the work performed by the shop, the customer will be responsible for all inspection and diagnostic costs.',
          },
          {
            number: '20',
            title: 'Labor Warranty',
            body: 'Labor warranty is valid for 6 months from the completion date of service, unless otherwise stated. Certain conditions apply as described in these terms.',
          },
          {
            number: '21',
            title: 'Payment Authorization & Chargebacks',
            body: 'By authorizing repairs or services, the customer agrees to pay all charges related to labor, parts, fabrication, diagnostics, and tuning. Any attempt to dispute or reverse charges (chargebacks) after services have been completed may result in legal action.',
          },
        ],
        importantNotice:
          'By leaving a vehicle with ASR Performance & Tuning LLC ("the shop"), or by authorizing work in any form (in person, electronically, or through a third party), the customer automatically accepts these Terms and Conditions.',
      },
    ],
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
    intro: {
      title: 'Ready to Start Your Project?',
      body:
        'Whether you need dyno tuning, diagnostics, fabrication, or a complete build, our team is ready to help. Contact us today to discuss your goals.',
    },
  };
}
