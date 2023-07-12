const { Router } = require('express');
const multer = require('multer');

const importController = require('../controller/import.controller');

const importRoutes = Router();

importRoutes.post('/import', multer().single('file'), importController.lerCsvPdf);

module.exports = importRoutes;