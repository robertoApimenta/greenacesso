const { Router } = require('express');

const importController = require('../controller/import.controller');

const importRoutes = Router();

importRoutes.post('/import', importController.lerCsvPdf);

module.exports = importRoutes;