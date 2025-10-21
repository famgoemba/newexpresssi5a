const express = require('express');
const router = express.Router();
const beritaController = require('../controllers/beritaControllers');

// Endpoint GET dan POST
router.get('/', beritaController.getAllBerita);
router.post('/', beritaController.createBerita);

module.exports = router;