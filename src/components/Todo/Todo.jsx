import React, { useEffect, useState } from 'react'
import TodoList from '../TodoList/TodoList'
import TodoInput from '../TodoInput/TodoInput'
import './Todo.css'
import axios from 'axios';

export default function Todo() {
  const [todo, setTodo] = useState([]);

  // Todo Item:
  // {
  //   todo: "your message",
  //   id: "l0ngIDNumb3r",
  //   isDone: false
  // }

  // useEffect has many uses depending on which syntax you use.
  // You can think of it as a place to do something when the component either:
  // is created, is updated, or is destroyed.
  // Below, we are running some code when the component is created.
  useEffect(() => {
    // Get all of the Todos that are currently in the backend.
    axios.get("http://localhost:3000/get-todos")
    .then(response => {
      console.log(response.data.todos);
      setTodo(response.data.todos);
    });
  }, []);

  // Every time the backend does something, it will
  // give us the updated todo list.

  // Add Todo
  function handleAddTodo(input) {
    axios.post("http://localhost:3000/add-todo", {todo: input})
    .then(response => {
      console.log(response.data.todos);
      setTodo(response.data.todos);
    });
  }

  // Update Todo (text)

  // Update Todo (isDone)

  // Delete Todo

  return (
    <div className="todo-grid">
      <div className="header">Todo:</div>
      <TodoList todo_list={todo} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </div>
  )
}
