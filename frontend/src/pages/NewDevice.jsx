import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createDevice } from '../features/devices/deviceSlice'
import BackButton from '../components/BackButton'

function Newdevice() {
  const { user } = useSelector((state) => state.auth)

  const [inventoryNumber, setInventoryNumber] = useState("");
  const [model, setModel] = useState("");
  const [condition, setCondition] = useState("iphone");
  const [batteryCycle, setBatteryCycle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createDevice({inventoryNumber,model ,condition, batteryCycle,  description}))
      .unwrap()
      .then(() => {
        // We got a good response so navigate the user
        navigate('/devices')
        toast.success('New device created!')
      })
      .catch(toast.error)
  }

  return (
    <>
      <BackButton />
      <section className='heading'>
        <h1>Hi :{user.name}</h1>
        <p>Please fill out the form below</p>
        <h1>Create New Order</h1>
      </section>

      <section className='form'>
      
        <form onSubmit={onSubmit}>
        
        <div className='form-group'>
            <label htmlFor='product'>ORDER NUMBER</label>
            <input
              type="text"
              name='product'
              id='product'
              value={inventoryNumber}
              onChange={(e) => setInventoryNumber(e.target.value)}
              placeholder="Order Number"
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
              placeholder="Cycle Count"
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

export default Newdevice