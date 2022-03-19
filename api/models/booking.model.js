const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Car = require("../models/car.model");

const bookingSchema = new Schema({

  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  car: {
    type: mongoose.Types.ObjectId,
    ref: 'Car'
  },
  permanence: {
    type: String,
    enum: ["Sin permanencia", "3 meses", "6 meses", "12 meses", "24 meses", "36 meses"]
  },
  price: {
    type: Number
  },
  startDate: {
    type: Date,
    required: 'Booking date is required'
  },
  endDate: {
    type: Date,
    required: 'Booking date is required'
  },

});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
