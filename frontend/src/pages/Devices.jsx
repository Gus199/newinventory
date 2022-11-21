import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDevices } from '../features/devices/deviceSlice'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import DeviceItem from '../components/DeviceItem'

function Devices() {
  const { devices } = useSelector((state) => state.devices)

  const dispatch = useDispatch()

  // NOTE: only need one useEffect here

  useEffect(() => {
    dispatch(getDevices())
  }, [dispatch])

  // NOTE: no need for loading state, we can check for absence of devices
  // If we don't have devices we are loading, if we do have devices we just
  // need to update the devices with latest devices in the background
  if (!devices) {
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
        {devices.map((device) => (
          <DeviceItem key={device._id} device={device} />
        ))}
      </div>
    </>
  )
}

export default Devices
