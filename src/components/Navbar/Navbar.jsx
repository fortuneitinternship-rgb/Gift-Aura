import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { categories } from '../../data/products'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const dropdownRef = useRef(null)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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

          {/* Nav Links */}
          <ul className={`ga-nav-links ${menuOpen ? 'open' : ''}`}>
            <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>

            {/* Category Dropdown */}
            <li className="ga-dropdown" ref={dropdownRef}>
              <button
                className="ga-dropdown-toggle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
              >
                Categories <i className={`bi bi-chevron-${dropdownOpen ? 'up' : 'down'}`}></i>
              </button>
              {dropdownOpen && (
                <ul className="ga-dropdown-menu">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <Link
                        to={`/products?category=${cat.id}`}
                        onClick={() => { setDropdownOpen(false); setMenuOpen(false) }}
                      >
                        <i className={`bi ${cat.icon}`} style={{ color: cat.color }}></i>
                        {cat.name}
                        <span className="ga-dropdown-count">{cat.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><NavLink to="/products" onClick={() => setMenuOpen(false)}>Shop</NavLink></li>
            <li><NavLink to="/offers" onClick={() => setMenuOpen(false)}>Offers</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          </ul>

          {/* Search Bar */}
          <div className="ga-search">
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Search gifts..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
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