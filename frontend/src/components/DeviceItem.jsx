import { Link } from 'react-router-dom'

function deviceItem({ device }) {
  return (
    <div className='ticket'>
      <div>{new Date(device.createdAt).toLocaleString('en-US')}</div>
      <div>{device.inventoryNumber}</div>
      <div>{device.model}</div>
      <div>{device.condition}</div>
      <div>{device.batteryCycle}</div>
      <div>{device.description.substring(0, 10)}...</div>
      <div className={`status status-${device.status}`}>{device.status}</div>
     
     
      <Link to={`/device/${device._id}`} className='btn btn-reverse btn-sm'>
        View
      </Link>
    </div>
  )
}

export default deviceItem
