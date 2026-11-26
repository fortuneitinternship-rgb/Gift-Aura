import React, { useState, useMemo } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import SortDropdown from "../components/SortDropdown";

const defaultFilters = {
  category: "",
  maxPrice: 3000,
  rating: 0,
  occasion: "",
};

const ProductListing = () => {
  const [filters, setFilters] = useState(defaultFilters);
  const [sortBy, setSortBy] = useState("");

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        (!filters.category || p.category === filters.category) &&
        p.price <= filters.maxPrice &&
        (!filters.rating || p.rating >= filters.rating) &&
        (!filters.occasion || p.occasion === filters.occasion)
    );

    switch (sortBy) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "newest": list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
      case "popularity": list.sort((a, b) => b.popularity - a.popularity); break;
      default: break;
    }
    return list;
  }, [filters, sortBy]);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h3>Gift Products ({filtered.length})</h3>
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <div className="row">
        <div className="col-12 col-md-3">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            onClear={() => setFilters(defaultFilters)}
          />
        </div>
        <div className="col-12 col-md-9">
          {filtered.length === 0 ? (
            <div className="text-center py-5">
              <h5>No products match your filters</h5>
              <button className="btn btn-outline-danger mt-2" onClick={() => setFilters(defaultFilters)}>
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="row g-4">
              {filtered.map((p) => (
                <div className="col-6 col-md-4 col-lg-3" key={p.id}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;