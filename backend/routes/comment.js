const express=require("express")

const commentRouter=express.Router()

const {authentication}=require("../middleware/authentication")
const{authorization}=require("../middleware/authorization")

const {addCommentToDoctor}=require("../controllers/comment")

commentRouter.post("/:id",authentication,authorization("create-comment"),addCommentToDoctor)

module.exports=commentRouter