import './ProductFilters.css';

const SortDropdown = ({ sortBy, onChange }) => {
  return (
    <select className="sort-dropdown" value={sortBy} onChange={(e) => onChange(e.target.value)}>
      <option value="featured">Featured</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="rating">Highest Rated</option>
      <option value="newest">Newest First</option>
    </select>
  );
};

export default SortDropdown;