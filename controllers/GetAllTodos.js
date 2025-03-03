const toDoModel = require("../model/ToDoModel");

const getAllToDoFunction = async (req, res) => {
  try {
    const response = await toDoModel.find();

    if (!response) {
      res.status(404).json({
        success: false,
        message: "nothing found",
      });
    }

    res.status(201).json({
      success: true,
      data: response,
      message: "found data",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      data: "internal server error",
      messge: e.messge,
    });
  }
};


module.exports = getAllToDoFunction;