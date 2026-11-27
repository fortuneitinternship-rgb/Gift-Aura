import HeroBanner from '../../components/HeroBanner/HeroBanner';
import CategorySection from '../../components/CategorySection/CategorySection';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import TrendingProducts from '../../components/TrendingProducts/TrendingProducts';
import FlashSale from '../../components/FlashSale/FlashSale';
import Newsletter from '../../components/Newsletter/Newsletter';
import './Home.css';

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <CategorySection />
      <FeaturedProducts />
      <FlashSale />
      <TrendingProducts />
      <Newsletter />
    </main>
  );
};

export default Home;