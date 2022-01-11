const express = require("express");
const doctorRouter = express.Router();

 const {getAllDoctors,addDoctorToCategory,getAllDoctorsBySpecialty}=require("../controllers/doctor")

///endpoint:/doctor


 doctorRouter.post("/",addDoctorToCategory)
 doctorRouter.get("/",getAllDoctors)
 doctorRouter.get("/search_1",getAllDoctorsBySpecialty)
 
 
 doctorRouter.post("/:id/comments",)

module.exports = doctorRouter;