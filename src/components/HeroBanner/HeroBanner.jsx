import { Link } from 'react-router-dom';
import Button from '../common/Button';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">🎉 Special Offer - Up to 40% Off</span>
        <h1 className="hero-title">
          Find the <span className="hero-highlight">Perfect Gift</span> for Every Occasion
        </h1>
        <p className="hero-subtitle">
          Discover thoughtfully curated gifts that make every moment memorable. 
          From birthdays to anniversaries, we've got you covered.
        </p>
        <div className="hero-actions">
          <Link to="/products">
            <Button size="lg" variant="primary">Shop Now →</Button>
          </Link>
          <Link to="/products?category=valentine">
            <Button size="lg" variant="outline">Explore Collections</Button>
          </Link>
        </div>
        <div className="hero-stats">
          <div><strong>500+</strong><span>Gift Items</span></div>
          <div><strong>50K+</strong><span>Happy Customers</span></div>
          <div><strong>4.8★</strong><span>Customer Rating</span></div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-card hero-card-1">🎁</div>
        <div className="hero-card hero-card-2">💝</div>
        <div className="hero-card hero-card-3">🌸</div>
        <div className="hero-glow"></div>
      </div>
    </section>
  );
};

export default HeroBanner;