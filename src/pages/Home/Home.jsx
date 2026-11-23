import React from 'react'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import CategorySection from '../../components/CategorySection/CategorySection'
import PromoBanner from '../../components/PromoBanner/PromoBanner'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import FlashSale from '../../components/FlashSale/FlashSale'
import TrendingProducts from '../../components/TrendingProducts/TrendingProducts'
import Newsletter from '../../components/Newsletter/Newsletter'

function Home() {
  return (
    <>
      <HeroBanner />
      <CategorySection />
      <PromoBanner />
      <FeaturedProducts />
      <FlashSale />
      <TrendingProducts />
      <Newsletter />
    </>
  )
}

export default Home