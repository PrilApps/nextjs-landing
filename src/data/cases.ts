// ─── Types ───────────────────────────────────────────────────────────────────

export interface CaseStat {
  valueKey: string;
  labelKey: string;
}

export interface ContentBlock {
  titleKey: string;
  textKey: string;
}

export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  /** Full-width image (spans entire gallery row) */
  full?: boolean;
}

export interface CaseStudy {
  id: string;
  titleKey: string;
  subtitleKey: string;
  tagKey: string;
  heroImage?: string;
  /** CSS gradient / style override when no hero image exists */
  heroStyle?: React.CSSProperties;
  heroClassName?: string;
  link?: string;
  stats: CaseStat[];
  challengeBlocks: ContentBlock[];
  solutionBlocks: ContentBlock[];
  resultBlocks: ContentBlock[];
  gallery: GalleryItem[];
  /** Path to gallery.json with all image paths for this project */
  galleryJsonPath?: string;
  /** Additional video files */
  videos?: string[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const cases: CaseStudy[] = [
  // ── Rush Hour ──────────────────────────────────────────────────────────────
  {
    id: 'rushhour',
    titleKey: 'rushhour.title',
    subtitleKey: 'rushhour.subtitle',
    tagKey: 'rushhour.tag',
    heroImage: '/images/rush-hour/catalog.webp',
    link: 'https://app.rush-hour.ae/',
    stats: [
      { valueKey: 'rushhour.stat1Num', labelKey: 'rushhour.stat1Label' },
      { valueKey: 'rushhour.stat2Num', labelKey: 'rushhour.stat2Label' },
      { valueKey: 'rushhour.stat3Num', labelKey: 'rushhour.stat3Label' },
    ],
    challengeBlocks: [
      {
        titleKey: 'rushhour.challengeTitle',
        textKey: 'rushhour.challengeText',
      },
    ],
    solutionBlocks: [
      {
        titleKey: 'rushhour.solutionTitle',
        textKey: 'rushhour.solutionText',
      },
    ],
    resultBlocks: [
      {
        titleKey: 'rushhour.resultTitle',
        textKey: 'rushhour.resultText',
      },
    ],
    gallery: [],
    galleryJsonPath: '/images/rush-hour/gallery.json',
  },

  // ── Vikings ────────────────────────────────────────────────────────────────
  {
    id: 'vikings',
    titleKey: 'vikings.title',
    subtitleKey: 'vikings.subtitle',
    tagKey: 'vikings.tag',
    heroImage: '/images/vikings/screenshot_menu.webp',
    stats: [
      { valueKey: 'vikings.stat1Num', labelKey: 'vikings.stat1Label' },
      { valueKey: 'vikings.stat2Num', labelKey: 'vikings.stat2Label' },
      { valueKey: 'vikings.stat3Num', labelKey: 'vikings.stat3Label' },
    ],
    challengeBlocks: [
      {
        titleKey: 'vikings.challengeTitle',
        textKey: 'vikings.challengeText',
      },
    ],
    solutionBlocks: [
      {
        titleKey: 'vikings.solutionTitle',
        textKey: 'vikings.solutionText',
      },
    ],
    resultBlocks: [
      {
        titleKey: 'vikings.resultTitle',
        textKey: 'vikings.resultText',
      },
    ],
    gallery: [],
    galleryJsonPath: '/images/vikings/gallery.json',
    videos: ['/videos/screen_recording_short.mp4', '/videos/screen_recording_full.mp4'],
  },

  // ── Box4Kids ───────────────────────────────────────────────────────────────
  {
    id: 'box4kids',
    titleKey: 'box4kids.title',
    subtitleKey: 'box4kids.subtitle',
    tagKey: 'box4kids.tag',
    heroImage: '/images/box4kids/landing.webp',
    link: 'https://box4baby.uz/',
    stats: [
      { valueKey: 'box4kids.stat1Num', labelKey: 'box4kids.stat1Label' },
      { valueKey: 'box4kids.stat2Num', labelKey: 'box4kids.stat2Label' },
      { valueKey: 'box4kids.stat3Num', labelKey: 'box4kids.stat3Label' },
    ],
    challengeBlocks: [
      {
        titleKey: 'box4kids.challengeTitle',
        textKey: 'box4kids.challengeText',
      },
    ],
    solutionBlocks: [
      {
        titleKey: 'box4kids.solutionTitle',
        textKey: 'box4kids.solutionText',
      },
    ],
    resultBlocks: [
      {
        titleKey: 'box4kids.resultTitle',
        textKey: 'box4kids.resultText',
      },
    ],
    gallery: [],
    galleryJsonPath: '/images/box4kids/gallery.json',
  },

  // ── Liberandum ─────────────────────────────────────────────────────────────
  {
    id: 'liberandum',
    titleKey: 'liberandum.title',
    subtitleKey: 'liberandum.subtitle',
    tagKey: 'liberandum.tag',
    heroImage: '/images/liberandum/1_1_1_w_cryptocurrencies_1.webp',
    stats: [
      { valueKey: 'liberandum.stat1Num', labelKey: 'liberandum.stat1Label' },
      { valueKey: 'liberandum.stat2Num', labelKey: 'liberandum.stat2Label' },
      { valueKey: 'liberandum.stat3Num', labelKey: 'liberandum.stat3Label' },
    ],
    challengeBlocks: [
      {
        titleKey: 'liberandum.challengeTitle',
        textKey: 'liberandum.challengeText',
      },
    ],
    solutionBlocks: [
      {
        titleKey: 'liberandum.solutionTitle',
        textKey: 'liberandum.solutionText',
      },
    ],
    resultBlocks: [
      {
        titleKey: 'liberandum.resultTitle',
        textKey: 'liberandum.resultText',
      },
    ],
    gallery: [],
    galleryJsonPath: '/images/liberandum/gallery.json',
  },
];

/** Lookup a single case by id */
export function getCaseById(id: string): CaseStudy | undefined {
  return cases.find((c) => c.id === id);
}
