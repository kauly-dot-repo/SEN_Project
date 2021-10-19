const util = require("util");
const multer = require("multer");
const path = require("path");
const maxSize = 600 * 1024 * 1024;

const __basedir = path.resolve();
console.log(__basedir);
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/files/upload");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
