import { useSearchParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import EmptyState from '../../components/common/EmptyState';
import { products } from '../../data/products';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: 'var(--fs-3xl)', marginBottom: '0.5rem' }}>
        Search Results
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        {query ? `Showing results for "${query}" — ${results.length} found` : 'Enter a search term'}
      </p>

      {!query ? (
        <EmptyState icon="🔍" title="Search for gifts" message="Use the search bar in the navbar to find your perfect gift." />
      ) : results.length === 0 ? (
        <EmptyState
          icon="😕"
          title="No results found"
          message={`We couldn't find any products matching "${query}". Try a different search term.`}
          actionText="Browse All Products"
          actionLink="/products"
        />
      ) : (
        <div className="products-grid">
          {results.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      )}
    </div>
  );
};

export default SearchResults;