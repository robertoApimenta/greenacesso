const importService = require('../service/import.csv.service');

const lerCsvPdf = async (req, res) => {
    const file = req.file;
    let linhas = file.buffer.toString('utf-8').split('\n');
    linhas.shift();
    //nsole.log(linhas);
    const result = await importService.insertBoletos(linhas);
};

module.exports = {
    lerCsvPdf,
};