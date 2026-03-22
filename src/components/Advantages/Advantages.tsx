import { useTranslations } from 'next-intl';
import SectionTag from '@/components/ui/SectionTag';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './Advantages.module.css';

const numbers = [
  { numKey: 'num1', labelKey: 'num1Label' },
  { numKey: 'num2', labelKey: 'num2Label' },
  { numKey: 'num3', labelKey: 'num3Label' },
  { numKey: 'num4', labelKey: 'num4Label' },
];

const reviews = [
  { initials: 'AK', textKey: 'review1Text', nameKey: 'review1Name', roleKey: 'review1Role' },
  { initials: 'MS', textKey: 'review2Text', nameKey: 'review2Name', roleKey: 'review2Role' },
  { initials: 'DI', textKey: 'review3Text', nameKey: 'review3Name', roleKey: 'review3Role' },
];

function Stars() {
  return (
    <div className={styles.reviewStars}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>&#9733;</span>
      ))}
    </div>
  );
}

export default function Advantages() {
  const t = useTranslations('advantages');

  return (
    <section className={styles.advantages} id="advantages">
      <ScrollReveal>
        <SectionTag>{t('tag')}</SectionTag>
        <SectionTitle text={t.raw('title')} />
      </ScrollReveal>

      <ScrollReveal>
        <div className={styles.advTop}>
          {numbers.map((n) => (
            <div key={n.numKey} className={styles.advNumCard}>
              <div className={styles.advNumber}>{t(n.numKey)}</div>
              <div className={styles.advLabel}>{t(n.labelKey)}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className={styles.reviewsGrid}>
          {reviews.map((r) => (
            <div key={r.initials} className={styles.reviewCard}>
              <Stars />
              <p className={styles.reviewText}>{t(r.textKey)}</p>
              <div className={styles.reviewAuthor}>
                <div className={styles.reviewAva}>{r.initials}</div>
                <div>
                  <div className={styles.reviewName}>{t(r.nameKey)}</div>
                  <div className={styles.reviewRole}>{t(r.roleKey)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
