const { LotesFinanceiro } = require('../models/index');
const { Boleto } = require('../models/index');

const insertBoletos = async (boletos) => {
    const dataInsert = await Promise.all(boletos.map(async (ele) => {
        const id_lote = await LotesFinanceiro.findOne({ where: { nome_unidade: ele.id_lote } })
        const dados = {
            nome_sacado: ele.nome_sacado,
            id_lote: id_lote.dataValues.idLote,
            valor: ele.valor,
            linha_digitavel: ele.linha_digitavel,
            ativo: ele.ativo,
            criado_em: new Date(),
        }
        return dados;
    }),
    );

    const result = await Promise.all(dataInsert.map(async (ele) => {
        await Boleto.create(ele);
    }));
    return result;
};

module.exports = {
    insertBoletos,
};