'use client';

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Nav.module.css';

export default function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    // Replace the locale segment in the pathname
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <nav
      id="nav"
      className={`${styles.nav}${scrolled ? ` ${styles.scrolled}` : ''}`}
    >
      <a href="#" className={styles.logo}>
        <div className={styles.logoMark}>
          <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
            <circle cx="8" cy="8" r="3" fill="white" />
            <circle cx="8" cy="8" r="6.5" stroke="white" strokeWidth="1.4" opacity="0.45" />
            <path
              d="M8 1.5V4M8 12v2.5M1.5 8H4M12 8h2.5"
              stroke="white"
              strokeWidth="1.3"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>
        PrilApps
      </a>

      <ul className={styles.navLinks}>
        <li><a href="#pain">{t('problem')}</a></li>
        <li><a href="#cases">{t('cases')}</a></li>
        <li><a href="#services">{t('services')}</a></li>
        <li><a href="#process">{t('process')}</a></li>
        <li><a href="#team">{t('team')}</a></li>
      </ul>

      <div className={styles.navRight}>
        <div className={styles.langBtnGroup}>
          <button
            className={`${styles.langBtn}${locale === 'en' ? ` ${styles.active}` : ''}`}
            onClick={() => switchLocale('en')}
          >
            EN
          </button>
          <button
            className={`${styles.langBtn}${locale === 'ru' ? ` ${styles.active}` : ''}`}
            onClick={() => switchLocale('ru')}
          >
            RU
          </button>
        </div>
        <a href="#cta" className={styles.btnNav}>
          {t('cta')}
        </a>
      </div>
    </nav>
  );
}
