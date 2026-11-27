import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import { categories } from '../../data/categories';
import './CategorySection.css';

const CategorySection = () => {
  return (
    <section className="section category-section">
      <div className="container">
        <SectionHeader
          title="Shop by Category"
          subtitle="Find the perfect gift for every special occasion"
          viewAllLink="/products"
        />
        <div className="category-grid">
          {categories.map((cat) => (
            <Link to={`/products?category=${cat.slug}`} key={cat.id} className="category-card">
              <div className="category-icon">{cat.icon}</div>
              <h3 className="category-name">{cat.name}</h3>
              <p className="category-count">{cat.count} products</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;