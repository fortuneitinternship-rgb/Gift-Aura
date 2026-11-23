import React from 'react'
import { Link } from 'react-router-dom'
import './SectionHeader.css'

function SectionHeader({ title, subtitle, viewAllLink, viewAllText = 'View All' }) {
  return (
    <div className="ga-section-header">
      <div>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {viewAllLink && (
        <Link to={viewAllLink} className="ga-section-viewall">
          {viewAllText} <i className="bi bi-arrow-right"></i>
        </Link>
      )}
    </div>
  )
}

export default SectionHeader