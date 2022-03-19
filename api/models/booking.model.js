const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({

  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: 'owner is required'
  },
  car: {
    type: mongoose.Types.ObjectId,
    ref: 'Car',
    required: 'car is required'
  },
  permanence: {
    type: String,
    enum: ["0", "3", "6", "12", "24", "36"],
    required: 'permanence is required'
  },
  price: {
    type: Number,
    required: 'price is required'
  },
  startDate: {
    type: Date,
    required: ' start booking date is required'
  },
  endDate: {
    type: Date,
    required: 'end booking date is required'
  }
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, booking) => {
      booking.id = doc._id;
      delete booking.__v;
      delete booking._id;
      return booking;
    }
  }

});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
