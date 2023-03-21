const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
 
    logo: {
        type: String
    },
    name: {
        type: String
    },
    primumamount: {
        type: String
    },
    timeduration: {
        type:String
    },
    shortdiscription:{
        type:String
    },
   cover:{
        type:String
    },
    longdiscription:{
        type:String
    },
    idv:{
        type:String
    },
    purchaseyear:{
        type:String
    },
    date:{
        type:Date,
        default: Date.now
    }

  
});



module.exports = mongoose.model("cardata",carSchema);