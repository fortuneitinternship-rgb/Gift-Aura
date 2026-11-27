import SectionHeader from '../common/SectionHeader';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../data/products';
import './TrendingProducts.css';

const TrendingProducts = () => {
  const trending = products.filter((p) => p.badge === 'Trending' || p.badge === 'Bestseller').slice(0, 4);

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          title="🔥 Trending Now"
          subtitle="What everyone is gifting this season"
          viewAllLink="/products"
        />
        <div className="products-grid">
          {trending.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;