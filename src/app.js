const express = require('express');

const loteRoutes = require('./routers/lote.router');
const boletoRoutes = require('./routers/boleto.router');

const app = express();
app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
    response.send();
});

app.use(loteRoutes);
app.use(boletoRoutes);

module.exports = app;