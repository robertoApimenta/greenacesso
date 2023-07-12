const express = require('express');

const loteRoutes = require('./routers/lote.router');

const app = express();
app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
    response.send();
});

app.use(loteRoutes);

module.exports = app;