const helthData = require("../module/health.modul");
const bikeData = require("../module/bike.modul");
const carData = require("../module/car.modul");
const lifedata = require("../module/life.modul");
const url = `http://127.0.0.1:8080`;




exports.helthInsert = async (req, res) => {
    try {
        const Data = await helthData({
            logo: `${url}/uploads/${req.file.filename}`,
            name: req.body.name,
            primumamount: req.body.primumamount,
            timeduration: req.body.timeduration,
            shortdiscription: req.body.shortdiscription,
            cover: req.body.cover,
            longdiscription: req.body.longdiscription,
            category: req.body.category,
            age: req.body.age

        });
        const data = await Data.save();
        if (data) {
            res.redirect("/policy/viewhelth")
        }
    } catch (error) {
        /* console.log(error)
        res.status(400).json({
            mes: "policy not inserted..",
            status: 400, 
        })*/
        const message = "policy not inserted..";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};
exports.lifeInsert = async (req, res) => {
    try {


        const Data = await lifedata({
            logo:`${url}/uploads/${req.file.filename}`,
            name: req.body.name,
            primumamount: req.body.primumamount,
            timeduration: req.body.timeduration,
            shortdiscription: req.body.shortdiscription,
            cover: req.body.cover,
            longdiscription: req.body.longdiscription,
            category: req.body.category,
            annualincome: req.body.annualincome

        });

        const data = await Data.save();
        if (data) {
            res.redirect("/policy/viewlife")
        }

        /*  res.status(200).json({
             mes: "policy inserted..",
             status: 200,
             data: data
         }) */
    } catch (error) {
     /*    res.status(400).json({
            mes: "policy not inserted..",
            status: 400,
        }) */
        const message = "policy not inserted..";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
        
    }
};
exports.carInsert = async (req, res) => {
    try {


        const Data = await carData({
            logo: `${url}/uploads/${req.file.filename}`,
            name: req.body.name,
            primumamount: req.body.primumamount,
            timeduration: req.body.timeduration,
            shortdiscription: req.body.shortdiscription,
            cover: req.body.cover,
            longdiscription: req.body.longdiscription,
            idv: req.body.idv,
            purchaseyear: req.body.purchaseyear

        });

        const data = await Data.save();
        if (data) {
            res.redirect("/policy/viewcar")
        }


        /*   res.status(200).json({
              mes: "policy inserted..",
              status: 200,
              data: data
          }) */
    } catch (error) {
       /*  res.status(400).json({
            mes: "policy not inserted..",
            status: 400,
        }) */
        const message = "policy not inserted..";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};
exports.bikeInsert = async (req, res) => {
    try {


        const Data = await bikeData({
            logo: `${url}/uploads/${req.file.filename}`,
            name: req.body.name,
            primumamount: req.body.primumamount,
            timeduration: req.body.timeduration,
            shortdiscription: req.body.shortdiscription,
            cover: req.body.cover,
            longdiscription: req.body.longdiscription,
            idv: req.body.idv,
            purchaseyear: req.body.purchaseyear

        });

        const data = await Data.save();
        if (data) {
            res.redirect("/policy/viewbike")
        }

        /*  res.status(200).json({
             mes: "policy inserted..",
             status: 200,
             data: data
         }) */
    } catch (error) {
       /*  console.log(error)
        res.status(400).json({
            mes: "policy not inserted..",
            status: 400,
        }) */
        const message = "policy not inserted..";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};


exports.viewhelthpolicy = async (req, res) => {
    try {

        const viewData = await helthData.find();

        if (viewData) {
            res.render("helthtable", { records: viewData })
        }
        /*  
         res.status(200).json({
             message: "Record  display",
             status: 200,
             data: viewData
         }); */


    } catch (error) {
       /*  res.status(400).json({
            message: "Record not display",
            status: 400
        }); */
        const message = "policy not display";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};
exports.viewhelthdetail = async (req, res) => {
    try {
        const _id = req.params.id;
        

        const viewData = await helthData.findById(_id);
        /* res.status(200).json({
             message: "Record  display",
             status: 200,
             data: viewData
         }); */ 
         if (viewData) {
            res.render("helthview", { records: viewData });

        } 



    } catch (error) {
        // res.status(400).json({
        //     message: "Record not display",
        //     status: 400
        // });
        const message = "policy not display";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};
exports.viewlifepolicy = async (req, res) => {
    try {

        const viewData = await lifedata.find();

        if (viewData) {
            res.render("lifetable", { records: viewData })
        }
        /* 
        res.status(200).json({
            message: "Record  display",
            status: 200,
            data: viewData
        }); */


    } catch (error) {
        // res.status(400).json({
        //     message: "Record not display",
        //     status: 400
        // });
        const message = "policy not display";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};
exports.viewlifedetail = async (req, res) => {
    try {
        const _id = req.params.id;
        

        const viewData = await lifedata.findById(_id);
        if (viewData) {
            res.render("lifeview", { records: viewData })
        }
        
        /* res.status(200).json({
             message: "Record  display",
             status: 200,
             data: viewData
         });  */


    } catch (error) {
        // res.status(400).json({
        //     message: "Record not display",
        //     status: 400
        // });
        const message = "policy not display";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};
exports.viewcarpolicy = async (req, res) => {
    try {

        const viewData = await carData.find();
        if (viewData) {
            res.render("cartable", { records: viewData })
        }

        /*  res.status(200).json({
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
        const message = "policy not display";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};
exports.viewcardetail = async (req, res) => {
    try {
        const _id = req.params.id;
        

        const viewData = await carData.findById(_id);
        if (viewData) {
            res.render("carview", { records: viewData })
        }
        /* res.status(200).json({
             message: "Record  display",
             status: 200,
             data: viewData
         });  */


    } catch (error) {
        // res.status(400).json({
        //     message: "Record not display",
        //     status: 400
        // });
        const message = "policy not display";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};
exports.viewbikepolicy = async (req, res) => {
    try {

        const viewData = await bikeData.find();
        if (viewData) {
            res.render("biketable", { records: viewData })
        }
        

        /* res.status(200).json({
            message: "Record  display",
            status: 200,
            data: viewData
        }); */


    } catch (error) {
        // res.status(400).json({
        //     message: "Record not display",
        //     status: 400
        // });
        const message = "policy not display";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};
exports.viewbikedetail = async (req, res) => {
    try {
        const _id = req.params.id;
         const viewData = await bikeData.findById(_id);

       /*  res.status(200).json({
             message: "Record  display",
             status: 200,
             data: viewData
         });  */

         if (viewData) {
            res.render("bikeview", { records: viewData })
        }
    } catch (error) {
        // res.status(400).json({
        //     message: "Record not display",
        //     status: 400
        // });
        const message = "policy not display";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};


exports.deletehelthpolicy = async (req, res) => {
    try {
        const _id = req.params.id;
        console.log(_id);
        const deleteData = await helthData.findByIdAndDelete(_id, req.body);
        if (deleteData) {
            res.redirect("/policy/viewhelth")
        }

        /*   res.status(200).json({
              message: "Record deleted",
               status: 200
          }) */
    } catch (error) {
        // res.status(400).json({
        //     message: "Record not deleted..",
        //     status: 400
        // });
        const message = "policy not deleted";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};

exports.deletelifepolicy = async (req, res) => {
    try {
        const _id = req.params.id;
        console.log(_id);
        const deleteData = await lifedata.findByIdAndDelete(_id, req.body);
        console.log(deleteData);
        if (deleteData) {
            res.redirect("/policy/viewlife")
        }

        /*   res.status(200).json({
              message: "Record deleted",
               status: 200
          }) */
    } catch (error) {
        // res.status(400).json({
        //     message: "Record not deleted..",
        //     status: 400
        // });
        const message = "policy not deleted";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};

exports.deletecarpolicy = async (req, res) => {
    try {
        const _id = req.params.id;
        console.log(_id);
        const deleteData = await carData.findByIdAndDelete(_id, req.body);

        if (deleteData) {
            res.redirect("/policy/viewcar")
        }


        /* res.status(200).json({
            message: "Record deleted",
             status: 200
        }) */
    } catch (error) {
        // res.status(400).json({
        //     message: "Record not deleted..",
        //     status: 400
        // });
        const message = "policy not deleted";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};

exports.deletebikepolicy = async (req, res) => {
    try {
        const _id = req.params.id;
        console.log(_id);
        const deleteData = await bikeData.findByIdAndDelete(_id, req.body);
        if (deleteData) {
            res.redirect("/policy/viewbike")
        }
        /*  res.status(200).json({
            message: "Record deleted",
             status: 200
        }) */
    } catch (error) {
        // res.status(400).json({
        //     message: "Record not deleted..",
        //     status: 400
        // });
        const message = "policy not deleted";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
};


exports.edithelth = async (req, res) => {
    try {
        const _id = req.params.id;
        const updateData = await helthData.findById(_id, req.body, { new: true });
        if (updateData) {
            res.render("edithelth", { records: updateData });
        }

    } catch (error) {
        // res.status(400).json({
        //     message: "Record not updated..",
        //     status: 400
        // });
        const message = "policy not updated.";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
}

exports.updatehelth = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = await helthData.findByIdAndUpdate(req.body.id, {
            $set: {
                name: req.body.name,
                primumamount: req.body.primumamount,
                timeduration: req.body.timeduration,
                shortdiscription: req.body.shortdiscription,
                cover: req.body.cover,
                longdiscription: req.body.longdiscription,
                category: req.body.category,
                age: req.body.age

            }
        });
        console.log(updateData);
        if(updateData){
            res.redirect("/policy/viewhelth")
        }
    } catch (error) {
        // console.log(error)
        // res.status(400).json({
        //     message: "Record not updated..",
        //     status: 400
        // });
        const message = "policy not updated.";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
}

exports.editbike = async (req, res) => {
    try {
        const _id = req.params.id;
        const updateData = await bikeData.findById(_id, req.body, { new: true });
        if (updateData) {
            res.render("editbike", { records: updateData });
        }

    } catch (error) {
        // res.status(400).json({
        //     message: "Record not updated..",
        //     status: 400
        // });
        const message = "policy not updated.";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
}
exports.updatebike = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = await bikeData.findByIdAndUpdate(req.body.id, {
            $set: {
                name: req.body.name,
                primumamount: req.body.primumamount,
                timeduration: req.body.timeduration,
                shortdiscription: req.body.shortdiscription,
                cover: req.body.cover,
                longdiscription: req.body.longdiscription,
                idv: req.body.idv,
                purchaseyear: req.body.purchaseyear
                
            }
        });
        if(updateData){
            res.redirect("/policy/viewbike")
        }
       
    } catch (error) {
        // res.status(400).json({
        //     message: "Record not updated..",
        //     status: 400
        // });
        const message = "policy not updated.";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
}

exports.editcar = async (req, res) => {
    try {
        const _id = req.params.id;
        const updateData = await carData.findById(_id, req.body, { new: true });
        if (updateData) {
            res.render("editcar", { records: updateData });
        }

    } catch (error) {
        // res.status(400).json({
        //     message: "Record not updated..",
        //     status: 400
        // });
        const message = "policy not updated.";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
}
exports.updatecar = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = await carData.findByIdAndUpdate(req.body.id, {
            $set: {
                name: req.body.name,
                primumamount: req.body.primumamount,
                timeduration: req.body.timeduration,
                shortdiscription: req.body.shortdiscription,
                cover: req.body.cover,
                longdiscription: req.body.longdiscription,
                idv: req.body.idv,
                purchaseyear: req.body.purchaseyear
                }
        });
        if(updateData){
            res.redirect("/policy/viewcar")
        }
      
      
    } catch (error) {
        // res.status(400).json({
        //     message: "Record not updated..",
        //     status: 400
        // });
        const message = "policy not updated.";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
}
exports.editlife = async (req, res) => {
    try {
        const _id = req.params.id;
        const updateData = await lifedata.findById(_id, req.body, { new: true });
        if (updateData) {
            res.render("editlife", { records: updateData });
        }

    } catch (error) {
        // res.status(400).json({
        //     message: "Record not updated..",
        //     status: 400
        // });
        const message = "policy not updated.";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
}
exports.updatelife = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = await lifedata.findByIdAndUpdate(req.body.id, {
            $set: {
                name: req.body.name,
                primumamount: req.body.primumamount,
                timeduration: req.body.timeduration,
                shortdiscription: req.body.shortdiscription,
                cover: req.body.cover,
                longdiscription: req.body.longdiscription,
                category: req.body.category,
                annualincome: req.body.annualincome

            }
        });
        if(updateData){
            res.redirect("/policy/viewlife")
        }
        
    } catch (error) {
        // res.status(400).json({
        //     message: "Record not updated..",
        //     status: 400
        // });
        const message = "policy not updated.";
        const status = 404
        data = {message,status}
        res.render("eroor",{ data :  data })
    }
}
