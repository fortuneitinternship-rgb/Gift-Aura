import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './layouts/MainLayout';
import AppRoutes from './routes/AppRoutes';

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/*" element={<AppRoutes />} />
            </Route>
          </Routes>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;