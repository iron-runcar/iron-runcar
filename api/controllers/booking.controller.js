const Booking = require('../models/booking.model');
const Car = require('../models/car.model');
const moment = require('moment');

module.exports.findCar = (req, res, next) => {
  Car.findById(req.params.id)
  .then(car => {
    if (!car) {
      next(createError(404, `Car ${req.params.id} not found`));
    } else {
      res.json(car);
    }
  })
  .catch(error => next(error));
};

module.exports.createBooking = (req, res, next) => {
  const permanence = req.body;
  booking.owner = req.user.id;
  const startDate = moment().year(year).month(month).date(day);
  const endDate = moment(startDate).add(permanence, 'months');

    Booking.create(booking)
      .then(booking => res.status(201).json(booking))
      .catch(error => next(error));
}


