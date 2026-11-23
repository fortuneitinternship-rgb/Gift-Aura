import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import ProductCard from '../ProductCard/ProductCard'
import { getTrendingProducts } from '../../data/products'
import './TrendingProducts.css'

function TrendingProducts() {
  const trending = getTrendingProducts()

  return (
    <section className="ga-trending">
      <div className="container-app">
        <SectionHeader
          title="🔥 Trending Now"
          subtitle="What everyone's gifting this season"
          viewAllLink="/products"
        />
        <div className="ga-product-grid">
          {trending.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingProducts