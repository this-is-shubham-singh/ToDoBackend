const toDoModel = require("../model/ToDoModel");

const updateToDoFunction = async (req, res) => {
  try {
    const { title, description } = req.body;
    const {id} = req.params;
    const response = await toDoModel.findByIdAndUpdate(id, {
      title,
      description,
      updatedDate: Date.now(),
    });

    if (!response) {
      res.status(404).json({
        success: false,
        message: "to do item not found",
      });
    }

    res.status(200).json({
      success: true,
      data: response,
      message: "item updated",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      data: "internal server error for updating todo",
      messge: e.message,
    });
  }
};

module.exports = updateToDoFunction;
