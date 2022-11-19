import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTickets } from '../features/tickets/ticketSlice'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import TicketItem from '../components/TicketItem'

function Tickets() {
  const { tickets } = useSelector((state) => state.tickets)

  const dispatch = useDispatch()

  // NOTE: only need one useEffect here

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  // NOTE: no need for loading state, we can check for absence of tickets
  // If we don't have tickets we are loading, if we do have tickets we just
  // need to update the tickets with latest tickets in the background
  if (!tickets) {
    return <Spinner />
  }

  return (
    <>
      <BackButton />
      <h1>Devices</h1>
      <div className='tickets'>
        <div className='ticket-headings'>
          <div>Date</div>
          <div>Inventory#</div>
          <div>Model</div>
          <div>Condition</div>
          <div>Battery</div>
          <div>Description</div>
          <div>Status</div>
         
         
        </div>
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </>
  )
}

export default Tickets
