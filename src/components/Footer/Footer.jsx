import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="ga-footer">
      <div className="container-app">
        <div className="ga-footer-grid">
          {/* About */}
          <div className="ga-footer-col">
            <div className="ga-footer-logo">
              <i className="bi bi-gift-fill"></i>
              <span>Gift Aura</span>
            </div>
            <p>
              Making every moment memorable with the perfect gift.
              Curated collections, fast delivery, and secure shopping.
            </p>
            <div className="ga-footer-social">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="ga-footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Shop</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="ga-footer-col">
            <h4>Customer Service</h4>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/orders">Track Order</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="ga-footer-col">
            <h4>Contact Us</h4>
            <ul className="ga-footer-contact">
              <li><i className="bi bi-geo-alt"></i> 123 Gift Street, Bengaluru</li>
              <li><i className="bi bi-telephone"></i> +91 98765 43210</li>
              <li><i className="bi bi-envelope"></i> hello@giftaura.com</li>
              <li><i className="bi bi-clock"></i> Mon–Sat, 9 AM – 8 PM</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="ga-footer-bottom">
          <p>© 2025 Gift Aura. All rights reserved.</p>
          <p>Made with 💜 by SamaShivarani</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer