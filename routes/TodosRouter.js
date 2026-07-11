const express = require("express");

const router = express.Router();


const todoController = require("../controllers/todosConntroller");

router.get("/error", todoController.handleError)

router.get("/", todoController.getalltodos)
router.get("/:id", todoController.getTodoById)
router.post("/", todoController.createtodo)
router.put("/:id", todoController.updateTodo)
router.delete("/:id", todoController.deleteTodo)




module.exports = router;