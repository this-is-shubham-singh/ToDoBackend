const ToDoSchema = require("../model/ToDoModel");

const createToDo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const response = await ToDoSchema.create({ title, description });

    res.status(200).json({
      success: true,
      data: response,
      message: "data created successfully",
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({
      success: false,
      data: "internal server error",
      message: e.message,
    });
  }
};

module.exports = createToDo;
