import { useTranslations } from 'next-intl';
import SectionTag from '@/components/ui/SectionTag';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './CTA.module.css';

export default function CTA() {
  const t = useTranslations('cta');

  return (
    <section className={styles.ctaSection} id="cta">
      <ScrollReveal>
        <div className={styles.ctaBox}>
          <SectionTag style={{ justifyContent: 'center', marginBottom: 16 }}>
            {t('tag')}
          </SectionTag>

          <h2
            className={styles.ctaTitle}
            dangerouslySetInnerHTML={{
              __html: t.raw('title')
                .replace(/\{br\}/g, '<br />')
                .replace(
                  /<blue>(.*?)<\/blue>/g,
                  '<span class="blue">$1</span>',
                ),
            }}
          />

          <p className={styles.ctaSub}>{t('subtitle')}</p>

          <div className={styles.ctaRow}>
            <a href="mailto:hello@prilapps.com" className="btn-primary">
              {t('ctaPrimary')}
            </a>
          </div>

          <p className={styles.ctaNote}>{t('note')}</p>
        </div>
      </ScrollReveal>
    </section>
  );
}
