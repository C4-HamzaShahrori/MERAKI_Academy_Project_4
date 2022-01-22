const mongoose = require("mongoose");


const TipsSchema = new mongoose.Schema({
   image: { type: String, required: true },
   
  });



  module.exports = mongoose.model("Tips", TipsSchema);