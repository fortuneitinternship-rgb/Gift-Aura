import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ product }) {
  const {
    id,
    name,
    price,
    originalPrice,
    discount,
    rating,
    reviews,
    image,
  } = product

  return (
    <div className="ga-product-card">
      <div className="ga-product-image-wrap">
        {discount && <span className="ga-badge-sale">-{discount}%</span>}
        <button className="ga-wishlist-btn" title="Add to Wishlist">
          <i className="bi bi-heart"></i>
        </button>
        <Link to={`/products/${id}`}>
          <img src={image} alt={name} className="ga-product-image" />
        </Link>
      </div>

      <div className="ga-product-body">
        <Link to={`/products/${id}`} className="ga-product-name">
          {name}
        </Link>

        <div className="ga-product-rating">
          <i className="bi bi-star-fill"></i>
          <span>{rating}</span>
          <span className="ga-rating-count">({reviews})</span>
        </div>

        <div className="ga-product-price">
          <span className="ga-price-current">₹{price}</span>
          {originalPrice && (
            <span className="ga-price-old">₹{originalPrice}</span>
          )}
        </div>

        <button className="ga-btn-primary ga-add-cart">
          <i className="bi bi-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard