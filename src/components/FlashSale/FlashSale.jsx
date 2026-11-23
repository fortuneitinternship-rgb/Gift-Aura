import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import Button from '../Button/Button'
import { getFlashSaleProducts } from '../../data/products'
import './FlashSale.css'

function FlashSale() {
  // Countdown: 8 hours from mount
  const [timeLeft, setTimeLeft] = useState(8 * 60 * 60)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  const pad = (n) => String(n).padStart(2, '0')
  const flashProducts = getFlashSaleProducts()

  return (
    <section className="ga-flash container-app">
      <div className="ga-flash-header">
        <div>
          <h2 className="ga-flash-title">
            <i className="bi bi-lightning-charge-fill"></i> Flash Sale
          </h2>
          <p className="section-subtitle">Hurry! Limited time deals with huge discounts.</p>
        </div>
        <div className="ga-flash-timer">
          <span className="ga-flash-timer-label">Ends in</span>
          <div className="ga-flash-timer-digits">
            <span className="ga-timer-box">{pad(hours)}</span>
            <span className="ga-timer-sep">:</span>
            <span className="ga-timer-box">{pad(minutes)}</span>
            <span className="ga-timer-sep">:</span>
            <span className="ga-timer-box">{pad(seconds)}</span>
          </div>
        </div>
      </div>

      <div className="ga-flash-grid">
        {flashProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="ga-flash-cta">
        <Link to="/products">
          <Button variant="secondary" size="md" icon="bi bi-arrow-right">
            View All Deals
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default FlashSale