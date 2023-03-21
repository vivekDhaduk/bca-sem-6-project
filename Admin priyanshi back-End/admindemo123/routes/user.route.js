const router = require("express").Router();
const middleware = require("../middleware/middleware.main");
const multer = require("multer");
const path = require("path");

const {
    adminLogin,
    adminLogout,
    generatePdf,
    viewUser,
    count,
    viewUserprofile,
    insertUser,
    deleteUser,
    editUser,
    updateUser,
} = require("../controller/user.controller");


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




// router.get('/index', (req, res, next) => {
//     res.render('index');

// });
router.get('/login', (req, res, next) => {
    res.render('login');
});
router.get('/insert', (req, res, next) => {
    res.render('userregister');
});
// router.get("/delete",(req,res,next)=>{
//     res.render('table');
// });

router.post("/login", adminLogin);
router.get("/logout", middleware, adminLogout);
router.get("/view", viewUser);
router.get("/index", count);
router.get('/download/:id', generatePdf);
router.get("/viewprofile/:id", viewUserprofile);
router.post("/insert", upload.single('image'),insertUser);
router.get("/delete/:id", deleteUser);
router.get("/edit/:id", editUser);
router.post("/update", updateUser)
module.exports = router;