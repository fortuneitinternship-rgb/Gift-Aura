import React from 'react'
import './Loader.css'

function Loader({ text = 'Loading...', size = 'md', fullScreen = false }) {
  const classes = [
    'ga-loader-wrap',
    fullScreen ? 'ga-loader-fullscreen' : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <div className={`ga-loader-spinner ga-loader-${size}`}></div>
      {text && <p className="ga-loader-text">{text}</p>}
    </div>
  )
}

export default Loader