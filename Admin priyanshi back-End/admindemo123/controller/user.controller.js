const adminData = require("../module/admin.modul");
const userData = require("../module/user.modul");
const jwt = require("jsonwebtoken");
const helthData = require("../module/health.modul");
const lifeData = require("../module/life.modul");
const carData = require("../module/car.modul");
const bikeData = require("../module/bike.modul");
const advisorData =require("../module/adviser.modul");
const url = `http://127.0.0.1:8080`
const fs = require('fs');
const pdf = require('pdf-creator-node');
const path = require('path');
const swal = require('sweetalert');
const message = require('../module/messge.modul');

const  options = require("../helper/options");


// admin login
exports.adminLogin = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const login = await adminData.findOne({ username: username });


        if (username == login.username && password == login.password) {
            if (!login.tokens[0]) {
                const token = await login.generate();
            }
            res.cookie("jwt", login.tokens[0].token);
            swal('Hello world!');
            res.redirect("/admin/index")
      

        } else {
            /* res.status(400).json({
                message: "lPlease Enter Proper Deatil Of Admin...",
                status: 400
            }) */
        const message = "lPlease Enter Proper Deatil Of Admin..";
       
        data = {message}
        res.render("eroor",{ data :  data })
        }
    } catch (error) {
        
         const message = "Admin not Login...";
         const status = 401
          data = {message,status}
        res.render("eroor",{ data :  data })
          
       
    }
};

// admin logout
exports.adminLogout = async (req, res) => {
    try {
        req.adminUser.tokens = req.adminUser.tokens.filter((currele) => {
            return currele.token != req.token;
        });

        res.clearCookie("jwt");
        await req.adminUser.save();
        // res.status(201).json({
        //     message: "Logout Successfully...",
        //     status: 201,
        // });
        res.redirect("/admin/login");
    } catch (error) {
       /*  res.status(400).json({
            message: "Admin not Logout...",
            status: 400
        }) */
    const message = "Admin not Logout...";
    const status = 401
    data = {message,status}
    res.render("eroor",{ data :  data })
        
    }
};

// admin can view all user data
exports.viewUser = async (req, res) => {
    try {
        const viewData = await userData.find();

        // res.status(200).json({
        //     message: "Record  display",
        //     status: 200,
        //     data: viewData
        // });
      
        if (viewData) {
            res.render("usertable", { records: viewData });
        }
    } catch (error) {
        // res.status(400).json({
        //     message: "Record not display",
        //     status: 400
        // });
        const message = "Record not display";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};

// admin can insert all user data
exports.insertUser = async (req, res) => {

const insertData = new userData({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        gender: req.body.gender,
        age: req.body.age,
        panno:req.body. panno,
        password: req.body.password,
        date:req.body.data
        //image:`${url}/uploads/${req.file.filename}`

    });
    try {
        
        const saveData = await insertData.save();
        if (saveData) {
            res.redirect("/admin/view")
        }   

        //  res.status(200).json({
        //     message: "Record insert",
        //     status: 200,
        //     data: insertData
        // })  


    } catch (error) {
        // console.log(error)
        // res.status(400).json({
        //     message: "Record not insert",
        //     status: 400
        // });
        const message = "Record not insert";
        const status = 404
        data = {message,status}
        
        res.render("eroor",{ data :  data })
    }


};

// admin can delete all user data
exports.deleteUser = async (req, res) => {
    try {

        const _id = req.params.id;
        console.log(_id);
        const deleteData = await userData.findByIdAndDelete(_id, req.body);
        console.log(deleteData);
        
        // res.status(200).json({
        //     message: "Record deleted",
        //     status: 200
        // })
        if (deleteData) {
            res.redirect("/admin/view")
        }


    } catch (error) {
        // res.status(400).json({
        //     message: "Record not deleted..",
        //     status: 400
        // });
        const message = "Record not deleted";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};

// admin can update all user data
exports.editUser = async (req, res) => {
    try {
        const _id = req.params.id;
        const updateData = await userData.findById(_id, req.body, { new: true });
        if (updateData) {
            res.render("edit", { records: updateData });

        } 
        // res.status(200).json({
        //     message: "Record updated",
        //     status: 200,
        //     data: updateData,
        // })
    } catch (error) {
        // res.status(400).json({
        //     message: "Record not updated..",
        //     status: 400
        // });
        const message = "Record not updated";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
}
exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const update = await userData.findByIdAndUpdate(req.body.id, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            gender: req.body.gender,
            age: req.body.age,
            password: req.body.password
        }


    });
    if (update) {
        res.redirect("/admin/view")
    }
    else{
        const message = "Record not updated";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }


};
exports.viewUserprofile = async (req, res) => {
    try { 
        const _id = req.params.id;
        const viewData = await userData.findById(_id);

        if (viewData) {
            res.render("userview", { records: viewData });

        } 

        /* res.status(200).json({
            message: "Record  display",
            status: 200,
            data: viewData
         });
       */
} catch (error) {
        // res.status(400).json({
        //     message: "Record not display",
        //     status: 400
        // });
        const message = "Record not display";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};
exports.count = async (req, res) => {
    try {
        const messagedata = await message.find();
        const userdata2 = await userData.find().sort({"date": -1}).limit(10);
        const advisorData2 = await advisorData.find().sort({"date": -1}).limit(10);
        const usercount = await userData.count();
        const helthcount = await helthData.count();
        const lifecount = await lifeData.count();
        const carcount = await carData.count();
        const bikecount = await bikeData.count();
        const advisorcount =await advisorData.count();
        
        const total = helthcount + lifecount + carcount + bikecount ;
    
        const data = {usercount,helthcount,bikecount,carcount,lifecount,advisorcount,userdata2,advisorData2,messagedata,total}

        
       res.render('index', {data: data} );

    } catch (error) {
       /*  res.status(400).json({
            message: "Record not display",
            status: 400
        }); */
        const message = "Record not display";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};
 exports.generatePdf = async(req, res, next) => {
    //res.send("hellow");
     const html = fs.readFileSync(path.join(__dirname, '../views/pdf.html'), 'utf-8');
    const _id = req.params.id;
    const viewData = await userData.findById(_id);
    const filename = viewData.name + '.pdf';

    const document = {
        html: html,
        data: {
            users:viewData 
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


 