const createError = require("http-errors");
const express = require("express");
const router = express.Router();







router.use((req, res, next) => next(createError(404, "Router not found")));

module.exports = router;