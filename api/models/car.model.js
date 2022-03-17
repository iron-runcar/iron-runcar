const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
  brand: {
    type: String,
    required: 'Car brand is required',
    minlength: [2, 'Car brand needs a least 2 chars']
  },
  model: {
    type: String,
    required: 'Car model is required',
    minlength: [2, 'Car model needs a least 2 chars']
  },
  year: {
    type: Date,
    required: 'The year of manufacture is required'
  },
  fuelType: {
    type: ["Gas", "Diesel", "Hybrid"],
    required: 'Select a fuel type'
  },
  transmission: {
    type: ["Manual", "Automatic"],
    required: 'Select a type of transmission'
  },
  horsePower: {
    type: Number,
    required: 'Horse Power is required'
  },
  image: {
    type: [String],
    required: 'Car image is required'
  },
  kilometers: {
    type: Number,
    required: 'Car kilometers is required'
  },
  permanence: {
    type: String,
    required: 'The permanence is required'
  },
  price: {
    type: Number,
    required: 'Car price is required'
  }
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
