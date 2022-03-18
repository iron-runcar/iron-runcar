const createError = require("http-errors");
const express = require("express");
const router = express.Router();
const cars = require("../controllers/cars.controller");
const auth = require("../controllers/auth.controller");


router.get("/cars", cars.list);
router.post("/cars", cars.create);
router.get("/cars/:id", cars.detail);

router.post("/register", auth.register);








router.use((req, res, next) => next(createError(404, "Router not found")));

module.exports = router;