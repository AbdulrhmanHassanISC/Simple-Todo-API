const express = require("express")
const app = express()
// import files 
const TodosRouter = require("./routes/TodosRouter")
const porper = require("./utils/porper")

// middlewares
app.use(express.json());


// middleware to log requests
app.use((req, res, next) => {
  console.log(`req method: ${req.method} req url: ${req.url}`);
  next();
});

// routes
app.use("/todos",TodosRouter)


// error handling middleware
app.use(porper);


// server
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})


