import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="ga-navbar">
      {/* Top bar */}
      <div className="ga-navbar-top">
        <div className="container-app ga-navbar-top-inner">
          <span>🎁 Free delivery on orders above ₹999</span>
          <div className="ga-navbar-top-links">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container-app ga-navbar-main">
        {/* Logo */}
        <Link to="/" className="ga-logo">
          <i className="bi bi-gift-fill"></i>
          <span>Gift Aura</span>
        </Link>

        {/* Nav Links */}
        <ul className="ga-nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/products">Shop</NavLink></li>
          <li><NavLink to="/products">Categories</NavLink></li>
          <li><NavLink to="/about">Offers</NavLink></li>
        </ul>

        {/* Search Bar */}
        <div className="ga-search">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Search gifts..." />
        </div>

        {/* User Actions */}
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
        </div>
      </div>
    </nav>
  )
}

export default Navbar