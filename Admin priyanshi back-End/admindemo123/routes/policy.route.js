const router = require("express").Router();
const path = require("path");

const uploader = require("../utils/multer")
const {
    helthInsert,
    lifeInsert,
    carInsert,
    bikeInsert,
    viewhelthpolicy,
    viewhelthdetail,
    viewlifepolicy,
    viewlifedetail,
    viewcarpolicy,
    viewcardetail,
    viewbikepolicy,
    viewbikedetail,
    deletehelthpolicy,
    deletelifepolicy,
    deletecarpolicy,
    deletebikepolicy,
    edithelth,
    editlife,
    editcar,
    editbike,
    updatehelth,
    updatebike,
    updatecar,
    updatelife

} = require("../controller/policy.controller");

const{
    hgeneratePdf,
    lgeneratePdf,
    bgeneratePdf,
    cgeneratePdf
}=require("../controller/pdf.controller")


router.get('/inserthelth', (req, res, next) => {
    res.render('helthinsert');
});
router.get('/insertlife', (req, res, next) => {
    res.render('lifeinsert');
});
router.get('/insertcar', (req, res, next) => {
    res.render('carinsert');
});
router.get('/insertbike', (req, res, next) => {
    res.render('bikeinsert');
});



router.post("/inserthelth",uploader.upload,helthInsert);
router.post("/insertlife",uploader.upload,lifeInsert);
router.post("/insertcar",uploader.upload,carInsert);
router.post("/insertbike",uploader.upload,bikeInsert);

router.get("/viewhelth",viewhelthpolicy);
router.get("/viewhelthdetail/:id",uploader.upload,viewhelthdetail);

router.get("/viewlife",viewlifepolicy);
router.get("/viewlifedetail/:id",uploader.upload,viewlifedetail);


router.get("/viewcar",viewcarpolicy);
router.get("/viewcardetail/:id",uploader.upload,viewcardetail);


router.get("/viewbike",viewbikepolicy);
router.get("/viewbikedetail/:id",uploader.upload,viewbikedetail);

router.get("/deletehelth/:id",deletehelthpolicy);   
router.get("/deletelife/:id",deletelifepolicy); 
router.get("/deletecar/:id",deletecarpolicy); 
router.get("/deletebike/:id",deletebikepolicy); 

router.get("/edithelth/:id",edithelth);
router.get("/editlife/:id",editlife);
router.get("/editcar/:id",editcar);
router.get("/editbike/:id",editbike);

router.post("/updatehelth",uploader.upload,updatehelth);
router.post("/updatebike",uploader.upload,updatebike);
router.post("/updatecar",uploader.upload,updatecar);
router.post("/updatelife",uploader.upload,updatelife);

router.get('/downloadh/:id', hgeneratePdf);
router.get('/downloadl/:id', lgeneratePdf);
router.get('/downloadc/:id', cgeneratePdf);
router.get('/downloadb/:id', bgeneratePdf);



module.exports = router;

