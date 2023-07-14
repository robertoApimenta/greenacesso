const fs = require('fs');
const path = require('path');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

const { Boleto } = require('../models/index');

const outputDirectory = path.resolve(__dirname, '../', '../', 'public', 'uploads', 'relatorios');

const getAll = async () => {
    const result = await Boleto.findAll({ attributes: { exclude: ['criado_em'] } });
    return result;
};

const getByFilter = async (nome, valor_inicial, valor_final, id_lote) => {
    const result = await Boleto.findOne({ where: { nome_sacado: nome } });
    return result;
};

const createPdf = async () => {
    const boletos = await getAll();
    const base64 = JSON.stringify(boletos)
    const pdfDoc = await PDFDocument.create()
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    const page = pdfDoc.addPage()
    const { width, height } = page.getSize()
    const fontSize = 8

    boletos.map((el) => {
        //console.log(JSON.stringify(el.dataValues))
        page.drawText(JSON.stringify(el.dataValues), {
            x: 50,
            y: height - (3 * fontSize) * el.dataValues.id,
            size: fontSize,
            font: timesRomanFont,
            color: rgb(0, 0.53, 0.71),
        });
        page.drawLine({
            start: { x: 25, y: height - 5 - (3 * fontSize) * el.dataValues.id },
            end: { x: width - 25, y: height - 5 - (3 * fontSize) * el.dataValues.id },
            thickness: 2,
            color: rgb(0, 0, 0),
            opacity: 0.75,
        });
    });

    const pdfBytes = await pdfDoc.save();

    const outputPath = path.join(outputDirectory, `relatorio.pdf`);
    await fs.promises.writeFile(outputPath, pdfBytes);

    return base64;
};

module.exports = {
    getAll,
    getByFilter,
    createPdf,
};