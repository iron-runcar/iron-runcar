const createError = require('http-errors');
const Booking = require('../models/booking.model');
const Car = require('../models/car.model');
const moment = require('moment');


module.exports.create = (req, res, next) => {

  Car.findById(req.params.carId)
    
    .then(car => {
      if (!car) {
        next(createError(404, `Car ${req.params.carId} not found`));
      } else if (car.ownerId === req.user.id){
        console.log('eeeee', req.user.id)
        next(createError(403, `Car ${req.params.carId} is booked`))
      } else {
        const permanence = req.body.permanence;
        const booking = {
          car: car.id,
          permanence: permanence,
          price: car.prices.find((priceWithPermanence) => permanence === priceWithPermanence.permanence )?.price,
          owner: req.user.id,
          startDate: moment(),
          endDate: moment().add(permanence, 'months')
        }
        console.log (booking)
        return Booking.create(booking)
          .then(booking => res.status(201).json(booking))   
      }
    })
    .catch(error => next(error));

};

module.exports.list = (req, res, next) => {
  Booking.find()
    .populate('owner')
    .then(booking => res.json(booking))
    .catch((error) => next(error));
};

