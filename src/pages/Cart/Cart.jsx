import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import EmptyState from '../../components/common/EmptyState';
import Button from '../../components/common/Button';
import './Cart.css';

const Cart = () => {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const shipping = cartTotal >= 999 || cartTotal === 0 ? 0 : 99;
  const tax = Math.round(cartTotal * 0.05);
  const grandTotal = cartTotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <EmptyState
        icon="🛒"
        title="Your cart is empty"
        message="Looks like you haven't added any gifts yet. Start shopping to fill it up!"
        actionText="Start Shopping"
        actionLink="/products"
      />
    );
  }

  return (
    <div className="cart container">
      <div className="cart-header">
        <h1>Shopping Cart ({cartItems.length} items)</h1>
        <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/80x80?text=Gift'; }}
              />
              <div className="cart-item-info">
                <Link to={`/product/${item.id}`} className="cart-item-name">{item.name}</Link>
                <span className="cart-item-price">{formatPrice(item.price)}</span>
              </div>
              <div className="cart-item-qty">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <div className="cart-item-total">{formatPrice(item.price * item.quantity)}</div>
              <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>✕</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row"><span>Subtotal</span><span>{formatPrice(cartTotal)}</span></div>
          <div className="summary-row"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span></div>
          <div className="summary-row"><span>Tax (5%)</span><span>{formatPrice(tax)}</span></div>
          <div className="summary-row total"><span>Total</span><span>{formatPrice(grandTotal)}</span></div>
          {shipping > 0 && (
            <p className="free-ship-note">Add {formatPrice(999 - cartTotal)} more for free shipping!</p>
          )}
          <Button variant="primary" size="lg" fullWidth onClick={() => navigate('/checkout')}>
            Proceed to Checkout
          </Button>
          <Link to="/products" className="continue-shopping">← Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;