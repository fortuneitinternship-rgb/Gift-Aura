import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="ga-header">
      {/* Top Announcement Bar */}
      <div className="ga-topbar">
        <div className="container-app ga-topbar-inner">
          <span>
            <i className="bi bi-truck"></i> Free delivery on orders above ₹999
          </span>
          <div className="ga-topbar-links">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/orders">Track Order</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="ga-navbar">
        <div className="container-app ga-navbar-inner">
          {/* Logo */}
          <Link to="/" className="ga-logo">
            <i className="bi bi-gift-fill"></i>
            <span>Gift Aura</span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className={`ga-nav-links ${menuOpen ? 'open' : ''}`}>
            <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/products" onClick={() => setMenuOpen(false)}>Shop</NavLink></li>
            <li><NavLink to="/categories" onClick={() => setMenuOpen(false)}>Categories</NavLink></li>
            <li><NavLink to="/offers" onClick={() => setMenuOpen(false)}>Offers</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          </ul>

          {/* Search Bar */}
          <div className="ga-search">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Search gifts..." />
          </div>

          {/* Action Icons */}
          <div className="ga-nav-actions">
            <Link to="/login" className="ga-icon-btn" title="Login">
              <i className="bi bi-person"></i>
            </Link>
            <Link to="/wishlist" className="ga-icon-btn" title="Wishlist">
              <i className="bi bi-heart"></i>
            </Link>
            <Link to="/cart" className="ga-icon-btn ga-cart-btn" title="Cart">
              <i className="bi bi-cart3"></i>
              <span className="ga-cart-count">2</span>
            </Link>

            {/* Mobile Hamburger */}
            <button className="ga-hamburger" onClick={toggleMenu}>
              <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar