const asyncHandler = require('express-async-handler')

const Note = require('../models/noteModel')
const Device = require('../models/deviceModel')

// NOTE: no need to get the user, we already have them on req object from
// protect middleware. The protect middleware already checks for valid user.

// @desc    Get notes for a device
// @route   GET /api/devices/:deviceId/notes
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
  const device = await Device.findById(req.params.deviceId)

  if (device.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const notes = await Note.find({ device: req.params.deviceId })

  res.status(200).json(notes)
})

// @desc    Create device note
// @route   POST /api/devices/:deviceId/notes
// @access  Private
const addNote = asyncHandler(async (req, res) => {
  const device = await Device.findById(req.params.deviceId)

  if (device.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const note = await Note.create({
    text: req.body.text,
    isStaff: false,
    device: req.params.deviceId,
    user: req.user.id,
  })

  res.status(200).json(note)
})

module.exports = {
  getNotes,
  addNote,
}
