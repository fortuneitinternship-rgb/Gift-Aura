import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import Card from '../../components/ProductCard/ProductCard'
import Loader from '../../components/Loader/Loader'
import './Home.css'

function Home() {
  const [loading, setLoading] = useState(false)

  const handleLoadingTest = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  if (loading) {
    return <Loader text="Loading Gift Aura..." fullScreen />
  }

  return (
    <div className="home-preview">
      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="container-app">
          <h1>Gift Aura – Global Layout Test</h1>
          <p className="section-subtitle">
            Responsive layout with reusable components, theme tokens, and breakpoints.
          </p>
          <div className="home-hero-actions">
            <Button variant="primary" size="lg" icon="bi bi-gift">
              Shop Gifts
            </Button>
            <Button variant="secondary" size="lg" icon="bi bi-heart">
              Wishlist
            </Button>
          </div>
        </div>
      </section>

      {/* BUTTON VARIANTS */}
      <section className="home-section container-app">
        <h2 className="section-title">Button Variants</h2>
        <p className="section-subtitle">All reusable button states and sizes.</p>
        <div className="home-row">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
        </div>
        <div className="home-row" style={{ marginTop: 16 }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button fullWidth>Full Width</Button>
        </div>
      </section>

      {/* CARD VARIANTS */}
      <section className="home-section container-app">
        <h2 className="section-title">Card Variants</h2>
        <p className="section-subtitle">Reusable card with optional hover and footer.</p>
        <div className="grid-4 home-card-grid">
          <Card
            title="Birthday Gift"
            subtitle="Curated collections"
            hover
            footer={<Button size="sm" fullWidth>View</Button>}
          >
            <p>Perfect gifts for birthday celebrations.</p>
          </Card>
          <Card title="Anniversary" subtitle="Romantic picks" hover variant="elevated">
            <p>Celebrate love with premium gifts.</p>
          </Card>
          <Card title="Wedding" subtitle="Elegant options" hover variant="outline">
            <p>Thoughtful wedding gift selections.</p>
          </Card>
          <Card title="Festive" subtitle="Seasonal specials" hover variant="flat">
            <p>Festival-ready gift hampers.</p>
          </Card>
        </div>
      </section>

      {/* LOADER */}
      <section className="home-section container-app">
        <h2 className="section-title">Loader Component</h2>
        <p className="section-subtitle">Trigger the fullscreen loader preview.</p>
        <Button variant="primary" onClick={handleLoadingTest}>
          Show Loader (2s)
        </Button>
        <div className="home-loader-row">
          <Loader text="Small" size="sm" />
          <Loader text="Medium" size="md" />
          <Loader text="Large" size="lg" />
        </div>
      </section>
    </div>
  )
}

export default Home