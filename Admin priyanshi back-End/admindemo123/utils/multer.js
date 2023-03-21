const multer = require("multer");
const path = require("path");



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null,file.fieldname + '-' + Date.now() +"-"+file.originalname);
    }
  
  });
  
exports.upload = multer({
    storage: storage,
    limits: { filesize: 10000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
  
  }).single('logo');
  function checkFileType(file, cb) {
    const filetype = /jpeg|jpg|png|gif|webp|svg/;
    const extname = filetype.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetype.test(file.mimetype);
  
    if (mimetype && extname) {
        return cb(null, true);
  
    }
    else {
        cb('error:images only')
    }
  
  }