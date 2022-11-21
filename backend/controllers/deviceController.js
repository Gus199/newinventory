const asyncHandler = require('express-async-handler')

const Device = require('../models/deviceModel')

// NOTE: no need to get the user, we already have them on req object from
// protect middleware. The protect middleware already checks for valid user.

// @desc    Get user devices
// @route   GET /api/devices
// @access  Private
const getDevices = asyncHandler(async (req, res) => {
  const devices = await Device.find({ user: req.user.id })

  res.status(200).json(devices)
})

// @desc    Get user device
// @route   GET /api/devices/:id
// @access  Private
const getDevice = asyncHandler(async (req, res) => {
  const device = await Device.findById(req.params.id)

  if (!device) {
    res.status(404)
    throw new Error('device not found')
  }

  if (device.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  res.status(200).json(device)
})

// @desc    Create new device
// @route   POST /api/devices
// @access  Private
const createDevice = asyncHandler(async (req, res) => {
  const {inventoryNumber, model,condition, batteryCycle, description} = req.body

  if (!inventoryNumber ||!model ||!condition ||!batteryCycle ||!description  ) {
    res.status(400)
    throw new Error('Please add a inventoryID and description')
  }

  const device = await Device.create({
    inventoryNumber,
    model,
    condition, 
    batteryCycle,
    description,
    user: req.user.id,
    status: 'new',
  })

  res.status(201).json(device)
})

// @desc    Delete device
// @route   DELETE /api/devices/:id
// @access  Private
const deleteDevice = asyncHandler(async (req, res) => {
  const device = await Device.findById(req.params.id)

  if (!device) {
    res.status(404)
    throw new Error('device not found')
  }

  if (device.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  await device.remove()

  res.status(200).json({ success: true })
})

// @desc    Update device
// @route   PUT /api/devices/:id
// @access  Private
const updateDevice = asyncHandler(async (req, res) => {
  const device = await Device.findById(req.params.id)

  if (!device) {
    res.status(404)
    throw new Error('device not found')
  }

  if (device.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  const updatedDevice = await Device.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.status(200).json(updatedDevice)
})

module.exports = {
  getDevices,
  getDevice,
  createDevice,
  deleteDevice,
  updateDevice,
}
