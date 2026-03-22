import { useTranslations } from 'next-intl';
import SectionTag from '@/components/ui/SectionTag';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './Team.module.css';

const members = [
  { initials: 'SP', nameKey: 'member1Name', roleKey: 'member1Role', bioKey: 'member1Bio', delay: undefined },
  { initials: 'AS', nameKey: 'member2Name', roleKey: 'member2Role', bioKey: 'member2Bio', delay: 'delay' as const },
  { initials: 'VL', nameKey: 'member3Name', roleKey: 'member3Role', bioKey: 'member3Bio', delay: 'delay2' as const },
];

export default function Team() {
  const t = useTranslations('team');

  return (
    <section className={styles.team} id="team">
      <ScrollReveal>
        <SectionTag>{t('tag')}</SectionTag>
        <SectionTitle text={t.raw('title')} />
      </ScrollReveal>

      <div className={styles.teamGrid}>
        {members.map((m) => (
          <ScrollReveal key={m.initials} delay={m.delay}>
            <div className={styles.teamCard}>
              <div className={styles.teamPhoto}>{m.initials}</div>
              <div className={styles.teamName}>{t(m.nameKey)}</div>
              <div className={styles.teamRole}>{t(m.roleKey)}</div>
              <p className={styles.teamBio}>{t(m.bioKey)}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
