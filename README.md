This project focuses on the development of a MERN-based to-do list.

## Technologies used

- MongoDB
- Express
- React
- Node.js

## What Did I Do?

First, I created the front-end, which consisted of three main components: `CreateTodo.jsx`, `EditTodo.jsx` & `TodoList.jsx`; the front-end primarily involved React (i.e. JSX and HTML/CSS). The `CreateTodo.jsx` creates and inserts a new to-do task into the database. Next, `EditTodo.jsx` modifies an existing to-do task inside the database. Finally, `TodoList.jsx` displays all to-do tasks from the database. Moving on to the back-end, it was set-up using Express/Node.js and MongoDB; the former was used for server routing to insert and retrieve data to and from the MongoDB database, respectively. MongoDB hosted the local database that contained the to-do tasks. 

## What Did I Learn?

- I had no knowledge on how to set-up MongoDB on PowerShell. Fortunately from online sources, I learn' how to.. .
- - Run the MongoDB server & set the data directory by entering `& "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath "./data/db"`.
- - Open Mongo Shell using `& "C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"`.