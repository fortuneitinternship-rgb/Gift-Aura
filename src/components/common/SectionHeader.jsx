import { Link } from 'react-router-dom';

const SectionHeader = ({ title, subtitle, viewAllLink, viewAllText = 'View All' }) => (
  <div style={styles.container}>
    <div>
      <h2 style={styles.title}>{title}</h2>
      {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
    </div>
    {viewAllLink && (
      <Link to={viewAllLink} style={styles.link}>
        {viewAllText} →
      </Link>
    )}
  </div>
);

const styles = {
  container: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
    marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem',
  },
  title: { fontSize: 'var(--fs-3xl)', color: 'var(--text-primary)' },
  subtitle: { color: 'var(--text-secondary)', marginTop: '0.25rem' },
  link: {
    color: 'var(--primary)', fontWeight: 600, fontSize: 'var(--fs-sm)',
    transition: 'color var(--transition-fast)',
  },
};

export default SectionHeader;