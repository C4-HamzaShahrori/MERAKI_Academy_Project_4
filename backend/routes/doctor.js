const express = require("express");
const doctorRouter = express.Router();

const {
  getAllDoctors,
  addDoctorToCategory,
  getAllDoctorsBySpecialty,
  updateDoctorById,
  deleteDoctorById,
  getDoctorById
} = require("../controllers/doctor");

const { authentication } = require("../middleware/authentication");
const { authorization } = require("../middleware/authorization");
const { addCommentToDoctor } = require("../controllers/comment");
///endpoint:/doctor

doctorRouter.post("/", addDoctorToCategory);
doctorRouter.get("/", getAllDoctors);
doctorRouter.get("/search_1", getAllDoctorsBySpecialty);
doctorRouter.get("/:id",getDoctorById)
doctorRouter.post(
  "/:id/comments",
  authentication,
  authorization("create-comment"),
  addCommentToDoctor
);
doctorRouter.put("/:id", updateDoctorById);
doctorRouter.delete("/:id", deleteDoctorById);

module.exports = doctorRouter;
