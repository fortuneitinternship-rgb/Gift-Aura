import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setMobileOpen(false);
    }
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Shop' },
    { to: '/products?category=birthday', label: 'Birthday' },
    { to: '/products?category=anniversary', label: 'Anniversary' },
    { to: '/products?category=valentine', label: 'Valentine' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setMobileOpen(false)}>
          <span className="logo-icon">🎁</span>
          <span className="logo-text">Gift<span className="logo-accent">Aura</span></span>
        </Link>

        <nav className={`navbar-nav ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <form className="mobile-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search gifts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">🔍</button>
          </form>
        </nav>

        <div className="navbar-actions">
          <form className="desktop-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search gifts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" aria-label="Search">🔍</button>
          </form>

          <Link to="/wishlist" className="icon-btn" aria-label="Wishlist">
            ❤️
            {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
          </Link>

          <Link to="/cart" className="icon-btn" aria-label="Cart">
            🛒
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>

          {user ? (
            <div className="user-menu">
              <Link to="/profile" className="icon-btn" aria-label="Profile">👤</Link>
              <button className="logout-btn" onClick={logout}>Logout</button>
            </div>
          ) : (
            <Link to="/login" className="login-link">Login</Link>
          )}

          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={mobileOpen ? 'open' : ''}></span>
            <span className={mobileOpen ? 'open' : ''}></span>
            <span className={mobileOpen ? 'open' : ''}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;