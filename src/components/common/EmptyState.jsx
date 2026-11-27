import { Link } from 'react-router-dom';
import Button from './Button';

const EmptyState = ({ icon = '📭', title = 'Nothing here', message = '', actionText, actionLink, onAction }) => (
  <div style={styles.container}>
    <div style={styles.icon}>{icon}</div>
    <h3 style={styles.title}>{title}</h3>
    {message && <p style={styles.message}>{message}</p>}
    {actionText && actionLink && (
      <Link to={actionLink}>
        <Button variant="primary">{actionText}</Button>
      </Link>
    )}
    {actionText && onAction && (
      <Button variant="primary" onClick={onAction}>{actionText}</Button>
    )}
  </div>
);

const styles = {
  container: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', padding: '4rem 2rem', textAlign: 'center', gap: '1rem',
  },
  icon: { fontSize: '4rem' },
  title: { fontSize: 'var(--fs-2xl)', color: 'var(--text-primary)' },
  message: { color: 'var(--text-secondary)', maxWidth: '400px' },
};

export default EmptyState;