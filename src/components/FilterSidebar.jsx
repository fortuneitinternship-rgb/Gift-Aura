import React, { useState } from "react";
import { categories, occasions } from "../data/products";
import "./FilterSidebar.css";

const FilterSidebar = ({ filters, setFilters, onClear }) => {
  const [open, setOpen] = useState(false);

  const update = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleCategory = (cat) => {
    update("category", filters.category === cat ? "" : cat);
  };
  const handleOccasion = (occ) => {
    update("occasion", filters.occasion === occ ? "" : occ);
  };

  return (
    <>
      {/* mobile toggle */}
      <button className="filter-toggle" onClick={() => setOpen(!open)}>
        {open ? "✕ Close Filters" : "☰ Filters"}
      </button>

      <aside className={`filter-sidebar ${open ? "open" : ""}`}>
        <div className="filter-header">
          <h5>Filters</h5>
          <button className="clear-filters" onClick={onClear}>
            Clear Filters
          </button>
        </div>

        {/* Category */}
        <div className="filter-group">
          <h6>Category</h6>
          {categories.map((c) => (
            <label key={c} className="filter-option">
              <input
                type="radio"
                checked={filters.category === c}
                onChange={() => handleCategory(c)}
              />
              {c}
            </label>
          ))}
        </div>

        {/* Price */}
        <div className="filter-group">
          <h6>Price Range (₹)</h6>
          <input
            type="range"
            min={0}
            max={3000}
            step={100}
            value={filters.maxPrice}
            onChange={(e) => update("maxPrice", Number(e.target.value))}
          />
          <p className="price-label">Up to ₹{filters.maxPrice}</p>
        </div>

        {/* Rating */}
        <div className="filter-group">
          <h6>Rating</h6>
          {[4, 3, 2, 1].map((r) => (
            <label key={r} className="filter-option">
              <input
                type="radio"
                name="rating"
                checked={filters.rating === r}
                onChange={() => update("rating", filters.rating === r ? 0 : r)}
              />
              {"⭐".repeat(r)} & up
            </label>
          ))}
        </div>

        {/* Occasion */}
        <div className="filter-group">
          <h6>Occasion</h6>
          {occasions.map((o) => (
            <label key={o} className="filter-option">
              <input
                type="radio"
                checked={filters.occasion === o}
                onChange={() => handleOccasion(o)}
              />
              {o}
            </label>
          ))}
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;