'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Cases.module.css';
import SectionTag from '@/components/ui/SectionTag';
import SectionTitle from '@/components/ui/SectionTitle';
import CaseModal from '@/components/CaseModal/CaseModal';
import { cases } from '@/data/cases';

export default function Cases() {
  const t = useTranslations('cases');
  const tm = useTranslations('caseModal');
  const [openCaseId, setOpenCaseId] = useState<string | null>(null);

  const rushHour = cases[0];
  const vikings = cases[1];
  const box4kids = cases[2];
  const liberandum = cases[3];

  return (
    <section className={styles.cases} id="cases">
      <div className="reveal">
        <SectionTag>{t('tag')}</SectionTag>
        <SectionTitle text={t.raw('title')} />
      </div>

      <div className={styles.casesGrid}>
        {/* Rush Hour — big left card */}
        <div className={styles.caseCard} onClick={() => setOpenCaseId('rushhour')}>
          <div
            className={styles.caseThumb}
            style={{ background: "url('/images/rush-hour/catalog.webp') center/cover no-repeat" }}
          />
          <div className={styles.caseBody}>
            <div>
              <div className={styles.caseName}>{t('rushhourName')}</div>
              <div className={styles.caseType}>{t('rushhourType')}</div>
            </div>
            <div className={styles.caseResult} style={{ background: '#fdf6e3', color: '#b8860b' }}>
              {t('rushhourResult')}
            </div>
          </div>
        </div>

        {/* Right column: Vikings, Box4Kids, Liberandum */}
        <div className={styles.casesRight}>
          {/* Vikings */}
          <div className={styles.caseCard} onClick={() => setOpenCaseId('vikings')}>
            <div
              className={styles.caseThumb}
              style={{ background: "url('/images/vikings/screenshot_menu.webp') center/cover no-repeat" }}
            />
            <div className={styles.caseBody}>
              <div>
                <div className={styles.caseName}>{t('vikingsName')}</div>
                <div className={styles.caseType}>{t('vikingsType')}</div>
              </div>
              <div className={styles.caseResult} style={{ background: '#fff3e6', color: '#dd7832' }}>
                {t('vikingsResult')}
              </div>
            </div>
          </div>

          {/* Box4Kids */}
          <div className={styles.caseCard} onClick={() => setOpenCaseId('box4kids')}>
            <div
              className={styles.caseThumb}
              style={{ background: "url('/images/box4kids/landing.webp') center/cover no-repeat" }}
            />
            <div className={styles.caseBody}>
              <div>
                <div className={styles.caseName}>{t('box4kidsName')}</div>
                <div className={styles.caseType}>{t('box4kidsType')}</div>
              </div>
              <div className={styles.caseResult} style={{ background: '#e8f0ff', color: '#0040DD' }}>
                <a
                  href="https://box4baby.uz/"
                  target="_blank"
                  rel="noopener"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  box4baby.uz ↗
                </a>
              </div>
            </div>
          </div>

          {/* Liberandum */}
          <div className={styles.caseCard} onClick={() => setOpenCaseId('liberandum')}>
            <div
              className={styles.caseThumb}
              style={{ background: "url('/images/liberandum/1_1_1_w_cryptocurrencies_1.webp') center/cover no-repeat" }}
            />
            <div className={styles.caseBody}>
              <div>
                <div className={styles.caseName}>{t('liberandumName')}</div>
                <div className={styles.caseType}>{t('liberandumType')}</div>
              </div>
              <div className={styles.caseResult} style={{ background: '#e8faf4', color: '#17b87a' }}>
                {t('liberandumResult')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {cases.map((c) => (
        <CaseModal
          key={c.id}
          caseData={c}
          isOpen={openCaseId === c.id}
          onClose={() => setOpenCaseId(null)}
        />
      ))}
    </section>
  );
}
