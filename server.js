const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

const DATA_FILE = path.join(__dirname, 'todos.json');

app.use(express.static('public'));
app.use(express.json());

// Load todos
function loadTodos() {
  if (fs.existsSync(DATA_FILE)) {
    return JSON.parse(fs.readFileSync(DATA_FILE));
  }
  return [];
}

// Save todos
function saveTodos(todos) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2));
}

app.get('/todos', (req, res) => {
  res.json(loadTodos());
});

app.post('/todos', (req, res) => {
  const todos = loadTodos();
  const newTodo = {
    id: Date.now(),
    task: req.body.task,
    done: false
  };
  todos.push(newTodo);
  saveTodos(todos);
  res.status(201).json(newTodo);
});

app.delete('/todos/:id', (req, res) => {
  let todos = loadTodos();
  todos = todos.filter(todo => todo.id != req.params.id);
  saveTodos(todos);
  res.json({ message: 'Deleted' });
});

app.patch('/todos/:id', (req, res) => {
  const todos = loadTodos();
  const todo = todos.find(t => t.id == req.params.id);
  if (todo) {
    todo.done = !todo.done;
    saveTodos(todos);
    res.json({ message: 'Toggled' });
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
