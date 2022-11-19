import React from 'react'
import { Link } from 'react-router-dom'
import './Head.css'

const Head = () => {
  return (
    <div className="hero">
        <div className="hero-banner">
          <h1>Please choose from an option below</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            inventore fugiat eius reprehenderit architecto ullam.
          </p>
          <Link to="/new-ticket" className="btn hero-btn scroll-link">Create Ticket</Link>
          <Link to="/tickets" className="btn hero-btn scroll-link">View Tickets</Link>

        </div>
      </div>
  )
}

export default Head