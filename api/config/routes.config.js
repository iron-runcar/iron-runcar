const createError = require("http-errors");
const express = require("express");
const router = express.Router();
const cars = require("../controllers/cars.controller");

router.get("/cars", cars.list);
router.post("/cars", secure.isAuthenticated, cars.create);
router.get("/cars/:id", cars.detail);








router.use((req, res, next) => next(createError(404, "Router not found")));

module.exports = router;