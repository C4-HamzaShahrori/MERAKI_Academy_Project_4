const commentModel = require("../database/models/comment");

const doctorModel = require("../database/models/doctor");

const addCommentToDoctor = (req, res) => {
  const doctorId = req.params.id;
  const { comment } = req.body;
  const newComment = new commentModel({
    comment,
    commenter: req.token.userId,
  });
  newComment
    .save()
    .then((result) => {
      doctorModel
        .updateOne({ _id: doctorId }, { $push: { comment: result } })
        .then(() => {
          res.status(201).json({
            success: true,
            message: `The new comment added`,
            comment: result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
            message: `Server Error`,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    });
};

const updateCommentOnDoctor = (req, res) => {
  const userId = req.body.userId;
  const idComment = req.params.id;

  commentModel.findById(idComment).then((result) => {
    console.log(result.commenter);

    if (result.commenter == userId) {
      commentModel
        .findByIdAndUpdate(idComment, req.body, { new: true })
        .populate("commenter", "firstName -_id")
        .then((resultAfterUpdate) => {
          res.status(202).json({
            success: true,
            message: `The comment updated`,
            result: resultAfterUpdate,
          });
        })
        .catch((err) => {
          res.sendStatus(500);
        });
    } else {
      res
        .status(406)
        .json({ success: false, message: `con't update the comment ` });
    }
  });
};

const deleteCommentById = (req, res) => {
  const idComment = req.params.id;
  const userId = req.body.userId;
  commentModel.findById(idComment).then((result) => {
    if (result.commenter == userId) {
      commentModel
        .findByIdAndDelete(idComment)
        .then((resultAfterDelete) => {
          res.status(200).json({
            success: true,
            message: ` delete the comment `,
            result: resultAfterDelete,
          });
        })
        .catch((err) => {
          res.sendStatus(500);
        });
    } else {
      res.status(406).json({ success: false, message: `con't delete comment` });
    }
  });
};

const getAllComments = (req, res) => {
  commentModel
    .find({})
    .then((result) => {
      if (!result[0]) {
        res.status(200).json(`No result`);
      } else {
        res
          .status(200)
          .json({ success: true, message: `all comment`, result: result });
      }
    })
    .catch((err) => {
      res.sendStatus(500);
    });
};

module.exports = {
  addCommentToDoctor,
  updateCommentOnDoctor,
  deleteCommentById,
  getAllComments,
};
