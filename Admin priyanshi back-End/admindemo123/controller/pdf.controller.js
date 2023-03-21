const helthData = require("../module/health.modul");
const lifeData = require("../module/life.modul");
const carData = require("../module/car.modul");
const bikeData = require("../module/bike.modul");
const advisorData =require("../module/adviser.modul");
const url = `http://127.0.0.1:8080`
const fs = require('fs');
const pdf = require('pdf-creator-node');
const path = require('path');

const  options = require("../helper/options");

exports.hgeneratePdf = async(req, res, next) => {
    //res.send("hellow");
     const html = fs.readFileSync(path.join(__dirname, '../views/helthpdf.html'), 'utf-8');
    const _id = req.params.id;
    const viewData = await helthData.findById(_id);
    
    const filename = viewData.name  + '.pdf';

    const document = {
        html: html,
        data: {
            policys:viewData 
        },
        path: './docs/' + filename
    }
    pdf.create(document, options)
        .then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    const filepath = 'http://localhost:8080/' + filename;


    res.render('download', {
        path: filepath
    });
}
exports.lgeneratePdf = async(req, res, next) => {
    //res.send("hellow");
     const html = fs.readFileSync(path.join(__dirname, '../views/lifepdf.html'), 'utf-8');
    const _id = req.params.id;
    const viewData = await lifeData.findById(_id);
    
    const filename = viewData.name + '_doc' + '.pdf';

    const document = {
        html: html,
        data: {
            policys:viewData 
        },
        path: './docs/' + filename
    }
    pdf.create(document, options)
        .then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    const filepath = 'http://localhost:8080/' + filename;
    console.log(filepath);

    res.render('download', {
        path: filepath
    });
}

exports.cgeneratePdf = async(req, res, next) => {
    //res.send("hellow");
     const html = fs.readFileSync(path.join(__dirname, '../views/carpdf.html'), 'utf-8');
    const _id = req.params.id;
    const viewData = await carData.findById(_id);
    
    const filename = viewData.name + '_doc' + '.pdf';

    const document = {
        html: html,
        data: {
            policys:viewData 
        },
        path: './docs/' + filename
    }
    pdf.create(document, options)
        .then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    const filepath = 'http://localhost:8080/' + filename;
    console.log(filepath);

    res.render('download', {
        path: filepath
    });
}

exports.bgeneratePdf = async(req, res, next) => {
    //res.send("hellow");
     const html = fs.readFileSync(path.join(__dirname, '../views/bikepdf.html'), 'utf-8');
    const _id = req.params.id;
    const viewData = await bikeData.findById(_id);
    
    const filename = viewData.name + '_doc' + '.pdf';

    const document = {
        html: html,
        data: {
            policys:viewData 
        },
        path: './docs/' + filename
    }
    pdf.create(document, options)
        .then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    const filepath = 'http://localhost:8080/' + filename;
    console.log(filepath);

    res.render('download', {
        path: filepath
    });
}



