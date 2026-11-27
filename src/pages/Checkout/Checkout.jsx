import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { validateRequired, validateEmail, validatePhone, validatePincode } from '../../utils/validation';
import Button from '../../components/common/Button';
import EmptyState from '../../components/common/EmptyState';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', city: '', pincode: '', payment: 'cod' });
  const [errors, setErrors] = useState({});

  const shipping = cartTotal >= 999 ? 0 : 99;
  const tax = Math.round(cartTotal * 0.05);
  const grandTotal = cartTotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <EmptyState
        icon="🛒"
        title="Nothing to checkout"
        message="Add some gifts to your cart first."
        actionText="Shop Now"
        actionLink="/products"
      />
    );
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!validateRequired(form.name)) errs.name = 'Name is required';
    if (!validateEmail(form.email)) errs.email = 'Valid email required';
    if (!validatePhone(form.phone)) errs.phone = 'Valid 10-digit phone required';
    if (!validateRequired(form.address)) errs.address = 'Address is required';
    if (!validateRequired(form.city)) errs.city = 'City is required';
    if (!validatePincode(form.pincode)) errs.pincode = 'Valid 6-digit pincode required';
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const orderId = 'GA' + Date.now().toString().slice(-8);
    clearCart();
    navigate('/order-success', { state: { orderId, amount: grandTotal } });
  };

  return (
    <div className="checkout container">
      <h1>Checkout</h1>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Shipping Details</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea name="address" rows="3" value={form.address} onChange={handleChange} />
            {errors.address && <span className="form-error">{errors.address}</span>}
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input name="city" value={form.city} onChange={handleChange} />
              {errors.city && <span className="form-error">{errors.city}</span>}
            </div>
            <div className="form-group">
              <label>Pincode</label>
              <input name="pincode" value={form.pincode} onChange={handleChange} />
              {errors.pincode && <span className="form-error">{errors.pincode}</span>}
            </div>
          </div>

          <h2>Payment Method</h2>
          <div className="payment-options">
            <label className={`payment-option ${form.payment === 'cod' ? 'selected' : ''}`}>
              <input type="radio" name="payment" value="cod" checked={form.payment === 'cod'} onChange={handleChange} />
              <span>💵 Cash on Delivery</span>
            </label>
            <label className={`payment-option ${form.payment === 'card' ? 'selected' : ''}`}>
              <input type="radio" name="payment" value="card" checked={form.payment === 'card'} onChange={handleChange} />
              <span>💳 Credit/Debit Card</span>
            </label>
            <label className={`payment-option ${form.payment === 'upi' ? 'selected' : ''}`}>
              <input type="radio" name="payment" value="upi" checked={form.payment === 'upi'} onChange={handleChange} />
              <span>📱 UPI</span>
            </label>
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth>Place Order ({formatPrice(grandTotal)})</Button>
        </form>

        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <div className="checkout-items">
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item">
                <span>{item.name} × {item.quantity}</span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="summary-row"><span>Subtotal</span><span>{formatPrice(cartTotal)}</span></div>
          <div className="summary-row"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span></div>
          <div className="summary-row"><span>Tax (5%)</span><span>{formatPrice(tax)}</span></div>
          <div className="summary-row total"><span>Total</span><span>{formatPrice(grandTotal)}</span></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;