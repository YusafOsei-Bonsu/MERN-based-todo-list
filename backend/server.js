const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
// Express Router instance
const todoRoutes = express.Router();
const Todo = require('./model/todo.model.js')

app.use(cors());
app.use(bodyParser.json());

// Adding the router as a middleware
app.use('/todos', todoRoutes);

// Connecting to the todos db
mongoose.connect("mongodb://127.0.0.1:27017/todos", { useNewUrlParser: true, useUnifiedTopology: true  });
const connection = mongoose.connection;

// Delivers all available todo items
todoRoutes.route('/').get((req, res) => Todo.find((err, todos) => err ? console.log(err) : res.json(todos)));

// Delivers a specific todo task by id
todoRoutes.route('/:id').get((req, res) => {
    let id = req.params.id;
    Todo.findById(id, (err, todo) => res.json(todo));
});

// Inserts a new todo task into the MongoDB database
todoRoutes.route('/add').post((req, res) => {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => res.status(200).json({ "todo": "todo added successfully" }))
        .catch(err => res.status(400).send("Inserting new todo failed!!"));
});

// Message is printed to confirm successful connection to the MongoDB db
connection.once('open', () => console.log("MongoDB database connection established successfully"));

app.listen(port, () => console.log(`Server is running on port ${port}`));