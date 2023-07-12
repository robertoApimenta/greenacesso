const boletoService = require('../service/boleto.service');

const getAll = async (_req, res) => {
    const users = await boletoService.getAll();
    return res.status(200).json(users);
};

module.exports = {
    getAll,
};