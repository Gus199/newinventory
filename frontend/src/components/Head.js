import React from 'react'
import { Link } from 'react-router-dom'
import './Head.css'

const Head = () => {
  return (
    <div className="hero">
        <div className="hero-banner">
          <h1>Please choose from an option below</h1>
          <p>
          An efficient Inventory Management App helps inventory businesses carry out the most crucial tasks such as tracking shipment whereabouts, tracking products level, sales, purchases, orders, stocks, and much more
          </p>
          <Link to="/new-device" className="btn hero-btn scroll-link">Create a new Order</Link>
          <Link to="/devices" className="btn hero-btn scroll-link">View Orders</Link>

        </div>
      </div>
  )
}

export default Head