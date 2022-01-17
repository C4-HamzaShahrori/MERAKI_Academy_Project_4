const express = require("express");
const usersRouter = express.Router();

const { createNewUser ,getUserById} = require("../controllers/user");

//endpoint :/users

usersRouter.post("/", createNewUser);
 usersRouter.get("/:id",getUserById)

module.exports = usersRouter;
