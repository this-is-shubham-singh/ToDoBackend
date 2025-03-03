const toDoModel = require("../model/ToDoModel");

const getSingleFunction = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await toDoModel.findById(id);

    if (!response) {
      res.status(404).json({
        success: false,
        message: "data not found",
      });
    }

    res.status(201).json({
      success: true,
      data: response,
      message: "data found",
    });
  } catch (e) {
    console.log(e.message);

    res.status(500).json({
      success: false,
      data: "internal server error",
      message: e.message,
    });
  }
};

module.exports = getSingleFunction;
