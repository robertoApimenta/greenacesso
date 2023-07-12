const { Boleto } = require('../models/index');

const insertBoletos = async (linhas) => {
    linhas.map(el => {
        const boleto = el.split(';');
        console.log(boleto[0]);
    })
};

module.exports = {
    insertBoletos,
};