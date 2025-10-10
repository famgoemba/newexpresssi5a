const express = require("express");
const router = express.Router();

// impor FakultasController
const FakultasController = require("../controllers/fakultasController")

// route GET fakultas
router.get("/", FakultasController.getAllFakultas)

// expor module
module.exports = router