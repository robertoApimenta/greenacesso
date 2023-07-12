const { Router } = require('express');
const multer = require('multer');

const importPdfController = require('../controller/import.pdf.controller');

const importPdfRoutes = Router();

importPdfRoutes.post('/import-pdf', multer().single('file'), importPdfController.readPdf);

module.exports = importPdfRoutes;