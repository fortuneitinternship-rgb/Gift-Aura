import { useState } from 'react';
import { validateEmail } from '../../utils/validation';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    setStatus({ type: 'success', message: '🎉 Thank you for subscribing! Check your inbox.' });
    setEmail('');
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section className="newsletter">
      <div className="newsletter-inner">
        <div className="newsletter-icon">💌</div>
        <h2>Stay in the Loop</h2>
        <p>Subscribe to get exclusive offers, gift ideas, and early access to new collections.</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe</button>
        </form>
        {status && <div className={`newsletter-msg ${status.type}`}>{status.message}</div>}
      </div>
    </section>
  );
};

export default Newsletter;