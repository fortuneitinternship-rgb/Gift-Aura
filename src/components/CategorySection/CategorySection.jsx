import React from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../SectionHeader/SectionHeader'
import { categories } from '../../data/products'
import './CategorySection.css'

function CategorySection() {
  return (
    <section className="ga-category-section container-app">
      <SectionHeader
        title="Shop by Category"
        subtitle="Find the perfect gift for every occasion"
        viewAllLink="/categories"
      />

      <div className="ga-category-grid">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/products?category=${cat.id}`}
            className="ga-category-card"
            style={{ '--cat-color': cat.color }}
          >
            <div className="ga-category-icon">
              <i className={`bi ${cat.icon}`}></i>
            </div>
            <h3 className="ga-category-name">{cat.name}</h3>
            <span className="ga-category-count">{cat.count} gifts</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategorySection