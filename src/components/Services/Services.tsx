import { useTranslations } from 'next-intl';
import styles from './Services.module.css';
import SectionTag from '@/components/ui/SectionTag';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

const serviceIcons = [
  // 1. Web Services & Platforms
  <svg key="web" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <rect x="2" y="4" width="22" height="18" rx="3" stroke="#0040DD" strokeWidth="1.7" />
    <path d="M2 9h22" stroke="#0040DD" strokeWidth="1.7" />
    <circle cx="6" cy="6.5" r="1" fill="#0040DD" opacity="0.4" />
    <circle cx="9.5" cy="6.5" r="1" fill="#0040DD" opacity="0.4" />
    <path d="M9 14.5L7 17l2 2.5M17 14.5l2 2.5-2 2.5" stroke="#0040DD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.5 14l1 6" stroke="#0040DD" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
  </svg>,

  // 2. Mobile Applications
  <svg key="mobile" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <rect x="7" y="2" width="12" height="22" rx="3" stroke="#0040DD" strokeWidth="1.7" />
    <path d="M7 7h12M7 19h12" stroke="#0040DD" strokeWidth="1.5" opacity="0.35" />
    <circle cx="13" cy="22" r="1" fill="#0040DD" opacity="0.5" />
    <circle cx="17" cy="13" r="1.5" fill="#0040DD" opacity="0.9" />
    <circle cx="17" cy="13" r="3.5" stroke="#0040DD" strokeWidth="1.2" opacity="0.3" />
  </svg>,

  // 3. AI Modules & Automation
  <svg key="ai" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <circle cx="13" cy="13" r="2.8" fill="#0040DD" />
    <circle cx="4.5" cy="7.5" r="2" stroke="#0040DD" strokeWidth="1.6" />
    <circle cx="4.5" cy="18.5" r="2" stroke="#0040DD" strokeWidth="1.6" />
    <circle cx="21.5" cy="7.5" r="2" stroke="#0040DD" strokeWidth="1.6" />
    <circle cx="21.5" cy="18.5" r="2" stroke="#0040DD" strokeWidth="1.6" />
    <path d="M6.4 8.5L10.2 11M6.4 17.5L10.2 15M19.6 8.5L15.8 11M19.6 17.5L15.8 15" stroke="#0040DD" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
  </svg>,

  // 4. UI/UX & Motion Design
  <svg key="design" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M13 3L21 8v10L13 23 5 18V8L13 3Z" stroke="#0040DD" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M13 3v20M5 8l8 5 8-5" stroke="#0040DD" strokeWidth="1.5" strokeLinejoin="round" opacity="0.35" />
    <circle cx="13" cy="13" r="2.5" fill="#0040DD" opacity="0.15" stroke="#0040DD" strokeWidth="1.5" />
  </svg>,

  // 5. Integrations & API
  <svg key="api" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <rect x="1.5" y="9.5" width="7" height="7" rx="2" stroke="#0040DD" strokeWidth="1.6" />
    <rect x="17.5" y="9.5" width="7" height="7" rx="2" stroke="#0040DD" strokeWidth="1.6" />
    <path d="M8.5 11.5h9" stroke="#0040DD" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15.5 9.5l2 2-2 2" stroke="#0040DD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.5 14.5h9" stroke="#0040DD" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    <path d="M10.5 12.5l-2 2 2 2" stroke="#0040DD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
  </svg>,

  // 6. MVP for Investors
  <svg key="mvp" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M13 3c3.5 0 6.5 3.5 6.5 8L17 14H9L6.5 11C6.5 6.5 9.5 3 13 3Z" stroke="#0040DD" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M9 14l-3 4 4-1M17 14l3 4-4-1" stroke="#0040DD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
    <circle cx="13" cy="9.5" r="1.8" fill="#0040DD" opacity="0.25" stroke="#0040DD" strokeWidth="1.4" />
  </svg>,
];

const delays: Array<'delay' | 'delay2' | undefined> = [
  undefined, 'delay', 'delay2',
  undefined, 'delay', 'delay2',
];

export default function Services() {
  const t = useTranslations('services');

  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <section className={styles.services} id="services">
      <ScrollReveal>
        <div className={styles.servicesHeader}>
          <div>
            <SectionTag>{t('tag')}</SectionTag>
            <SectionTitle text={t.raw('title')} />
          </div>
        </div>
      </ScrollReveal>

      <div className={styles.servicesGrid}>
        {cards.map((num, i) => (
          <ScrollReveal key={num} delay={delays[i]}>
            <div className={styles.svcCard}>
              <div className={styles.svcIcon}>{serviceIcons[i]}</div>
              <div className={styles.svcName}>{t(`svc${num}Name`)}</div>
              <p className={styles.svcDesc}>{t(`svc${num}Desc`)}</p>
              {num === 6 && (
                <div className={styles.svcTags}>
                  <span className={styles.stag}>
                    {t('svc6Tag1')}
                  </span>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
