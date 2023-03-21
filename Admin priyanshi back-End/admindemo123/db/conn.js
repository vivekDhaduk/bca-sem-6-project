const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECT_KEY)
    .then(() => {
        console.log("Your DataBase Is Connected Successfully...");
    }).catch((err) => {
        console.log(err);
    })
