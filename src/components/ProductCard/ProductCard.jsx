import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card text-decoration-none">
      <img src={product.image} alt={product.name} className="product-card-img" />
      <div className="product-card-body">
        <h6 className="product-card-title">{product.name}</h6>
        <div className="product-card-price">
          <span className="price">₹{product.price}</span>
          <span className="mrp">₹{product.mrp}</span>
          <span className="discount">{product.discount}% off</span>
        </div>
        <div className="product-card-rating">⭐ {product.rating} ({product.reviews})</div>
      </div>
    </Link>
  );
};

export default ProductCard;