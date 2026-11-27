import './ProductFilters.css';

const FilterSidebar = ({
  categories, selectedCategories, onToggleCategory,
  priceRange, onPriceChange, minRating, onRatingChange, onClose,
}) => {
  const maxPrice = 5000;

  return (
    <div className="filter-sidebar">
      <div className="filter-header-mobile">
        <h3>Filters</h3>
        <button onClick={onClose} className="filter-close">✕</button>
      </div>

      <div className="filter-group">
        <h4>Category</h4>
        <div className="filter-options">
          {categories.map((cat) => (
            <label key={cat.id} className="filter-checkbox">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.slug)}
                onChange={() => onToggleCategory(cat.slug)}
              />
              <span>{cat.icon} {cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4>Price Range</h4>
        <div className="price-range">
          <input
            type="range"
            min="0"
            max={maxPrice}
            step="100"
            value={priceRange[1]}
            onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
          />
          <div className="price-labels">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div className="filter-group">
        <h4>Customer Rating</h4>
        <div className="filter-options">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="filter-radio">
              <input
                type="radio"
                name="rating"
                checked={minRating === rating}
                onChange={() => onRatingChange(rating)}
              />
              <span>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)} & up</span>
            </label>
          ))}
          <label className="filter-radio">
            <input type="radio" name="rating" checked={minRating === 0} onChange={() => onRatingChange(0)} />
            <span>All Ratings</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;