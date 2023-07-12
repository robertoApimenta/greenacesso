const { Router } = require('express');

const boletoController = require('../controller/boleto.controller');

const boletoRoutes = Router();

boletoRoutes.get('/boletos', boletoController.getAll);

module.exports = boletoRoutes;