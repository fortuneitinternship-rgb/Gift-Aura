import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import EmptyState from '../../components/common/EmptyState';
import Button from '../../components/common/Button';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <EmptyState
        icon="💝"
        title="Your wishlist is empty"
        message="Save your favorite gifts here to purchase them later."
        actionText="Discover Gifts"
        actionLink="/products"
      />
    );
  }

  return (
    <div className="wishlist container">
      <h1>My Wishlist ({wishlist.length})</h1>
      <div className="wishlist-grid">
        {wishlist.map((item) => (
          <div key={item.id} className="wishlist-card">
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/200x200?text=Gift'; }}
              />
            </Link>
            <div className="wishlist-info">
              <Link to={`/product/${item.id}`} className="wishlist-name">{item.name}</Link>
              <span className="wishlist-price">{formatPrice(item.price)}</span>
              <div className="wishlist-actions">
                <Button variant="primary" size="sm" onClick={() => addToCart(item)} disabled={!item.inStock}>
                  Add to Cart
                </Button>
                <button className="wishlist-remove" onClick={() => removeFromWishlist(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;