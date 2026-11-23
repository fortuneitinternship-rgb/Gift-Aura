import React, { useState, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import Loader from '../../components/Loader/Loader'
import Button from '../../components/Button/Button'
import { products, categories } from '../../data/products'
import './ProductListing.css'

const ITEMS_PER_PAGE = 8

function ProductListing() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'all'

  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  // Simulate loading on mount / category change
  useEffect(() => {
    setLoading(true)
    setCurrentPage(1)
    const timer = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(timer)
  }, [activeCategory])

  // Filter products
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products
    return products.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const activeCategoryName =
    categories.find((c) => c.id === activeCategory)?.name || 'All Products'

  const handleCategoryChange = (catId) => {
    if (catId === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: catId })
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="ga-listing container-app">
      {/* Breadcrumb */}
      <nav className="ga-breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <i className="bi bi-chevron-right"></i>
        <Link to="/products">Products</Link>
        {activeCategory !== 'all' && (
          <>
            <i className="bi bi-chevron-right"></i>
            <span>{activeCategoryName}</span>
          </>
        )}
      </nav>

      {/* Page Title */}
      <div className="ga-listing-header">
        <h1 className="ga-listing-title">{activeCategoryName}</h1>
        <p className="section-subtitle">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'gift' : 'gifts'} found
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="ga-listing-filters">
        <button
          className={`ga-filter-chip ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('all')}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`ga-filter-chip ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Loading State */}
      {loading ? (
        <Loader text="Loading products..." />
      ) : filteredProducts.length === 0 ? (
        /* Empty State */
        <div className="ga-empty-state">
          <i className="bi bi-search"></i>
          <h3>No products found</h3>
          <p>Try selecting a different category or check back later.</p>
          <Button variant="primary" onClick={() => handleCategoryChange('all')}>
            View All Products
          </Button>
        </div>
      ) : (
        <>
          {/* Product Grid */}
          <div className="ga-product-grid">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="ga-pagination">
              <button
                className="ga-page-btn"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <i className="bi bi-chevron-left"></i> Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`ga-page-btn ${currentPage === page ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}

              <button
                className="ga-page-btn"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default ProductListing