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
        .updateOne({ _id: doctorId }, { $push: { comment: result} })
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



module.exports = {
  addCommentToDoctor,
};
