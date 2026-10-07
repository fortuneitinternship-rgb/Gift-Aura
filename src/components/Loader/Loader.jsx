import React from 'react'
import './Loader.css'

function Loader({ text = 'Loading...' }) {
  return (
    <div className="ga-loader-wrap">
      <div className="ga-loader-spinner"></div>
      <p className="ga-loader-text">{text}</p>
    </div>
  )
}

export default Loader