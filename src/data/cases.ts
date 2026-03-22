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
    gallery: [
      { type: 'image', src: '/images/rush-hour/property_page.webp', alt: 'Rush Hour — property page', full: true },
      { type: 'image', src: '/images/rush-hour/card_1.webp', alt: 'Rush Hour — property card with discount' },
      { type: 'image', src: '/images/rush-hour/card_2.webp', alt: 'Rush Hour — property card' },
      { type: 'image', src: '/images/rush-hour/map_markercard.webp', alt: 'Rush Hour — map marker card' },
      { type: 'image', src: '/images/rush-hour/frame_79.webp', alt: 'Rush Hour — property gallery' },
      { type: 'image', src: '/images/rush-hour/image_11.webp', alt: 'Rush Hour — floor plan' },
      { type: 'image', src: '/images/rush-hour/catalog_2.webp', alt: 'Rush Hour — catalog with filters' },
      { type: 'image', src: '/images/rush-hour/image_4.webp', alt: 'Rush Hour — UI components', full: true },
    ],
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
    gallery: [
      { type: 'image', src: '/images/vikings/screenshot_login.webp', alt: 'Vikings — login screen' },
      { type: 'image', src: '/images/vikings/screenshot_profile.webp', alt: 'Vikings — player profile' },
      { type: 'image', src: '/images/vikings/screenshot_stats.webp', alt: 'Vikings — statistics' },
      { type: 'image', src: '/images/vikings/screenshot_achievements.webp', alt: 'Vikings — achievements' },
      { type: 'image', src: '/images/vikings/screenshot_teams.webp', alt: 'Vikings — teams' },
      { type: 'image', src: '/images/vikings/screenshot_player_panel.webp', alt: 'Vikings — player panel' },
      { type: 'video', src: '/videos/screen_recording_short.mp4', alt: 'Vikings — app demo (short)', full: true },
      { type: 'video', src: '/videos/screen_recording_full.mp4', alt: 'Vikings — app demo (full)', full: true },
    ],
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
    gallery: [
      { type: 'image', src: '/images/box4kids/3.1.1_m_main.webp', alt: 'Box4Kids — main screen' },
      { type: 'image', src: '/images/box4kids/2.1.1_m_welcome_1.webp', alt: 'Box4Kids — onboarding' },
      { type: 'image', src: '/images/box4kids/2.4.1_m_categories.webp', alt: 'Box4Kids — categories' },
      { type: 'image', src: '/images/box4kids/2.5.1_m_subscription.webp', alt: 'Box4Kids — subscription' },
      { type: 'image', src: '/images/box4kids/3.2.1_m_сurrent_box.webp', alt: 'Box4Kids — current box' },
      { type: 'image', src: '/images/box4kids/3.3.1_m_next_box.webp', alt: 'Box4Kids — next box' },
      { type: 'image', src: '/images/box4kids/2.6.1_m_delivery.webp', alt: 'Box4Kids — delivery' },
      { type: 'image', src: '/images/box4kids/4.1.1_m_children.webp', alt: 'Box4Kids — children' },
      { type: 'image', src: '/images/box4kids/5.1.1_m_menu.webp', alt: 'Box4Kids — menu' },
      { type: 'image', src: '/images/box4kids/3.1.1_d_main_-_1280.webp', alt: 'Box4Kids — desktop main', full: true },
    ],
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
    gallery: [
      { type: 'image', src: '/images/liberandum/1_2_1_w_cryptocurrencie.webp', alt: 'Liberandum — coin detail page', full: true },
      { type: 'image', src: '/images/liberandum/1_1_1_w_cryptocurrencies_pro.webp', alt: 'Liberandum — pro view' },
      { type: 'image', src: '/images/liberandum/1_2_1_w_cryptocurrencie_chart.webp', alt: 'Liberandum — price chart' },
      { type: 'image', src: '/images/liberandum/1_2_1_w_cryptocurrencie_tokenomics.webp', alt: 'Liberandum — tokenomics' },
      { type: 'image', src: '/images/liberandum/1_2_1_w_exchange.webp', alt: 'Liberandum — exchange' },
      { type: 'image', src: '/images/liberandum/2_1_list_exchanges.webp', alt: 'Liberandum — exchanges list' },
      { type: 'image', src: '/images/liberandum/4_1_1_w_profile.webp', alt: 'Liberandum — profile' },
      { type: 'image', src: '/images/liberandum/1_1_1_w_cryptocurrencies_search.webp', alt: 'Liberandum — search' },
      { type: 'image', src: '/images/liberandum/1_1_1_w_cryptocurrencies_basic.webp', alt: 'Liberandum — basic view', full: true },
    ],
  },
];

/** Lookup a single case by id */
export function getCaseById(id: string): CaseStudy | undefined {
  return cases.find((c) => c.id === id);
}
