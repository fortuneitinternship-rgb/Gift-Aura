import React from 'react'
import './Button.css'

function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  icon,
}) {
  const classes = `ga-button ga-button-${variant} ga-button-${size}`

  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {icon && <i className={icon}></i>}
      {children}
    </button>
  )
}

export default Button