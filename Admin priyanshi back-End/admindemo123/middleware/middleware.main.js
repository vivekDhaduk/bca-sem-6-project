const jwt = require("jsonwebtoken");
const adminData = require("../module/admin.modul");
const agentData = require("../module/adviser.modul");
const userData = require("../module/user.modul");
const path = require("path");
const multer = require("multer");

const middleSchema = async (req, res, next) => {

    try {
        const token = req.cookies.jwt;
        console.log(token)
        const verify = jwt.verify(token, process.env.ADMIN_KEY);
        const adminUser = await adminData.findOne({ _id: verify._id });
        const agent = await agentData.findOne({ _id: verify._id });
        const User = await userData.findOne({ _id: verify._id });
    
        req.token = token;  
        req.adminUser = adminUser;
        req.agent = agent;
        req.User = User;
        next();
    } catch (error) {
        res.status(400).json({
            message: "not match data..",
            status: 400
        })
    }
};

module.exports = middleSchema