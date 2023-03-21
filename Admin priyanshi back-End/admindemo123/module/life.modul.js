const mongoose = require("mongoose");

const lifeSchema = new mongoose.Schema({
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
    annualincome:{
        type:String
    },
    date:{
        type:Date,
        default: Date.now
    }

  
});



module.exports = mongoose.model("lifedata",lifeSchema);