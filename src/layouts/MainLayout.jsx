import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './MainLayout.css'

function MainLayout() {
  return (
    <div className="ga-layout">
      <Navbar />
      <main className="ga-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout