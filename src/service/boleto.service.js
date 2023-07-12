const { Boleto } = require('../models/index');

const getAll = async () => {
    const result = await Boleto.findAll({ attributes: { exclude: ['criado_em'] } });
    return result;
};

module.exports = {
    getAll,
};