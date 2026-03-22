import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className={styles.hero}>
      <div className={styles.heroBlob1} />
      <div className={styles.heroBlob2} />

      <div className={styles.heroInner}>
        {/* Pill */}
        <div className={styles.heroPill}>
          <div className={styles.heroPillDot}>
            <svg viewBox="0 0 10 10" fill="none" width="10" height="10">
              <path
                d="M5 1v4l2.5 2.5"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span>{t('pill')}</span>
        </div>

        {/* Title with rich text blue spans */}
        <h1
          className={styles.heroTitle}
          dangerouslySetInnerHTML={{
            __html: t.raw('title')
              .replace(/\{br\}/g, '<br />')
              .replace(/<blue>(.*?)<\/blue>/g, '<span class="blue">$1</span>'),
          }}
        />

        {/* Subtitle */}
        <p className={styles.heroSub}>{t('subtitle')}</p>

        {/* Actions */}
        <div className={styles.heroActions}>
          <Button variant="primary" href="#cta">
            {t('ctaPrimary')}
          </Button>
          <Button variant="ghost" href="#cases">
            {t('ctaGhost')}
          </Button>
        </div>

        {/* Stats */}
        <div className={styles.heroStats}>
          <div>
            <div className={styles.heroStatNum}>
              {t('stat1Num')}<sup>{t('stat1Sup')}</sup>
            </div>
            <div className={styles.heroStatLabel}>{t('stat1Label')}</div>
          </div>
          <div>
            <div className={styles.heroStatNum}>
              {t('stat2Num')}<sup>{t('stat2Sup')}</sup>
            </div>
            <div className={styles.heroStatLabel}>{t('stat2Label')}</div>
          </div>
          <div>
            <div className={styles.heroStatNum}>
              {t('stat3Num')}<sup>{t('stat3Sup')}</sup>
            </div>
            <div className={styles.heroStatLabel}>{t('stat3Label')}</div>
          </div>
          <div>
            <div className={styles.heroStatNum}>{t('stat4Num')}</div>
            <div className={styles.heroStatLabel}>{t('stat4Label')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
