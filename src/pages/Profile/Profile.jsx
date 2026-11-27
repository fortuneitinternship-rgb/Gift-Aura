import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import './Profile.css';

const Profile = () => {
  const { user, updateProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '', phone: user?.phone || '', address: user?.address || '' });
  const [saved, setSaved] = useState(false);

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="profile container">
      <div className="profile-card">
        <div className="profile-avatar">{user.name.charAt(0).toUpperCase()}</div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>

        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input name="name" value={form.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea name="address" rows="3" value={form.address} onChange={handleChange} />
          </div>
          <div className="profile-actions">
            <Button type="submit" variant="primary">Save Changes</Button>
            <Button variant="outline" onClick={() => { logout(); navigate('/'); }}>Logout</Button>
          </div>
          {saved && <p className="saved-msg">✅ Profile updated!</p>}
        </form>
      </div>
    </div>
  );
};

export default Profile;