const express = require("express")

const app = express()

const TodosRouter = require("./routes/TodosRouter")

app.use(express.json());



app.use((req, res, next) => {
  console.log(`req method: ${req.method} req url: ${req.url}`);
  next();
});


app.use("/todos",TodosRouter)

app.use((err, req, res, next) => {

console.log(err);

res.status(500).json({ message: 'Internal Server Error' });

});


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})


