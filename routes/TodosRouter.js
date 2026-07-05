const express = require("express");

const router = express.Router();

const todos = [
  {
    id: 1,
    title: "Learn Express routing",
    completed: true,
  },
  {
    id: 2,
    title: "Read about route parameters",
    completed: true,
  },
  {
    id: 3,
    title: "Practice query strings",
    completed: false,
  },
  {
    id: 4,
    title: "Build a users API",
    completed: false,
  },
  {
    id: 5,
    title: "Learn middleware",
    completed: false,
  },
  {
    id: 6,
    title: "Study express.Router()",
    completed: false,
  },
  {
    id: 7,
    title: "Write GET endpoint",
    completed: true,
  },
  {
    id: 8,
    title: "Write POST endpoint",
    completed: false,
  },
  {
    id: 9,
    title: "Write PUT endpoint",
    completed: false,
  },
  {
    id: 10,
    title: "Write DELETE endpoint",
    completed: false,
  },
];


router.get("/error", (req, res) => {
  throw new Error("Test Error Middleware");
});


router.get("/", (req, res) => {

  const pages = Number(req.query.page)
  const limit = 5
  const result = todos.slice((pages - 1) * limit, pages * limit)
  if (!pages) {
    res.json(todos)
  } else {
    res.json(result)
  }

})

router.get("/:id", (req, res) => {

  const id = +req.params.id

  res.json(todos.find(todo => todo.id === id))
})


router.post("/", (req, res) => {
const {title} = req.body
  console.log(req.body)
if(!title){
  return res.status(400).json({ message: 'Title is required' })
}
  res.json(req.body)
})

router.put("/:id", (req, res) => {
  res.send("Todo updated!")
})

router.delete("/:id", (req, res) => {
  res.send("Todo deleted!")
})




module.exports = router;