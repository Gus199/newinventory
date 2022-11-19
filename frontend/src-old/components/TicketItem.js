import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";


function TicketItem({ ticket }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className='ticket'>
         <div>{ticket.status}</div>
      <div>{new Date(ticket.createdAt).toLocaleString('en-US')}</div>
      <div>{ticket.product}</div>
      <div>{user.name}</div>
      
      
    
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <Link to={`/ticket/${ticket._id}`} className='btn btn-reverse btn-sm'>
        View
      </Link>
    </div>
  )
}

export default TicketItem
