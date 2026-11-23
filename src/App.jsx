import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import ProductListing from './pages/ProductListing/ProductListing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductListing />} />
          {/* Future routes */}
          <Route path="cart" element={<div className="container-app" style={{ padding: 64 }}><h1>Cart Page</h1></div>} />
          <Route path="wishlist" element={<div className="container-app" style={{ padding: 64 }}><h1>Wishlist Page</h1></div>} />
          <Route path="login" element={<div className="container-app" style={{ padding: 64 }}><h1>Login Page</h1></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App