const loteService = require('../service/lote.service');

const getAll = async (_req, res) => {
    const users = await loteService.getAll();
    return res.status(200).json(users);
};

module.exports = {
    getAll,
};