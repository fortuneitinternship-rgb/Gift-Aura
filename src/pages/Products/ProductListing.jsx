import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import FilterSidebar from '../../components/ProductFilters/FilterSidebar';
import SortDropdown from '../../components/ProductFilters/SortDropdown';
import { products } from '../../data/products';
import { categories } from '../../data/categories';
import Skeleton, { ProductCardSkeleton } from '../../components/common/Skeleton';
import EmptyState from '../../components/common/EmptyState';
import './ProductListing.css';

const ProductListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const categoryParam = searchParams.get('category') || 'all';
  const [selectedCategories, setSelectedCategories] = useState(
    categoryParam !== 'all' ? [categoryParam] : []
  );
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [selectedCategories, priceRange, minRating, sortBy]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && cat !== 'all') setSelectedCategories([cat]);
    else setSelectedCategories([]);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (minRating > 0) result = result.filter((p) => p.rating >= minRating);

    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'newest': result.sort((a, b) => b.id - a.id); break;
      default: break;
    }

    return result;
  }, [selectedCategories, priceRange, minRating, sortBy]);

  const toggleCategory = (slug) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((c) => c !== slug) : [...prev, slug]
    );
    if (slug) {
      searchParams.set('category', slug);
      setSearchParams(searchParams);
    } else {
      searchParams.delete('category');
      setSearchParams(searchParams);
    }
  };

  const activeFilterCount =
    selectedCategories.length +
    (priceRange[0] > 0 || priceRange[1] < 5000 ? 1 : 0) +
    (minRating > 0 ? 1 : 0);

  return (
    <div className="product-listing container">
      <div className="listing-header">
        <div>
          <h1>All Gifts</h1>
          <p>{filtered.length} products found</p>
        </div>
        <div className="listing-controls">
          <button className="filter-toggle" onClick={() => setFiltersOpen(!filtersOpen)}>
            🎛 Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>
          <SortDropdown sortBy={sortBy} onChange={setSortBy} />
        </div>
      </div>

      <div className="listing-body">
        <aside className={`listing-sidebar ${filtersOpen ? 'open' : ''}`}>
          <FilterSidebar
            categories={categories}
            selectedCategories={selectedCategories}
            onToggleCategory={toggleCategory}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            minRating={minRating}
            onRatingChange={setMinRating}
            onClose={() => setFiltersOpen(false)}
          />
        </aside>

        <div className="listing-main">
          {loading ? (
            <div className="products-grid">
              {[...Array(8)].map((_, i) => <ProductCardSkeleton key={i} />)}
            </div>
          ) : filtered.length === 0 ? (
            <EmptyState
              icon="🔍"
              title="No products found"
              message="Try adjusting your filters or browse all products."
              actionText="Clear Filters"
              onAction={() => {
                setSelectedCategories([]);
                setPriceRange([0, 5000]);
                setMinRating(0);
                searchParams.delete('category');
                setSearchParams(searchParams);
              }}
            />
          ) : (
            <div className="products-grid">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;