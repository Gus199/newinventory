const express = require('express')
const router = express.Router()
const {
  getDevices,
  getDevice,
  createDevice,
  deleteDevice,
  updateDevice,
} = require('../controllers/deviceController')

const { protect } = require('../middleware/authMiddleware')

// Re-route into note router
const noteRouter = require('./noteRoutes')
router.use('/:deviceId/notes', noteRouter)

router.route('/').get(protect, getDevices).post(protect, createDevice)

router
  .route('/:id')
  .get(protect, getDevice)
  .delete(protect, deleteDevice)
  .put(protect, updateDevice)

module.exports = router
