const express = require("express");
const router = express.Router();

// impor FakultasController
const FakultasController = require("../controllers/fakultasController")

// route fakultas
router.get("/", FakultasController.getAllFakultas)
router.post("/", FakultasController.createfakultas)
router.get("/:id", FakultasController.getFakultasById)
router.delete("/:id", FakultasController.deleteFakultasById)
router.put("/:id", FakultasController.updateFakultasById)

// expor module
module.exports = router