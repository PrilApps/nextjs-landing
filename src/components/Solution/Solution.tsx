import { useTranslations } from 'next-intl';
import SectionTag from '@/components/ui/SectionTag';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './Solution.module.css';

export default function Solution() {
  const t = useTranslations('solution');

  return (
    <section className={styles.solution} id="solution">
      <div className={styles.solutionInner}>
        {/* Left column: text + checklist */}
        <ScrollReveal>
          <div>
            <SectionTag>{t('tag')}</SectionTag>
            <SectionTitle text={t.raw('title')} />
            <p
              style={{
                marginTop: '18px',
                fontSize: '0.92rem',
                lineHeight: 1.75,
                color: 'var(--body)',
              }}
            >
              {t('desc')}
            </p>
            <ul className={styles.checkList}>
              <li>{t('check1')}</li>
              <li>{t('check2')}</li>
              <li>{t('check3')}</li>
              <li>{t('check4')}</li>
              <li>{t('check5')}</li>
              <li>{t('check6')}</li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Right column: feature card */}
        <ScrollReveal delay="delay">
          <div className={styles.solutionCard}>
            {/* Feature 1 */}
            <div className={styles.solFeat}>
              <div className={styles.solFeatIco}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M11.5 2L4 11.5h6L8.5 18l7.5-9.5H10L11.5 2Z" stroke="#0040DD" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className={styles.solFeatTitle}>{t('feat1Title')}</div>
                <div className={styles.solFeatDesc}>{t('feat1Desc')}</div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className={styles.solFeat}>
              <div className={styles.solFeatIco}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="7.5" stroke="#0040DD" strokeWidth="1.6" />
                  <circle cx="10" cy="10" r="3.5" stroke="#0040DD" strokeWidth="1.6" />
                  <circle cx="10" cy="10" r="1.2" fill="#0040DD" />
                </svg>
              </div>
              <div>
                <div className={styles.solFeatTitle}>{t('feat2Title')}</div>
                <div className={styles.solFeatDesc}>{t('feat2Desc')}</div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className={styles.solFeat}>
              <div className={styles.solFeatIco}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="2.2" fill="#0040DD" />
                  <circle cx="3.5" cy="6" r="1.6" stroke="#0040DD" strokeWidth="1.4" />
                  <circle cx="3.5" cy="14" r="1.6" stroke="#0040DD" strokeWidth="1.4" />
                  <circle cx="16.5" cy="6" r="1.6" stroke="#0040DD" strokeWidth="1.4" />
                  <circle cx="16.5" cy="14" r="1.6" stroke="#0040DD" strokeWidth="1.4" />
                  <path d="M5 6.5L7.8 8.8M5 13.5L7.8 11.2M15 6.5L12.2 8.8M15 13.5L12.2 11.2" stroke="#0040DD" strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
                </svg>
              </div>
              <div>
                <div className={styles.solFeatTitle}>{t('feat3Title')}</div>
                <div className={styles.solFeatDesc}>{t('feat3Desc')}</div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className={styles.solFeat}>
              <div className={styles.solFeatIco}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3.5" y="9.5" width="13" height="9" rx="2" stroke="#0040DD" strokeWidth="1.6" />
                  <path d="M6.5 9.5V6.5a3.5 3.5 0 0 1 7 0" stroke="#0040DD" strokeWidth="1.6" strokeLinecap="round" opacity="0.35" />
                  <circle cx="10" cy="14" r="1.4" fill="#0040DD" />
                </svg>
              </div>
              <div>
                <div className={styles.solFeatTitle}>{t('feat4Title')}</div>
                <div className={styles.solFeatDesc}>{t('feat4Desc')}</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
