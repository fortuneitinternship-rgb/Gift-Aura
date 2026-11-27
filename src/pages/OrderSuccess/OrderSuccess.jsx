import { useLocation, Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import Button from '../../components/common/Button';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const location = useLocation();
  const { orderId = 'GA00000000', amount = 0 } = location.state || {};

  return (
    <div className="order-success">
      <div className="success-card">
        <div className="success-icon">✅</div>
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for shopping with Gift-Aura. Your gift is on its way! 🎁</p>
        <div className="order-details">
          <div><span>Order ID:</span><strong>{orderId}</strong></div>
          <div><span>Total Paid:</span><strong>{formatPrice(amount)}</strong></div>
          <div><span>Estimated Delivery:</span><strong>3–5 business days</strong></div>
        </div>
        <div className="success-actions">
          <Link to="/products"><Button variant="primary">Continue Shopping</Button></Link>
          <Link to="/"><Button variant="outline">Back to Home</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;