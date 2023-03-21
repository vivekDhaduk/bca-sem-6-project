const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cluster = require("cluster")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    number: {
        type: String,
    },
    gender:{
        type:String,
    },
    age:{
        type:String,
    },
    panno:{
        type:String,
    },
    password:{
        type:String,
    },
    image: {
        type: String,
    },
    date:{
        type:Date,
        default: Date.now
    },
},{
   timestamps:true 
}
);

module.exports = mongoose.model("user", userSchema);