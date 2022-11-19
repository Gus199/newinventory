import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createTicket } from '../features/tickets/ticketSlice'
import BackButton from '../components/BackButton'

function NewTicket() {
  const { user } = useSelector((state) => state.auth)

  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [inventoryNumber, setInventoryNumber] = useState("");
  const [model, setModel] = useState("");
  const [condition, setCondition] = useState("iphone");
  const [batteryCycle, setBatteryCycle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createTicket({inventoryNumber,model ,condition, batteryCycle,  description}))
      .unwrap()
      .then(() => {
        // We got a good response so navigate the user
        navigate('/tickets')
        toast.success('New ticket created!')
      })
      .catch(toast.error)
  }

  return (
    <>
      <BackButton />
      <section className='heading'>
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Customer Name</label>
          <input type='text' className='form-control' value={name} disabled />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Customer Email</label>
          <input type='text' className='form-control' value={email} disabled />
        </div>
        <form onSubmit={onSubmit}>
        
        <div className='form-group'>
            <label htmlFor='product'>INVENTORY NUMBER</label>
            <input
              type="text"
              name='product'
              id='product'
              value={inventoryNumber}
              onChange={(e) => setInventoryNumber(e.target.value)}
              placeholder="Model"
              required
            />
          </div>
        
          <div className='form-group'>
            <label htmlFor='product'>MODEL</label>
            <input
              type="text"
              name='product'
              id='product'
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Model"
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='product'>Condition</label>
            <select
              name='condition'
              id='condition'
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value='Like New<'>Like New</option>
              <option value='Good'>Good</option>
              <option value='Fair'>Fair</option>
              <option value='Poor'>Poor</option>
            </select>
          </div>
 
          <div className='form-group'>
            <label htmlFor='product'>BATTERY CYCLE</label>
            <input
              type="text"
              name='product'
              id='product'
              value={batteryCycle}
              onChange={(e) => setBatteryCycle(e.target.value)}
              placeholder="Model"
              required
            />
          </div>
        
       
          <div className='form-group'>
            <label htmlFor='description'>DESCRIPTION</label>
            <textarea
              name='description'
              id='description'
              className='form-control'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
    
     
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewTicket
