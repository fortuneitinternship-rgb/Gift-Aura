import React from 'react'
import './Rating.css'

function Rating({ value = 0, reviews, size = 'md' }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className={`ga-rating ga-rating-${size}`}>
      <div className="ga-rating-stars">
        {stars.map((star) => {
          const fill = value >= star ? 'full' : value >= star - 0.5 ? 'half' : 'empty'
          return (
            <i
              key={star}
              className={`bi bi-star${fill === 'full' ? '-fill' : fill === 'half' ? '-half' : ''}`}
            ></i>
          )
        })}
      </div>
      <span className="ga-rating-value">{value.toFixed(1)}</span>
      {reviews !== undefined && (
        <span className="ga-rating-reviews">({reviews})</span>
      )}
    </div>
  )
}

export default Rating