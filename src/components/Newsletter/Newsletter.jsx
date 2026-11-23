import React, { useState } from 'react'
import Button from '../Button/Button'
import './Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <section className="ga-newsletter">
      <div className="container-app">
        <div className="ga-newsletter-inner">
          <div className="ga-newsletter-content">
            <span className="ga-newsletter-emoji">💌</span>
            <h2>Get Exclusive Gift Offers</h2>
            <p>
              Subscribe to our newsletter for the latest deals, gift ideas,
              and seasonal collections. No spam, just joy.
            </p>
            <form className="ga-newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button variant="primary" size="md" type="submit" icon="bi bi-send">
                Subscribe
              </Button>
            </form>
            {subscribed && (
              <p className="ga-newsletter-success">
                <i className="bi bi-check-circle-fill"></i> Thanks for subscribing!
              </p>
            )}
          </div>
          <div className="ga-newsletter-art">
            <i className="bi bi-gift-fill"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter