import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { formatPrice, calculateDiscount } from '../../utils/formatPrice';
import Rating from '../common/Rating';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const discount = calculateDiscount(product.originalPrice, product.price);
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/300x300?text=Gift+Aura';
            }}
          />
          {product.badge && <span className="product-badge">{product.badge}</span>}
          {discount > 0 && <span className="product-discount">-{discount}%</span>}
          {!product.inStock && <div className="product-out-of-stock">Out of Stock</div>}
        </div>
      </Link>

      <button
        className={`product-wishlist ${inWishlist ? 'active' : ''}`}
        onClick={() => toggleWishlist(product)}
        aria-label="Toggle wishlist"
      >
        {inWishlist ? '❤️' : '🤍'}
      </button>

      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <Rating value={product.rating} reviews={product.reviews} />
        <div className="product-footer">
          <div className="product-prices">
            <span className="product-price">{formatPrice(product.price)}</span>
            {product.originalPrice > product.price && (
              <span className="product-original">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <button
            className="product-add-btn"
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            aria-label="Add to cart"
          >
            🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;