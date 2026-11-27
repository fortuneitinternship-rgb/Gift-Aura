import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ProductListing from '../pages/Products/ProductListing';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import SearchResults from '../pages/SearchResults/SearchResults';
import Cart from '../pages/Cart/Cart';
import Wishlist from '../pages/Wishlist/Wishlist';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Profile from '../pages/Profile/Profile';
import Checkout from '../pages/Checkout/Checkout';
import OrderSuccess from '../pages/OrderSuccess/OrderSuccess';
import NotFound from '../pages/NotFound/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<ProductListing />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/search" element={<SearchResults />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/order-success" element={<OrderSuccess />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;