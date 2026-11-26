// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import SearchResults from "./pages/SearchResults";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <header className="d-flex align-items-center justify-content-between px-4 py-3 shadow-sm bg-white">
        <Link to="/" className="text-decoration-none">
          <h4 className="m-0" style={{ color: "#ff6f61" }}>Gift Aura</h4>
        </Link>
        <SearchBar />
        <Link to="/shop" className="btn btn-outline-danger btn-sm">Shop</Link>
      </header>

      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/shop" element={<ProductListing />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;