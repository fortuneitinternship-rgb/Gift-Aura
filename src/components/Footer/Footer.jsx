import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-col brand-col">
          <h2 className="footer-logo">Gift Aura</h2>
          <p className="footer-desc">
            Curated, personalized gifts to make every moment memorable. Spread
            joy with Gift Aura.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">📘</a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">📸</a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer">🐦</a>
            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer">▶️</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-col">
          <h4>Categories</h4>
          <ul>
            <li><Link to="/category/home-decor">Home Decor</Link></li>
            <li><Link to="/category/gift-hampers">Gift Hampers</Link></li>
            <li><Link to="/category/personalized-gifts">Personalized Gifts</Link></li>
            <li><Link to="/category/flowers">Flowers</Link></li>
            <li><Link to="/category/accessories">Accessories</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-col">
          <h4>Customer Support</h4>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/shipping">Shipping & Returns</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>📍 123 Gift Street, Delhi, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@giftaura.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Gift Aura. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;