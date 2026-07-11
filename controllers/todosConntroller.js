const { todos } = require("../dbConfig");

const handleError = (req, res) => {
  throw new Error("Test Error Middleware");
};

 const getalltodos = (req, res) => {
  const pages = Number(req.query.page)
  const limit = 5
  const result = todos.slice((pages - 1) * limit, pages * limit)
  if (!pages) {
    res.status(400).json({
      status: "failed",
      message: "Please provide page number"
    })
  } else {
    res.status(200).json({
      status: "success",
      total: todos.length,
      todos: result
    })
  }
}   

const getTodoById = (req, res) => {

  const id = +req.params.id
const todo = todos.find(todo => todo.id === id)
  res.status(200).json({
    status: "success",
    total: todos.length,
    todo: todo
  })
}

const createtodo = (req, res) => {
const {title} = req.body
  console.log(req.body)
if(!title){
  return res.status(400).json({ 
    status: "failed",
    message: "Title is required"
  })
}
  res.status(201).json({
    status: "success",
    data: req.body
  })
}

const updateTodo = (req, res) => {
  
  res.status(200).json({
    status: "success",
    data: req.body
  })
}


const deleteTodo = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null
  })
}

module.exports = {
  handleError,
  getalltodos,
  getTodoById,
  createtodo,
  updateTodo,
  deleteTodo
}