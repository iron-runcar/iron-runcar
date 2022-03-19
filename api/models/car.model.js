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
    type: Number,
    required: 'The year of manufacture is required'
  },
  fuelType: {
    type: String,
    enum: ["Petrol", "Diesel", "Hybrid"],
    required: 'Select a fuel type'
  },
  transmission: {
    type: String,
    enum: ["Manual", "Automatic"], 
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
  prices: {
    type: [{
      _id: false,
      permanence: {
        type: String,
        enum: ["0", "3", "6", "12", "24", "36"]
      },
      price: Number
    }],
    required: 'Car price is required'
  }
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, car) => {
      car.id = doc._id;
      delete car.__v;
      delete car._id;
      return car;
    }
  }
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
