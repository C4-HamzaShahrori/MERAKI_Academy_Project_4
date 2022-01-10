const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    age:{type:Number},
    numberPhone:{type:String,required:true},
    address:{type:String,required:true},
    comment:[{type:mongoose.Schema.Types.ObjectId,ref:"Comment"}]
})

module.exports=mongoose.model("Doctor",doctorSchema)
