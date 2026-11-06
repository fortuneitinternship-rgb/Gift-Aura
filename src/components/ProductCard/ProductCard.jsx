import React from 'react'
import './ProductCard.css'

function Card({
  children,
  title,
  subtitle,
  footer,
  variant = 'default',
  hover = false,
  padding = 'md',
}) {
  const classes = [
    'ga-card',
    `ga-card-${variant}`,
    hover ? 'ga-card-hover' : '',
    `ga-card-pad-${padding}`,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {(title || subtitle) && (
        <div className="ga-card-header">
          {title && <h3 className="ga-card-title">{title}</h3>}
          {subtitle && <p className="ga-card-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="ga-card-body">{children}</div>
      {footer && <div className="ga-card-footer">{footer}</div>}
    </div>
  )
}

export default Card