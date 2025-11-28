Elegant Todo App (HTML + Bootstrap + Axios + JSON Server)
A simple Todo List web app built with HTML, Bootstrap 5, Axios, and JSON Server as a fake REST API backend.

Features
Display tasks from db.json using Axios.

Add new tasks with task name and time.

Edit existing tasks in a Bootstrap modal.

Delete tasks.

Data persisted in db.json via JSON Server.

Project Structure
Example structure:

text
project-root/
│
├─ index.html
├─ script.js
├─ style.css
├─ db.json
└─ README.md
index.html – UI with Bootstrap and modal.

script.js – Axios calls and DOM logic.

style.css – Custom styles.

db.json – JSON Server database.

db.json Example
Use this structure in db.json:

json
{
  "todolist": [
    {
      "task": "BreakFast",
      "time": "7am",
      "id": "14bb"
    },
    {
      "task": "Study",
      "time": "10pm",
      "id": "55bc"
    },
    {
      "task": "Sleep",
      "time": "10pm",
      "id": "e397"
    },
    {
      "id": "b5b3",
      "task": "hihn",
      "time": "8pm"
    }
  ]
}
The frontend expects the API base URL:

js
api = "http://localhost:3000/todolist";
So the resource name in db.json must be "todolist".

Prerequisites
Node.js and npm installed.

json-server installed globally or locally.

Global install (recommended for learning):

bash
npm install -g json-server
Or local install:

bash
npm install json-server --save-dev
Starting JSON Server
From the project root (where db.json is present), run:

bash
json-server --watch db.json
Server runs at http://localhost:3000.

Todo API endpoint: http://localhost:3000/todolist.

Keep this server running while using the app.

Running the Frontend
Open index.html directly in your browser
or serve it with a simple static server (optional):

bash
npx serve .
Make sure JSON Server is already running with:

bash
json-server --watch db.json
Use the form to:

Add a task (task + time).

Edit using the “Edit” button (Bootstrap modal).

Delete using the “Delete” button.

Important Notes
The app uses Axios for all HTTP calls (GET, POST, PUT, DELETE) to http://localhost:3000/todolist.

When adding a task, ensure both task and time inputs are filled, or show a validation alert.

Each item in todolist must have a unique id field for edit and delete to work correctly (JSON Server will auto-generate a numeric id if you don’t pass one).
