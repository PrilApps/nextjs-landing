import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className={styles.footer}>
      <span className={styles.footerLogo}>{t('logo')}</span>

      <ul className={styles.footerLinks}>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            {t('linkTelegram')}
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            {t('linkLinkedin')}
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            {t('linkGithub')}
          </a>
        </li>
      </ul>

      <span className={styles.footerCopy}>{t('copyright')}</span>
    </footer>
  );
}
