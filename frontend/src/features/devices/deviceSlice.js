import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import deviceService from './deviceService'
// NOTE: use a extractErrorMessage function to save some repetition
import { extractErrorMessage } from '../../utils'

// NOTE: no need for isLoading, isSuccess, isError or message as we can leverage
// our AsyncThunkAction and get Promise reolved or rejected messages at
// component level
const initialState = {
  devices: null,
  device: null,
}

// Create new device
export const createDevice = createAsyncThunk(
  'devices/create',
  async (deviceData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await deviceService.createDevice(deviceData, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// Get user devices
export const getDevices = createAsyncThunk(
  'devices/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await deviceService.getDevices(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// Get user device
export const getDevice = createAsyncThunk(
  'devices/get',
  async (deviceId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await deviceService.getDevice(deviceId, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// Close device
export const inProgressTask = createAsyncThunk(
  'tasks/in-progress',
  async (taskId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await deviceService.inProgressTask(taskId, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)
// Close device
export const closeDevice = createAsyncThunk(
  'devices/close',
  async (deviceId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await deviceService.closeDevice(deviceId, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// NOTE: removed loading, isSuccess state as it can be infered from presence or
// absence of devices for simpler state management with no need for a reset
// function

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDevices.pending, (state) => {
        // NOTE: clear single device on devices page, this replaces need for
        // loading state on individual device
        state.device = null
      })
      .addCase(getDevices.fulfilled, (state, action) => {
        state.devices = action.payload
      })
      .addCase(getDevice.fulfilled, (state, action) => {
        state.device = action.payload
      })
      .addCase(closeDevice.fulfilled, (state, action) => {
        state.device = action.payload
        state.devices = state.devices.map((device) =>
          device._id === action.payload._id ? action.payload : device
        )
      })
  },
})

export default deviceSlice.reducer