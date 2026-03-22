'use client';

import { useEffect, useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import type { CaseStudy } from '@/data/cases';
import styles from './CaseModal.module.css';

interface CaseModalProps {
  caseData: CaseStudy;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseModal({ caseData, isOpen, onClose }: CaseModalProps) {
  const t = useTranslations('caseModal');

  // Escape key to close
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  // Load gallery images from JSON
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  useEffect(() => {
    if (isOpen && caseData.galleryJsonPath) {
      fetch(caseData.galleryJsonPath)
        .then((r) => r.json())
        .then((images: string[]) => setGalleryImages(images))
        .catch(() => setGalleryImages([]));
    }
  }, [isOpen, caseData.galleryJsonPath]);

  // Determine hero class for gradient-based heroes
  const heroClassMap: Record<string, string> = {
    'modal-hero-2': styles.modalHero2,
    'modal-hero-3': styles.modalHero3,
  };

  const heroClassName = caseData.heroClassName
    ? heroClassMap[caseData.heroClassName] || ''
    : '';

  // Translation helper using dot-notation keys from caseData
  const tKey = (key: string): string => {
    try {
      return t(key);
    } catch {
      return key;
    }
  };

  return (
    <div
      className={`${styles.modalOverlay}${isOpen ? ` ${styles.open}` : ''}`}
      onClick={onClose}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className={styles.modalClose} onClick={onClose} aria-label="Close">
          ✕
        </button>

        {/* Hero */}
        <div
          className={`${styles.modalHero}${heroClassName ? ` ${heroClassName}` : ''}`}
          style={
            caseData.heroImage
              ? { background: `url('${caseData.heroImage}') center/cover no-repeat` }
              : caseData.heroStyle || {}
          }
        >
          {!caseData.heroImage && (
            <div className={styles.modalScreen}>
              <div className={styles.scrLine} style={{ width: '85%' }} />
              <div className={styles.scrAccent} />
              <div className={styles.scrLine} style={{ width: '65%' }} />
              <div className={styles.scrLine} style={{ width: '40%' }} />
            </div>
          )}
        </div>

        {/* Body */}
        <div className={styles.modalBody}>
          <div className={styles.modalTag}>{tKey(caseData.tagKey)}</div>
          <h2 className={styles.modalTitle}>{tKey(caseData.titleKey)}</h2>
          <p className={styles.modalSubtitle}>{tKey(caseData.subtitleKey)}</p>

          {/* Stats */}
          <div className={styles.modalStats}>
            {caseData.stats.map((stat, i) => (
              <div className={styles.modalStat} key={i}>
                <div className={styles.modalStatNum}>{tKey(stat.valueKey)}</div>
                <div className={styles.modalStatLabel}>{tKey(stat.labelKey)}</div>
              </div>
            ))}
          </div>

          {/* Challenge */}
          <div className={styles.modalSectionTitle}>{t('challenge')}</div>
          <div className={styles.modalBlocks}>
            {caseData.challengeBlocks.map((block, i) => (
              <div className={styles.modalBlock} key={i}>
                <div className={styles.modalBlockTitle}>{tKey(block.titleKey)}</div>
                <div className={styles.modalBlockText}>{tKey(block.textKey)}</div>
              </div>
            ))}
          </div>

          {/* Solution */}
          <div className={styles.modalSectionTitle}>{t('solutionLabel')}</div>
          <div className={styles.modalBlocks}>
            {caseData.solutionBlocks.map((block, i) => (
              <div className={styles.modalBlock} key={i}>
                <div className={styles.modalBlockTitle}>{tKey(block.titleKey)}</div>
                <div className={styles.modalBlockText}>{tKey(block.textKey)}</div>
              </div>
            ))}
          </div>

          {/* Result */}
          <div className={styles.modalSectionTitle}>{t('result')}</div>
          <div className={styles.modalBlocks}>
            {caseData.resultBlocks.map((block, i) => (
              <div className={styles.modalBlock} key={i}>
                <div className={styles.modalBlockTitle}>{tKey(block.titleKey)}</div>
                <div className={styles.modalBlockText}>{tKey(block.textKey)}</div>
              </div>
            ))}
          </div>

          {/* Gallery — loaded from JSON, lazy img tags */}
          {galleryImages.length > 0 && (
            <div className={styles.modalGallery}>
              {galleryImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={caseData.id}
                  loading="lazy"
                />
              ))}
            </div>
          )}

          {/* Videos */}
          {caseData.videos?.map((src, i) => (
            <video
              key={i}
              src={src}
              controls
              playsInline
              muted
              preload="metadata"
              style={{ width: '100%', borderRadius: 12, border: '1px solid var(--border)', marginTop: 16 }}
            />
          ))}

          {/* Link to live site */}
          {caseData.link && (
            <div style={{ marginTop: 24 }}>
              <a
                href={caseData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {t('visitSite')} ↗
              </a>
            </div>
          )}

          {/* CTA */}
          <div className={styles.modalCta}>
            <div className={styles.modalCtaText}>
              <strong>{t('wantResults')}</strong>
              <span>{t('discussFree')}</span>
            </div>
            <a href="#cta" className="btn-primary" onClick={onClose}>
              {t('startProject')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
