const express = require("express");
const router = express.Router();

// impor FakultasController
const FakultasController = require("../controllers/fakultasController")

// route fakultas
router.get("/", FakultasController.getAllFakultas)
router.post("/", FakultasController.createfakultas)

// expor module
module.exports = router