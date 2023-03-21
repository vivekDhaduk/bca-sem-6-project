const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const adviserSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    category:{
        type: String,
        
    },
    number:{
        type: String,
        
    },
    gender:{

    type:String

    },
    discription:{
     type:String
    },
    password:{
        type:String

    },
    image:{
        type: String,
        
    },
    date:{
        type:Date,
        default: Date.now
    }


},
    {
        timestamps:true 
     }
);



module.exports = mongoose.model("adviser",adviserSchema);