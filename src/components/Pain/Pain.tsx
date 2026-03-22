import { useTranslations } from 'next-intl';
import SectionTag from '@/components/ui/SectionTag';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './Pain.module.css';

export default function Pain() {
  const t = useTranslations('pain');

  return (
    <section className={styles.pain} id="pain">
      <ScrollReveal>
        <div className={styles.painHeader}>
          <SectionTag>{t('tag')}</SectionTag>
          <SectionTitle text={t.raw('title')} />
        </div>
      </ScrollReveal>

      <div className={styles.painGrid}>
        {/* Card 1 */}
        <ScrollReveal>
          <div className={styles.painCard}>
            <div className={styles.painIcon}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="9" stroke="#0040DD" strokeWidth="1.6" />
                <path d="M11 6.5V11l2.8 2.8" stroke="#0040DD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 3l16 16" stroke="#0040DD" strokeWidth="1.6" strokeLinecap="round" opacity="0.25" />
              </svg>
            </div>
            <div className={styles.painTitle}>{t('card1Title')}</div>
            <p className={styles.painDesc}>{t('card1Desc')}</p>
          </div>
        </ScrollReveal>

        {/* Card 2 */}
        <ScrollReveal delay="delay">
          <div className={styles.painCard}>
            <div className={styles.painIcon}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="1.5" y="4.5" width="13" height="10" rx="2" stroke="#0040DD" strokeWidth="1.6" />
                <rect x="7.5" y="7.5" width="13" height="10" rx="2" stroke="#0040DD" strokeWidth="1.6" opacity="0.4" />
                <path d="M5 8h6M5 11h4" stroke="#0040DD" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
            <div className={styles.painTitle}>{t('card2Title')}</div>
            <p className={styles.painDesc}>{t('card2Desc')}</p>
          </div>
        </ScrollReveal>

        {/* Card 3 */}
        <ScrollReveal delay="delay2">
          <div className={styles.painCard}>
            <div className={styles.painIcon}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 4c-3.5 0-6 2.2-6 5 0 1.4.6 2.6 1.5 3.5L8 15h6l1.5-2.5C16.4 11.6 17 10.4 17 9c0-2.8-2.5-5-6-5Z" stroke="#0040DD" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M8 15v2.5M14 15v2.5" stroke="#0040DD" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div className={styles.painTitle}>{t('card3Title')}</div>
            <p className={styles.painDesc}>{t('card3Desc')}</p>
          </div>
        </ScrollReveal>

        {/* Card 4 */}
        <ScrollReveal>
          <div className={styles.painCard}>
            <div className={styles.painIcon}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="4" y="10" width="14" height="10" rx="2.5" stroke="#0040DD" strokeWidth="1.6" />
                <path d="M7.5 10V7a3.5 3.5 0 0 1 7 0v3" stroke="#0040DD" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="11" cy="15" r="1.5" fill="#0040DD" />
              </svg>
            </div>
            <div className={styles.painTitle}>{t('card4Title')}</div>
            <p className={styles.painDesc}>{t('card4Desc')}</p>
          </div>
        </ScrollReveal>

        {/* Card 5 */}
        <ScrollReveal delay="delay">
          <div className={styles.painCard}>
            <div className={styles.painIcon}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 4h16l-6 7v6l-4-2v-4L3 4Z" stroke="#0040DD" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={styles.painTitle}>{t('card5Title')}</div>
            <p className={styles.painDesc}>{t('card5Desc')}</p>
          </div>
        </ScrollReveal>

        {/* Card 6 */}
        <ScrollReveal delay="delay2">
          <div className={styles.painCard}>
            <div className={styles.painIcon}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2.5L20 7l-9 4.5L2 7l9-4.5Z" stroke="#0040DD" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M2 11.5l9 4.5 9-4.5" stroke="#0040DD" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
                <path d="M2 15.5l9 4 9-4" stroke="#0040DD" strokeWidth="1.6" strokeLinecap="round" opacity="0.25" />
              </svg>
            </div>
            <div className={styles.painTitle}>{t('card6Title')}</div>
            <p className={styles.painDesc}>{t('card6Desc')}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
