const tipsModal = require("../database/models/tips");

const createNewTip = (req, res) => {
  const { image } = req.body;

  const newTip = new tipsModal({ image });
  newTip
    .save()
    .then((result) => {
      res
        .status(201)
        .json({
          success: true,
          message: `Success of the add tip`,
          tip: result,
        });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};

const deleteTipById = (req, res) => {
    const tipId = req.params.id;
    tipsModal
      .findByIdAndDelete(tipId)
      .then((result) => {
        if (!result) {
          res.status(404).json({
            success: false,
            message: `The tip: ${tipId} is not found`,
          });
        }
        res.status(200).json({
          success: true,
          message: `Succeeded to delete tip with id: ${tipId}`,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
        });
      });
  };


  const getAllTips = (req, res) => {
    tipsModal
      .find({})
     
      .then((result) => {
        if (!result[0]) {
          res.status(200).json(`No result`);
        } else {
          res.status(200).json({
            success: true,
            message: `all Tips`,
            Tips: result,
          });
        }
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  };
module.exports = {
    createNewTip,
    deleteTipById,
    getAllTips
  };
  