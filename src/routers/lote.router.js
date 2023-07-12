const { Router } = require('express');

const loteController = require('../controller/lote.controller');

const loteRoutes = Router();

loteRoutes.get('/lote', loteController.getAll);

module.exports = loteRoutes;