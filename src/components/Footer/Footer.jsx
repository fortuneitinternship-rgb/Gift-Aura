import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span>🎁</span> Gift<span className="footer-accent">Aura</span>
            </Link>
            <p className="footer-desc">
              Making every moment special with thoughtfully curated gifts for your loved ones.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Pinterest">📌</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/products?category=birthday">Birthday Gifts</Link></li>
              <li><Link to="/products?category=anniversary">Anniversary Gifts</Link></li>
              <li><Link to="/products?category=valentine">Valentine Gifts</Link></li>
              <li><Link to="/products?category=wedding">Wedding Gifts</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Gift-Aura. All rights reserved.</p>
          <div className="footer-payments">
            <span>💳</span>
            <span>🏦</span>
            <span>📱</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;