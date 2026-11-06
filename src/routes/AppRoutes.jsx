import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Cart from '../pages/Cart/Cart'
import Wishlist from '../pages/Wishlist/Wishlist'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Checkout from '../pages/Checkout/Checkout'
import NotFound from '../pages/NotFound/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes