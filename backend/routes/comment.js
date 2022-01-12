const express = require("express");

const commentRouter = express.Router();

const { authentication } = require("../middleware/authentication");
const { authorization } = require("../middleware/authorization");

const {
  addCommentToDoctor,
  updateCommentOnDoctor,
  deleteCommentById,
  getAllComments,
} = require("../controllers/comment");

commentRouter.post(
  "/:id",
  authentication,
  authorization("create-comment"),
  addCommentToDoctor
);
commentRouter.put(
  "/:id",
  authentication,
  authorization("create-comment"),
  updateCommentOnDoctor
);
commentRouter.delete(
  "/:id",
  authentication,
  authorization("create-comment"),
  deleteCommentById
);

commentRouter.get(
  "/",
  authentication,
  authorization("create-comment"),
  getAllComments
);

module.exports = commentRouter;
