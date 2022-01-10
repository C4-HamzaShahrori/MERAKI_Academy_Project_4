const express = require("express");
const usersRouter = express.Router();

const {createNewUser}=require("../controllers/user")

//endpoint :/user

usersRouter.post("/",createNewUser)

module.exports = usersRouter;