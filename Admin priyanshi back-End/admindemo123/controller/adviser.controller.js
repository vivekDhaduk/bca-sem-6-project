
const adviserData = require("../module/adviser.modul");
const url = `http://127.0.0.1:8080`

exports.viewadviser = async (req, res) => {
    try {
        const viewData = await adviserData.find();
         
        // res.status(200).json({
        //     message: "Record  display",
        //     status: 200,
        //     data: viewData
        // });
        if(viewData){
            res.render("advisortable",{records:viewData});
            }
        
    } catch (error) {
        // res.status(400).json({
        //     message: "Record not display",
        //     status: 400
        // });
        const message = "Record not display.";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};

// admin can insert all user data
exports.insertadviser = async (req, res) => {
 

   try {
    const insertData = new adviserData({
        name: req.body.name,
        category: req.body.category,
        number: req.body.number,
        gender: req.body.gender,
        discription: req.body.discription,
        password: req.body.password,
        image:`${url}/uploads/${req.file.filename}`

    });
    
    
    await insertData.save();
    if(insertData){
        res.redirect("/adviser/view")
    }

    //  res.status(200).json({
    //     message: "Record insert",
    //     status: 200,
    //     data: insertData
    // })  

    
} catch (error) {
    // res.status(400).json({
    //     message: "Record not insert",
    //     status: 400
    // });
    const message = "Record not insert.";
    const status = 404
        data = {message,status}
    res.render("eroor",{ data :  data })
    
}


};

// admin can delete all user data
exports.deleteadviser = async (req, res) => {
    try {
       
        // res.status(200).json({
        //     message: "Record deleted",
        //     status: 200
       // })
       const _id = req.params.id;
       console.log(_id);
       const deleteData = await adviserData.findByIdAndDelete(_id,req.body);
       console.log(deleteData);
        if(deleteData){
            res.redirect("/adviser/view")
        }
       
       
    } catch (error) {
        // res.status(400).json({
        //     message: "Record not deleted..",
        //     status: 400
        // });
        const message = "Record not deleted.";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};

// admin can update all user data
exports.editadviser = async(req, res) => {
    try {
        const _id = req.params.id;
        const updateData = await adviserData.findById(_id, req.body, { new: true });
        if (updateData) {
            res.render("adviseredit", {records: updateData });

        } else {
           
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
        const message = "Record not updated.";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
}
exports.updateadviser = async(req, res) => {
    const id = req.params.id;
    const update = await adviserData.findByIdAndUpdate(req.body.id, {
        $set:{
            name: req.body.name,
            category: req.body.category,
            number: req.body.number,
            gender: req.body.gender,
            discription: req.body.discription,
            password:req.body.password
        }
     

    });
    if(update){
        res.redirect("/adviser/view")
    }
    else{
        const message = "Record not update.";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }

    
}; 
exports.viewUserprofile = async (req, res) => {
    try { 
        const _id = req.params.id;
        const viewData = await adviserData.findById(_id);

        if (viewData) {
            res.render("advisorview", { records: viewData });

        } 

} catch (error) {
        // res.status(400).json({
        //     message: "Record not display",
        //     status: 400
        // });
        const message = "Record not display.";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};