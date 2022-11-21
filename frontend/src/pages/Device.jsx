import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Modal from 'react-modal'
import { FaPlus } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { getDevice, closeDevice,inProgressTask } from '../features/devices/deviceSlice'
import { getNotes, createNote } from '../features/notes/noteSlice'
import { useParams, useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import NoteItem from '../components/NoteItem'

const customStyles = {
  content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
}

Modal.setAppElement('#root')

function Device() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [noteText, setNoteText] = useState('')
  const { device } = useSelector((state) => state.devices)
  const { user } = useSelector((state) => state.auth)

  const { notes } = useSelector((state) => state.notes)

  // NOTE: no need for two useParams
  // const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { deviceId } = useParams()

  useEffect(() => {
    dispatch(getDevice(deviceId)).unwrap().catch(toast.error)
    dispatch(getNotes(deviceId)).unwrap().catch(toast.error)
  }, [deviceId, dispatch])


  // Close device
  const ondeviceProgress = () => {
    // NOTE: we can unwrap our AsyncThunkACtion here so no need for isError and
    // isSuccess state
    dispatch(inProgressTask(deviceId))
      .unwrap()
      .then(() => {
        toast.success('device Closed')
        navigate('/devices')
      })
      .catch(toast.error)
  }
  // Close device
  const ondeviceClose = () => {
    // NOTE: we can unwrap our AsyncThunkACtion here so no need for isError and
    // isSuccess state
    dispatch(closeDevice(deviceId))
      .unwrap()
      .then(() => {
        toast.success('device Closed')
        navigate('/devices')
      })
      .catch(toast.error)
  }

  // Create note submit
  const onNoteSubmit = (e) => {
    // NOTE: we can unwrap our AsyncThunkACtion here so no need for isError and
    // isSuccess state
    e.preventDefault()
    dispatch(createNote({ noteText, deviceId }))
      .unwrap()
      .then(() => {
        setNoteText('')
        closeModal()
      })
      .catch(toast.error)
  }

  // Open/close modal
  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  if (!device) {
    return <Spinner />
  }

  return (
    <div className='ticket-page'>
      <header className='ticket-header'>
        <BackButton />
        <h2 >
        Order Number : <span style={{color:'blue'}}>{device.inventoryNumber}</span>
          <span className={`status status-${device.status}`}>
            {device.status}
          </span>
        </h2>
        
        <h3>Created By : {user.name} On : {new Date(device.createdAt).toLocaleString('en-US')}</h3>
        <h3>Inventory ID : {device.inventoryNumber}</h3>
        <h3>Model : {device.model}</h3>
        <h3>Condition : {device.condition}</h3>
        <h3>Battery Cycle : {device.batteryCycle}</h3>
        <h3>Description : {device.description}</h3>
        <hr />
       
      </header>
      {notes ? (
        notes.map((note) => <NoteItem key={note._id} note={note} />)
      ) : (
        <Spinner />
      )}
      {device.status !== 'closed' && (
        <button onClick={openModal} className='btn'>
          <FaPlus /> Add Note
        </button>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Add Note'
      >
        <h2>Add Note</h2>
        <button className='btn-close' onClick={closeModal}>
          X
        </button>
        <form onSubmit={onNoteSubmit}>
          <div className='form-group'>
            <textarea
              name='noteText'
              id='noteText'
              className='form-control'
              placeholder='Note text'
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></textarea>
          </div>
          <div className='form-group'>
            <button className='btn' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </Modal>

     
{device.status !== 'in-progress' && (
        <button onClick={ondeviceProgress} className='btn btn-block  btn-in-progress '>
          In Progress
        </button>
      )}
      {device.status !== 'closed' && (
        <button onClick={ondeviceClose} className='btn btn-block btn-danger'>
         Paid
        </button>
      )}
       
    </div>
  )
}

export default Device
