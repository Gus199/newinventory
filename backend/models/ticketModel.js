const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    inventoryNumber: {
      type: Number,
      required: true,
      default: 0,
    },
    model: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },

    batteryCycle: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['new', 'in-progress', 'paid'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Ticket', ticketSchema)
