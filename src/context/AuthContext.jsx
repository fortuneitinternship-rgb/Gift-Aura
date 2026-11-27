import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('giftaura_user') || 'null');
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem('giftaura_user', JSON.stringify(user));
    else localStorage.removeItem('giftaura_user');
  }, [user]);

  const login = (email, password) => {
    // Mock login - in real app, call API
    const mockUser = {
      id: Date.now(),
      name: email.split('@')[0],
      email,
      phone: '',
      address: '',
    };
    setUser(mockUser);
    return { success: true };
  };

  const register = (name, email, password) => {
    const mockUser = { id: Date.now(), name, email, phone: '', address: '' };
    setUser(mockUser);
    return { success: true };
  };

  const logout = () => setUser(null);

  const updateProfile = (data) => {
    setUser((prev) => ({ ...prev, ...data }));
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};