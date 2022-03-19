const createError = require("http-errors");
const express = require("express");
const router = express.Router();
const secure = require("../middlewares/secure.mid");
const cars = require("../controllers/cars.controller");
const auth = require("../controllers/auth.controller");
const booking = require("../controllers/booking.controller");


router.get("/cars", cars.list);
router.post("/cars", secure.isAuthenticated, cars.create);
router.get("/cars/:id", cars.detail);
router.post("/cars/:carId/bookings", secure.isAuthenticated, booking.create);

router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/profile", secure.isAuthenticated, auth.profile);



router.use((req, res, next) => next(createError(404, "Router not found")));

module.exports = router;