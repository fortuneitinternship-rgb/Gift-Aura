import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { validateEmail, validatePassword, validateRequired } from '../../utils/validation';
import Button from '../../components/common/Button';
import './Register.css';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!validateRequired(form.name)) errs.name = 'Name is required';
    if (!validateEmail(form.email)) errs.email = 'Enter a valid email';
    if (!validatePassword(form.password)) errs.password = 'Min 6 characters';
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match';
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    register(form.name, form.email, form.password);
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <span className="auth-icon">🎁</span>
          <h1>Create Account</h1>
          <p>Join Gift-Aura and start gifting!</p>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Full Name</label>
            <input name="name" placeholder="John Doe" value={form.name} onChange={handleChange} />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input name="password" type="password" placeholder="Min 6 characters" value={form.password} onChange={handleChange} />
            {errors.password && <span className="form-error">{errors.password}</span>}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input name="confirmPassword" type="password" placeholder="Re-enter password" value={form.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
          </div>
          <Button type="submit" variant="primary" size="lg" fullWidth>Create Account</Button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;