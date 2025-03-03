const toDoModel = require("../model/ToDoModel");

const deleteToDofunction = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await toDoModel.findByIdAndDelete(id);

    if (!response) {
      res.status(404).json({
        success: false,
        message: "item not found",
      });
    }

    res.status(200).json({
      success: true,
      data: response,
      message: "data deleted",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: e.message,
    });
  }
};

module.exports = deleteToDofunction;
