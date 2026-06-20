export type IconName =
  | 'turbo'
  | 'piston'
  | 'engine'
  | 'welder'
  | 'bolt'
  | 'clipboard'
  | 'shield'
  | 'gear'
  | 'wrench'
  | 'handshake'
  | 'gauge'
  | 'diagnostics'
  | 'instagram'
  | 'facebook'
  | 'phone'
  | 'email'
  | 'pin'
  | 'arrow-right'
  | 'plus'
  | 'minus'
  | 'flag'
  | 'file-text'
  | 'bag'
  | 'alert-triangle'
  | 'calculator'
  | 'search'
  | 'credit-card'
  | 'message';

interface IconDef {
  readonly viewBox: string;
  readonly content: string;
}

const stroke = 'stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const ICON_REGISTRY: Readonly<Record<IconName, IconDef>> = {
  turbo: {
    viewBox: '0 0 64 64',
    content: `
      <circle cx="32" cy="32" r="11" ${stroke}/>
      <circle cx="32" cy="32" r="3.5" fill="currentColor"/>
      <path d="M32 21V8 M32 56V43 M21 32H8 M56 32H43 M24 24L15 15 M49 49l-9-9 M40 24l9-9 M15 49l9-9" ${stroke}/>
    `,
  },
  piston: {
    viewBox: '0 0 64 64',
    content: `
      <rect x="22" y="10" width="20" height="20" rx="2" ${stroke}/>
      <path d="M24 30v6h16v-6 M28 36v6h8v-6 M30 42v8h4v-8" ${stroke}/>
      <path d="M22 14h20 M22 18h20" ${stroke}/>
      <path d="M26 50l-2 6h16l-2-6" ${stroke}/>
    `,
  },
  engine: {
    viewBox: '0 0 64 64',
    content: `
      <path d="M14 28h6v-6h10v4h12l4-4h6v8h6v12h-6v6H46l-4 4H30v-4H20v-6h-6V28z" ${stroke}/>
      <path d="M30 32l-3 6h4l-2 6 6-9h-4l3-7" ${stroke} fill="currentColor"/>
    `,
  },
  welder: {
    viewBox: '0 0 64 64',
    content: `
      <path d="M40 14l8 4-6 8 6 4-8 6-2 10" ${stroke}/>
      <path d="M22 56l16-22" ${stroke}/>
      <path d="M14 20l4-4 M10 28l4 0 M14 12l2-4" ${stroke}/>
      <circle cx="20" cy="22" r="2" fill="currentColor"/>
    `,
  },
  bolt: {
    viewBox: '0 0 64 64',
    content: `
      <path d="M34 8L14 36h12l-4 20 22-30H32l6-18z" ${stroke} fill="currentColor" fill-opacity="0.15"/>
    `,
  },
  clipboard: {
    viewBox: '0 0 64 64',
    content: `
      <rect x="14" y="12" width="36" height="44" rx="3" ${stroke}/>
      <rect x="22" y="6" width="20" height="10" rx="2" ${stroke}/>
      <path d="M22 30l4 4 8-8 M22 42l4 4 8-8" ${stroke}/>
    `,
  },
  shield: {
    viewBox: '0 0 64 64',
    content: `
      <path d="M32 8l20 6v14c0 14-9 22-20 28-11-6-20-14-20-28V14l20-6z" ${stroke}/>
      <path d="M22 32l7 7 13-14" ${stroke}/>
    `,
  },
  gear: {
    viewBox: '0 0 64 64',
    content: `
      <path d="M32 6l3 6 6-2 2 6 6 3-2 6 6 3-2 6 2 6-6 3 2 6-6 2-3 6-6-2-3 6-3-6-6 2-2-6-6-3 2-6-6-3 2-6-2-6 6-3-2-6 6-2 3-6 6 2z" ${stroke}/>
      <circle cx="32" cy="32" r="7" ${stroke}/>
    `,
  },
  wrench: {
    viewBox: '0 0 64 64',
    content: `
      <path d="M44 10a10 10 0 00-10 14L10 48l6 6 24-24a10 10 0 0014-10l-7 7-7-2-2-7 6-8z" ${stroke}/>
    `,
  },
  handshake: {
    viewBox: '0 0 64 64',
    content: `
      <path d="M6 30l8-8 6 4 8-4 8 4 6-4 8 8v8l-12 12-6-4-10 4-10-4-6 4L6 38v-8z" ${stroke}/>
      <path d="M20 34l8 8 M28 34l8 8 M36 34l6 6" ${stroke}/>
    `,
  },
  gauge: {
    viewBox: '0 0 64 64',
    content: `
      <path d="M10 40a22 22 0 0144 0" ${stroke}/>
      <path d="M32 40l10-12" ${stroke}/>
      <circle cx="32" cy="40" r="3" fill="currentColor"/>
      <path d="M14 44h4 M46 44h4 M30 22v4" ${stroke}/>
    `,
  },
  diagnostics: {
    viewBox: '0 0 64 64',
    content: `
      <rect x="8" y="14" width="48" height="28" rx="3" ${stroke}/>
      <path d="M14 30l6-8 4 12 6-16 4 12 6-6" ${stroke}/>
      <path d="M20 48h24 M24 42v6 M40 42v6" ${stroke}/>
    `,
  },
  instagram: {
    viewBox: '0 0 24 24',
    content: `
      <rect x="3" y="3" width="18" height="18" rx="5" ${stroke}/>
      <circle cx="12" cy="12" r="4" ${stroke}/>
      <circle cx="17" cy="7" r="1" fill="currentColor"/>
    `,
  },
  facebook: {
    viewBox: '0 0 24 24',
    content: `
      <path d="M14 8h2V5h-3a3 3 0 00-3 3v3H8v3h2v7h3v-7h2.5l.5-3H13V8.5c0-.3.2-.5.5-.5z" fill="currentColor"/>
    `,
  },
  phone: {
    viewBox: '0 0 24 24',
    content: `
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z" ${stroke}/>
    `,
  },
  email: {
    viewBox: '0 0 24 24',
    content: `
      <rect x="3" y="5" width="18" height="14" rx="2" ${stroke}/>
      <path d="M3 7l9 6 9-6" ${stroke}/>
    `,
  },
  pin: {
    viewBox: '0 0 24 24',
    content: `
      <path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" ${stroke}/>
      <circle cx="12" cy="9" r="3" ${stroke}/>
    `,
  },
  'arrow-right': {
    viewBox: '0 0 24 24',
    content: `<path d="M4 12h16M14 6l6 6-6 6" ${stroke}/>`,
  },
  plus: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 5v14M5 12h14" ${stroke}/>`,
  },
  minus: {
    viewBox: '0 0 24 24',
    content: `<path d="M5 12h14" ${stroke}/>`,
  },
  flag: {
    viewBox: '0 0 64 64',
    content: `
      <path d="M14 56V8" ${stroke}/>
      <path d="M14 10h36l-6 10 6 10H14" ${stroke}/>
      <path d="M14 10h6v10h-6 M20 20h6v-10h6v10h-6 M32 10h6v10h-6 M38 20h6" fill="currentColor" stroke="none"/>
    `,
  },
  'file-text': {
    viewBox: '0 0 64 64',
    content: `
      <path d="M16 8h22l10 10v38a2 2 0 01-2 2H16a2 2 0 01-2-2V10a2 2 0 012-2z" ${stroke}/>
      <path d="M38 8v10h10" ${stroke}/>
      <path d="M22 30h20 M22 38h20 M22 46h14" ${stroke}/>
    `,
  },
  bag: {
    viewBox: '0 0 64 64',
    content: `
      <path d="M12 22h40l-4 32a4 4 0 01-4 4H20a4 4 0 01-4-4l-4-32z" ${stroke}/>
      <path d="M22 26v-6a10 10 0 0120 0v6" ${stroke}/>
    `,
  },
  'alert-triangle': {
    viewBox: '0 0 64 64',
    content: `
      <path d="M32 8L6 54h52L32 8z" ${stroke}/>
      <path d="M32 26v14" ${stroke}/>
      <circle cx="32" cy="47" r="2" fill="currentColor"/>
    `,
  },
  calculator: {
    viewBox: '0 0 64 64',
    content: `
      <rect x="12" y="8" width="40" height="48" rx="3" ${stroke}/>
      <rect x="18" y="14" width="28" height="10" rx="1" ${stroke}/>
      <circle cx="22" cy="32" r="2" fill="currentColor"/>
      <circle cx="32" cy="32" r="2" fill="currentColor"/>
      <circle cx="42" cy="32" r="2" fill="currentColor"/>
      <circle cx="22" cy="42" r="2" fill="currentColor"/>
      <circle cx="32" cy="42" r="2" fill="currentColor"/>
      <circle cx="42" cy="42" r="2" fill="currentColor"/>
      <circle cx="22" cy="50" r="2" fill="currentColor"/>
      <circle cx="32" cy="50" r="2" fill="currentColor"/>
      <circle cx="42" cy="50" r="2" fill="currentColor"/>
    `,
  },
  search: {
    viewBox: '0 0 64 64',
    content: `
      <circle cx="28" cy="28" r="16" ${stroke}/>
      <path d="M40 40l14 14" ${stroke}/>
    `,
  },
  'credit-card': {
    viewBox: '0 0 64 64',
    content: `
      <rect x="6" y="14" width="52" height="36" rx="3" ${stroke}/>
      <path d="M6 24h52" ${stroke}/>
      <path d="M14 40h10 M30 40h6" ${stroke}/>
    `,
  },
  message: {
    viewBox: '0 0 64 64',
    content: `
      <path d="M10 14h44a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H24l-10 8v-8h-4a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4z" ${stroke}/>
      <path d="M20 26h24 M20 34h16" ${stroke}/>
    `,
  },
};
