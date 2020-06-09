const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/todos", { useNewUrlParser: true, useUnifiedTopology: true  });
const connection = mongoose.connection;

// Message is printed to confirm successful connection to the MongoDB db
connection.once('open', () => console.log("MongoDB database connection established successfully"));

app.listen(port, () => console.log(`Server is running on port ${port}`));