// const importService = require('../service/import.csv.service');
const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const outputDirectory = path.resolve(__dirname, '../', '../', 'public', 'uploads', 'boletos');

const readPdf = async (req, res) => {

    const file = req.file;
    const readPdf = await PDFDocument.load(file.buffer);
    const { length } = readPdf.getPages();
    for (let i = 0, n = length; i < n; i += 1) {
        const writePdf = await PDFDocument.create();
        const [page] = await writePdf.copyPages(readPdf, [i]);
        writePdf.addPage(page);
        const bytes = await writePdf.save();
        const outputPath = path.join(outputDirectory, `${i + 1}.pdf`);
        await fs.promises.writeFile(outputPath, bytes);
    }
    return res.json({ message: `${length} Boletos adiconados a pasta /public/uploads/boletos` })
};

module.exports = {
    readPdf,
};