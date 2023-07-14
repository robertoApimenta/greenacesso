const boletoService = require('../service/boleto.service');

const getAll = async (req, res) => {
    const { nome, valor_inicial, valor_final, id_lote } = req.query;
    if (nome || valor_inicial || valor_final || id_lote) {
        const boletos = await boletoService.getByFilter(nome, valor_inicial, valor_final, id_lote);
        return res.status(200).json(boletos);
    }
    const { relatorio } = req.query;
    if (relatorio === '1') {

        const base64 = await boletoService.createPdf();

        return res.status(200).json({ base64 });
    }

    const boletos = await boletoService.getAll();
    return res.status(200).json({ boletos: boletos });
};

module.exports = {
    getAll,
};