import { useTranslations } from 'next-intl';
import styles from './Process.module.css';
import SectionTag from '@/components/ui/SectionTag';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function Process() {
  const t = useTranslations('process');

  const steps = [1, 2, 3, 4];

  return (
    <section className={styles.process} id="process">
      <ScrollReveal>
        <div className={styles.processHeader}>
          <div>
            <SectionTag>{t('tag')}</SectionTag>
            <SectionTitle text={t.raw('title')} />
          </div>
          <p className={styles.processNote}>{t('note')}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className={styles.processGrid}>
          {steps.map((num) => (
            <div className={styles.pStep} key={num}>
              <div className={styles.pNum}>{t(`step${num}Num`)}</div>
              <div className={styles.pTitle}>{t(`step${num}Title`)}</div>
              <p className={styles.pDesc}>{t(`step${num}Desc`)}</p>
              <span className={styles.pDuration}>{t(`step${num}Duration`)}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
