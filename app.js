const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todosapp");

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;
const apiV1TodosRouter = require("./routers/api/v1/todos");

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/v1/todos", apiV1TodosRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
