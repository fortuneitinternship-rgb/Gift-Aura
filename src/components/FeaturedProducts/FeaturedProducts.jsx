import SectionHeader from '../common/SectionHeader';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../data/products';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const featured = products.filter((p) => p.rating >= 4.5).slice(0, 4);

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeader
          title="Featured Products"
          subtitle="Handpicked gifts loved by our customers"
          viewAllLink="/products"
        />
        <div className="products-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;