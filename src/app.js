const express = require('express');

const app = express();
app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
    response.send();
});

module.exports = app;