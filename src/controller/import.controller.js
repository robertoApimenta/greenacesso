const importService = require('../service/import.csv.service');

const lerCsvPdf = async (req, res) => {
    const file = req.file;
    let linhas = file.buffer.toString('utf-8').split('\n');
    linhas.shift();
    const boletos = linhas.map(el => {
        const boleto = el.split(';');
        const dados = {
            nome_sacado: boleto[0],
            id_lote: parseInt(boleto[1]),
            valor: parseFloat(boleto[2]),
            linha_digitavel: parseInt(boleto[3]),
            ativo: true,
        }
        return dados;
    })
    const result = await importService.insertBoletos(boletos);
};

module.exports = {
    lerCsvPdf,
};