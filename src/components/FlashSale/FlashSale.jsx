import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../data/products';
import './FlashSale.css';

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 8, minutes: 45, seconds: 30 });
  const flashProducts = products.filter((p) => p.originalPrice > p.price).slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section className="flash-sale">
      <div className="container">
        <div className="flash-header">
          <div>
            <h2 className="flash-title">⚡ Flash Sale</h2>
            <p className="flash-subtitle">Limited time offer — grab them before they're gone!</p>
          </div>
          <div className="flash-timer">
            <div className="timer-block"><span>{pad(timeLeft.hours)}</span><small>Hrs</small></div>
            <span className="timer-sep">:</span>
            <div className="timer-block"><span>{pad(timeLeft.minutes)}</span><small>Min</small></div>
            <span className="timer-sep">:</span>
            <div className="timer-block"><span>{pad(timeLeft.seconds)}</span><small>Sec</small></div>
          </div>
        </div>
        <div className="products-grid">
          {flashProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/products" className="flash-view-all">View All Deals →</Link>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;