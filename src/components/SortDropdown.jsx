import React from "react";

const SortDropdown = ({ sortBy, setSortBy }) => {
  return (
    <select
      className="form-select"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      style={{ maxWidth: 220 }}
    >
      <option value="">Sort by</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="newest">Newest First</option>
      <option value="popularity">Popularity</option>
    </select>
  );
};

export default SortDropdown;