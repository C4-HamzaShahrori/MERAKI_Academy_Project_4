const express = require("express");

const { createNewRole } = require("../controllers/role");

const rolesRouter = express.Router();

rolesRouter.post("/", createNewRole);

module.exports = rolesRouter;
