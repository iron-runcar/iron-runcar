const createError = require("http-errors");
const Car = require("../models/car.model");

module.exports.list = (req, res, next) => {
  Car.find()
    .then()
    .catch((error) => next(error));
};

module.exports.create = (req,res, next) => {
  const car = req.body;

  Car.create(car)
    .then()
    .catch((error) => next(error));
};

module.exports.detail = (req, res, next) => {
  Car.findById(req.params.id)



};

