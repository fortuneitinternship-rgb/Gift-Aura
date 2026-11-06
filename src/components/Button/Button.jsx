import React from 'react'
import './Button.css'

function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  disabled = false,
  loading = false,
  icon,
  fullWidth = false,
}) {
  const classes = [
    'ga-button',
    `ga-button-${variant}`,
    `ga-button-${size}`,
    fullWidth ? 'ga-button-full' : '',
    loading ? 'loading' : '',
  ].filter(Boolean).join(' ')

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="ga-button-spinner"></span>
      ) : (
        <>
          {icon && <i className={icon}></i>}
          {children}
        </>
      )}
    </button>
  )
}

export default Button