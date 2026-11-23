import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './PromoBanner.css'

function PromoBanner() {
  return (
    <section className="ga-promo container-app">
      <div className="ga-promo-grid">
        {/* Big Promo */}
        <div className="ga-promo-card ga-promo-large">
          <div className="ga-promo-content">
            <span className="ga-promo-tag">Limited Time</span>
            <h2>Up to 40% Off on Gift Hampers</h2>
            <p>Curated with love, delivered with care. Don't miss out.</p>
            <Link to="/products">
              <Button variant="primary" size="md" icon="bi bi-bag">
                Shop Now
              </Button>
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&auto=format&fit=crop&q=70"
            alt="Gift hampers"
            className="ga-promo-image"
          />
        </div>

        {/* Two small promos */}
        <div className="ga-promo-small-grid">
          <div className="ga-promo-card ga-promo-small ga-promo-purple">
            <div className="ga-promo-small-content">
              <h3>Personalized Gifts</h3>
              <p>Add a personal touch</p>
              <Link to="/products?category=personalized" className="ga-promo-link">
                Explore <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <i className="bi bi-pencil-square ga-promo-bg-icon"></i>
          </div>

          <div className="ga-promo-card ga-promo-small ga-promo-pink">
            <div className="ga-promo-small-content">
              <h3>Fresh Flowers</h3>
              <p>Same-day delivery</p>
              <Link to="/products?category=flowers" className="ga-promo-link">
                Explore <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <i className="bi bi-flower1 ga-promo-bg-icon"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner