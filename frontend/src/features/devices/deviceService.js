import axios from 'axios'

const API_URL = '/api/devices/'

// Create new device
const createDevice = async (deviceData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, deviceData, config)

  return response.data
}

// Get user devices
const getDevices = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Get user device
const getDevice = async (deviceId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + deviceId, config)

  return response.data
}
// Progress device
const inProgressTask = async (taskId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(
    API_URL + taskId,
    { status: 'in-progress' },
    config
  )

  return response.data
}
// Close device
const closeDevice = async (deviceId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(
    API_URL + deviceId,
    { status: 'paid' },
    config
  )

  return response.data
}

const deviceService = {
  createDevice,
  getDevices,
  getDevice,
  closeDevice,
  inProgressTask,
}

export default deviceService