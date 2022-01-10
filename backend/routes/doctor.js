const express = require("express");
const doctorRouter = express.Router();

 const {addDoctorToCategory}=require("../controllers/doctor")

///endpoint:/doctor

 doctorRouter.post("/",addDoctorToCategory)
 
 doctorRouter.post("/:id/comments",)

module.exports = doctorRouter;