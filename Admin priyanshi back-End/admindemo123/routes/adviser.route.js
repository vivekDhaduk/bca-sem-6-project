const router = require("express").Router();
const multer = require("multer");
const path = require("path");

const {
    viewadviser,
    insertadviser,
    deleteadviser,
    editadviser,
    updateadviser,
    viewUserprofile
} = require("../controller/adviser.controller");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './public/uploads')
  },
  filename: (req, file, cb) => {
      cb(null,file.fieldname + '-' + Date.now() +"-"+file.originalname);
  }

});

const upload = multer({
  storage: storage,
  limits: { filesize: 10000 },
  fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
  }

});
function checkFileType(file, cb) {
  const filetype = /jpeg|jpg|png|gif/;
  const extname = filetype.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetype.test(file.mimetype);

  if (mimetype && extname) {
      return cb(null, true);

  }
  else {
      cb('error:images only')
  }

}





router.get('/',(req,res,next)=>{
    res.render('index');
});

router.get('/insert',(req,res,next)=>{
    res.render('advisorinsert');
});
router.get("/delete",(req,res,next)=>{
    res.render('table');
});


router.get("/view",viewadviser);
router.post("/insert", upload.single('image'),insertadviser);
router.get("/viewprofile/:id", viewUserprofile);
router.get("/delete/:id",deleteadviser);   
router.get("/edit/:id", editadviser);
router.post("/update", updateadviser)
module.exports = router;