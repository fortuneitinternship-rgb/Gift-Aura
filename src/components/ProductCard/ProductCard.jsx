import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../Rating/Rating'
import './ProductCard.css'

function ProductCard({ product }) {
  const { id, name, price, originalPrice, rating, reviews, image, badge, inStock } = product
  const discount = originalPrice > price ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  const handleAddToCart = (e) => {
    e.preventDefault()
    console.log('Added to cart:', name)
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    console.log('Wishlisted:', name)
  }

  return (
    <Link to={`/products/${id}`} className={`ga-product-card ${!inStock ? 'out-of-stock' : ''}`}>
      {/* Image */}
      <div className="ga-product-image-wrap">
        <img src={image} alt={name} className="ga-product-image" loading="lazy" />

        {/* Badges */}
        <div className="ga-product-badges">
          {badge && <span className="ga-product-badge">{badge}</span>}
          {discount > 0 && <span className="ga-product-discount">-{discount}%</span>}
        </div>

        {/* Wishlist Button */}
        <button
          className="ga-product-wishlist"
          onClick={handleWishlist}
          aria-label="Add to wishlist"
        >
          <i className="bi bi-heart"></i>
        </button>

        {!inStock && <div className="ga-product-oos">Out of Stock</div>}
      </div>

      {/* Info */}
      <div className="ga-product-info">
        <h3 className="ga-product-name">{name}</h3>

        <Rating value={rating} reviews={reviews} />

        <div className="ga-product-price-row">
          <span className="ga-product-price">₹{price.toLocaleString()}</span>
          {originalPrice > price && (
            <span className="ga-product-original">₹{originalPrice.toLocaleString()}</span>
          )}
        </div>

        <button
          className="ga-product-add-btn"
          onClick={handleAddToCart}
          disabled={!inStock}
        >
          <i className="bi bi-cart-plus"></i>
          {inStock ? 'Add to Cart' : 'Notify Me'}
        </button>
      </div>
    </Link>
  )
}

export default ProductCard