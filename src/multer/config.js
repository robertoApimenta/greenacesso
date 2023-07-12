const multer = require('multer');
const path = require('path');

module.exports = {
    dest: path.resolve(__dirname, '', 'tmp', 'uploadsCsv'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            path.resolve(__dirname, '', 'tmp', 'uploadsCsv');
        },
        filename: () => { },
    }),
    limits: {
        fileSize: 2 * 1024 + 1024
    },
    fileFilter: (req, file, cb) => {
        const allowMimes = [
            "image/jpge",
            "image/png",
        ];
        if (allowMimes.includes(file.mimetype)) {
            bd(null, true);
        } else {
            cb(new Error('Invalid file type'));
        }
    }
}