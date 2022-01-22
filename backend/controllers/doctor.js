const doctorModel = require("../database/models/doctor");

const addDoctorToCategory = (req, res) => {
  const {
    image,
    firstName,
    lastName,
    age,
    numberPhone,
    address,
    comment,
    specialized,
    price
  } = req.body;
  const newDoctor = new doctorModel({
    image,
    firstName,
    lastName,
    age,
    numberPhone,
    address,
    comment,
    specialized,
    price
  });
  newDoctor
    .save()
    .then((result) => {
      res
        .status(201)
        .json({ success: true, message: `Success add doctor`, doctor: result });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};

const getAllDoctors = (req, res) => {
  doctorModel
    .find({})
    .populate("comment")
    .then((result) => {
      if (!result[0]) {
        res.status(200).json(`No result`);
      } else {
        res.status(200).json({
          success: true,
          message: `all doctor`,
          result: result,
        });
      }
    })
    .catch((err) => {
      res.sendStatus(500);
    });
};

const getAllDoctorsBySpecialty = (req, res) => {
  const specialized = req.query.specialized;
  doctorModel
    .find({ specialized: specialized })
    .then((result) => {
      if (!result[0]) {
        res.status(200).json(`No result`);
      } else {
        res.status(200).json({
          success: true,
          message: `all doctor by specialized `,
          result: result,
        });
      }
    })
    .catch((err) => {
      res.sendStatus(500);
    });
};

const getDoctorById = (req, res) => {
  const doctorId = req.params.id;
  doctorModel
    .findById(doctorId).populate("comment")
    .then((result) => {
      if (!result) {
        res.status(200).json(`No result`);
      } else {
        res.status(200).json({
          success: true,
          message: `doctor by id =>${doctorId} `,
          result: [result],
        });
      }
    })
    .catch((err) => {
      res.sendStatus(500);
    });
};

const updateDoctorById = (req, res) => {
  const doctorId = req.params.id;
  doctorModel
    .findByIdAndUpdate(doctorId, req.body, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The Article: ${doctorId} is not found`,
        });
      }
      res.status(202).json({
        success: true,
        message: `Article updated`,
        article: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    });
};

const deleteDoctorById = (req, res) => {
  const doctorId = req.params.id;
  doctorModel
    .findByIdAndDelete(doctorId)
    .then((result) => {
      if (!result) {
        res.status(404).json({
          success: false,
          message: `The doctor: ${doctorId} is not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Succeeded to delete doctor with id: ${doctorId}`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    });
};

module.exports = {
  addDoctorToCategory,
  getAllDoctors,
  getAllDoctorsBySpecialty,
  updateDoctorById,
  deleteDoctorById,
  getDoctorById
};
