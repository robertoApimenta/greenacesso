const { LotesFinanceiro } = require('../models/index');
const { Boleto } = require('../models/index');

const insertBoletos = async (boletos) => {
    const dataInsert = await Promise.all(boletos.map(async (ele) => {
        console.log(ele)
        const id_lote = await LotesFinanceiro.findOne({ where: { nome_unidade: ele.id_lote } })
        //console.log(id_lote.dataValues.idLote)
        const dados = {
            nome_sacado: ele.nome_sacado,
            id_lote: id_lote.dataValues.idLote,
            valor: ele.valor,
            linha_digitavel: ele.linha_digitavel,
            ativo: true,
        }
        return dados;
    })
    )

    const result = await Promise.all(dataInsert.map(async (ele) => {
        console.log(ele)
        await Boleto.create(ele);
    }))
    //const result = await Boleto.create(dataInsert);
    //console.log(result);
};

module.exports = {
    insertBoletos,
};