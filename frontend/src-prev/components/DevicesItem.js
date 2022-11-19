import React from 'react'
import { Link } from 'react-router-dom'
const DevicesItem = ({ticket}) => {
  return (
    <div className='ticket'>
      <div>{new Date(ticket.createdAt).toLocaleString('en-US')}</div>
      <div>{ticket.brand}</div>
      <div>{ticket.batteryCycle}</div>
      <div>{ticket.description}</div>
      <div>{ticket.model}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <Link to={`/ticket/${ticket._id}`} className='btn btn-reverse btn-sm'>
        View
      </Link>
    </div>
  )
}

export default DevicesItem