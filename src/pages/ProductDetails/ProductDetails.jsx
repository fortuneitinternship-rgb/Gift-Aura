import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { formatPrice, calculateDiscount } from '../../utils/formatPrice';
import Rating from '../../components/common/Rating';
import Button from '../../components/common/Button';
import ProductCard from '../../components/ProductCard/ProductCard';
import EmptyState from '../../components/common/EmptyState';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [addedMsg, setAddedMsg] = useState(false);

  if (!product) {
    return (
      <EmptyState
        icon="😕"
        title="Product not found"
        message="The product you're looking for doesn't exist or has been removed."
        actionText="Back to Shop"
        actionLink="/products"
      />
    );
  }

  const discount = calculateDiscount(product.originalPrice, product.price);
  const inWishlist = isInWishlist(product.id);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    setAddedMsg(true);
    setTimeout(() => setAddedMsg(false), 2500);
  };

  return (
    <div className="product-details container">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/products">Shop</Link> / <span>{product.name}</span>
      </nav>

      <div className="details-grid">
        <div className="details-image">
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/500x500?text=Gift+Aura'; }}
          />
          {discount > 0 && <span className="details-discount">-{discount}% OFF</span>}
        </div>

        <div className="details-info">
          {product.badge && <span className="details-badge">{product.badge}</span>}
          <h1>{product.name}</h1>
          <div className="details-rating">
            <Rating value={product.rating} reviews={product.reviews} />
            <span className="stock-badge">{product.inStock ? '✅ In Stock' : '❌ Out of Stock'}</span>
          </div>

          <div className="details-prices">
            <span className="details-price">{formatPrice(product.price)}</span>
            {product.originalPrice > product.price && (
              <>
                <span className="details-original">{formatPrice(product.originalPrice)}</span>
                <span className="details-savings">You save {formatPrice(product.originalPrice - product.price)}</span>
              </>
            )}
          </div>

          <p className="details-desc">{product.description}</p>

          <div className="details-tags">
            {product.tags.map((tag) => <span key={tag} className="tag">#{tag}</span>)}
          </div>

          <div className="details-actions">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <Button variant="primary" size="lg" onClick={handleAddToCart} disabled={!product.inStock}>
              🛒 Add to Cart
            </Button>
            <button className={`wishlist-btn ${inWishlist ? 'active' : ''}`} onClick={() => toggleWishlist(product)}>
              {inWishlist ? '❤️' : '🤍'}
            </button>
          </div>

          {addedMsg && <div className="added-toast">✅ Added to cart!</div>}

          <div className="details-meta">
            <span>🚚 Free delivery on orders above ₹999</span>
            <span>🔄 7-day easy returns</span>
            <span>🔒 Secure payment</span>
          </div>
        </div>
      </div>

      <div className="details-tabs">
        <div className="tabs-header">
          {['description', 'reviews'].map((tab) => (
            <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>
              {tab === 'description' ? 'Description' : `Reviews (${product.reviews})`}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {activeTab === 'description' ? (
            <div>
              <p>{product.description}</p>
              <p>This beautiful gift is carefully packaged in an elegant Gift-Aura box, making it ready to give. Perfect for {product.tags.join(', ')} lovers.</p>
            </div>
          ) : (
            <div className="reviews-placeholder">
              <Rating value={product.rating} reviews={product.reviews} />
              <p>Customer reviews will appear here. Average rating: {product.rating}/5 based on {product.reviews} reviews.</p>
            </div>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <div className="related-section">
          <h2>You May Also Like</h2>
          <div className="products-grid">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;