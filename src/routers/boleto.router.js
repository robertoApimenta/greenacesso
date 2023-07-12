const { Router } = require('express');

const boletoController = require('../controller/boleto.controller');

const boletoRoutes = Router();

boletoRoutes.get('/boleto', boletoController.getAll);

module.exports = boletoRoutes;