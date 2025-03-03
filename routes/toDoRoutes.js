const express = require("express");
const router = express.Router();

const createToDoFunction = require("../controllers/CreateTodo");
const getSingleFunction = require("../controllers/GetSingleTodo");
const getAllToDoFunction = require("../controllers/GetAllTodos");
const updateToDoFunction = require("../controllers/UpdateTodo");
const deleteToDofunction = require("../controllers/DeleteTodo");

router.post("/createToDo", createToDoFunction);
router.get("/getToDo/:id", getSingleFunction);
router.get("/getAllToDos", getAllToDoFunction);
router.put("/updateToDo/:id", updateToDoFunction);
router.delete("/deleteToDo/:id", deleteToDofunction);

module.exports = router;
