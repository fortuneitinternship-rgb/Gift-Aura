import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import ProductCard from '../ProductCard/ProductCard'
import { getFeaturedProducts } from '../../data/products'
import './FeaturedProducts.css'

function FeaturedProducts() {
  const featured = getFeaturedProducts()

  return (
    <section className="ga-featured container-app">
      <SectionHeader
        title="Featured Gifts"
        subtitle="Handpicked favorites our customers love"
        viewAllLink="/products"
      />
      <div className="ga-product-grid">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts