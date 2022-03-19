const createError = require("http-errors");
const Car = require("../models/car.model");

module.exports.list = (req, res, next) => {
  Car.find()
    .then(
      cars => res.json(cars))
    .catch((error) => next(error));
};

module.exports.create = (req,res, next) => {
  const car = req.body;
  car.ownerId = req.user.id;
  Car.create(car)
    .then(car => res.status(201).json(car))
    .catch((error) => next(error));
};

module.exports.detail = (req, res, next) => {
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

