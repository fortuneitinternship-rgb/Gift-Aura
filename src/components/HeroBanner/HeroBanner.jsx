import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './HeroBanner.css'

function HeroBanner() {
  return (
    <section className="ga-hero">
      <div className="container-app">
        <div className="ga-hero-inner">
          {/* Content */}
          <div className="ga-hero-content">
            <span className="ga-hero-badge">✨ New Collection 2025</span>
            <h1 className="ga-hero-title">
              Make Every Moment <span className="ga-hero-highlight">Memorable</span>
            </h1>
            <p className="ga-hero-subtitle">
              Curated gifts for birthdays, anniversaries, and every celebration.
              Thoughtfully designed, beautifully delivered.
            </p>
            <div className="ga-hero-actions">
              <Link to="/products">
                <Button variant="primary" size="lg" icon="bi bi-bag-heart">
                  Shop Gifts
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="secondary" size="lg" icon="bi bi-grid">
                  Browse Categories
                </Button>
              </Link>
            </div>
            <div className="ga-hero-stats">
              <div>
                <strong>10K+</strong>
                <span>Happy Customers</span>
              </div>
              <div>
                <strong>500+</strong>
                <span>Gift Options</span>
              </div>
              <div>
                <strong>4.9★</strong>
                <span>Avg. Rating</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="ga-hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800&auto=format&fit=crop&q=80"
              alt="Gift Aura hero"
              className="ga-hero-image"
            />
            <div className="ga-hero-float ga-hero-float-1">
              <i className="bi bi-gift-fill"></i>
              <span>Free Delivery</span>
            </div>
            <div className="ga-hero-float ga-hero-float-2">
              <i className="bi bi-shield-check"></i>
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner