
const lerCsvPdf = async (req, res) => {
    const file = req.file;
    console.log(file);
    return res.status(200).json('kalika');
};

module.exports = {
    lerCsvPdf,
};