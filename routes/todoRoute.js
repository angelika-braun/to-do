import express from "express";

const todoRouter = express.Router();

const todos = [
{ "id": 1,
"todo": "Sport",
"time": "30min"
},
{ "id": 2,
"todo": "Bad putzen",
"time": "15min",
"completed": true
},
{ "id": 3,
"todo": "Wäsche bügeln",
"time": "30min",
"completed": false
},
{ "id": 4,
"todo": "lernen",
"time": "30min",
"completed": false
}
]

todoRouter.get("/", (req, res) => {
      res.json(todos);
    });

todoRouter.post('/', (req, res) => {
  const { todo, time, completed = false } = req.body;
  const newTodo = {
    id: todos.length + 1,
    todo,
    time,
    completed
  };
  todos.push(newTodo);
  res.status(201).json(newTodo)
});

// todoRouter.patch('/:id/important', (req, res) => {
//   const { id } = req.params;
//   const todoId = parseInt(id);
//   const index = todos.findIndex(todo => todo.id === todoId);

//   if (index !== -1) {
//     todos[index].important = !todos[index].important;
//     res.status(200).json(todos[index]);
//   } else {
//     res.status(404).json({ message: 'to-do nicht gefunden' });
//   }
// });

todoRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  const todoId = parseInt(id);
  const index = todos.findIndex(todo => todo.id === todoId);

  if (index !== -1 ) {
    todos.splice(index, 1);
    res.status(200).json({ message: 'to-do gelöscht'});
  } else {
    res.status(404).json({ message: 'to-do nicht gefunden'})
  }
});

export default todoRouter;