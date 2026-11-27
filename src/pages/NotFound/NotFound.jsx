import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const NotFound = () => (
  <div style={{ minHeight: 'calc(100vh - var(--navbar-height))', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
    <div style={{ fontSize: '6rem', fontWeight: 700, color: 'var(--primary)' }}>404</div>
    <h1 style={{ fontSize: 'var(--fs-2xl)', marginBottom: '0.5rem' }}>Page Not Found</h1>
    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '400px' }}>
      Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
    </p>
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Link to="/"><Button variant="primary">Go Home</Button></Link>
      <Link to="/products"><Button variant="outline">Browse Gifts</Button></Link>
    </div>
  </div>
);

export default NotFound;