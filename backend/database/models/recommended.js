const mongoose = require("mongoose");

const recommendedDoctorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  specialized: { type: String, required: true },
  numberPhone: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("RecommendedDoctor", recommendedDoctorSchema);
