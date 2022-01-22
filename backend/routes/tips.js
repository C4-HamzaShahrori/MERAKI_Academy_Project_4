const express = require("express");

 const { createNewTip,deleteTipById,getAllTips } = require("../controllers/tips");

const tipsRouter = express.Router();

tipsRouter.post("/", createNewTip);
tipsRouter.delete("/:id", deleteTipById);
tipsRouter.get("/", getAllTips);
module.exports = tipsRouter;