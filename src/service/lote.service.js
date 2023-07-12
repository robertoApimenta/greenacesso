const { Lote } = require('../models/index');

const getAll = async () => {
    const result = await Lote.findAll({ attributes: { exclude: ['criado_em'] } });
    return result;
};

module.exports = {
    getAll,
};