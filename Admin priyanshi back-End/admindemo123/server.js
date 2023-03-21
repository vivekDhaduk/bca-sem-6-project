const express = require("express");
const app = express();
const ejs = require("ejs");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();
require("./db/conn");
const admin = require("./module/admin.modul");
const adviser = require("./module/adviser.modul");
const user = require("./module/user.modul");
const helthData = require("./module/health.modul");
const lifeData = require("./module/life.modul");
const carData = require("./module/car.modul");
const bikeData = require("./module/bike.modul")

const multer = require("multer");

app.use('*',cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());




const port = process.env.port;

app.use(express.static(path.join(__dirname,'./public')));
// app.use(express.static(path.join(__dirname,'./uploads')));
const template_path = path.join(__dirname,"./views");
app.use(express.static('./docs'));

app.set('view engine','ejs');
app.set('views',template_path);


app.get('/', (req, res) => {
    res.render("login");
});
app.get('/index', (req, res) => {
    res.render("index");
});
app.get('/profile', (req, res) => {
    res.render("profile");
});

app.get('/dummyData',async(req,res)=>{
    const hdata = await helthData.find({}).count();
        const ldata = await lifeData.find({}).count();
        const cdata = await carData.find({}).count();
        const bdata = await bikeData.find({}).count();
        res.json({
            hdata: hdata,
            ldata: ldata,
            cdata: cdata,
            bdata:bdata
         })

});
app.use('/admin', require('./routes/user.route'));
app.use('/adviser', require('./routes/adviser.route'));
app.use('/policy', require('./routes/policy.route'));




app.listen(port, () => {
    console.log(`Your Project Is Running On ${port} port. `);
});

