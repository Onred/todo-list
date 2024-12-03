import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import './Todo.css'
import axios from 'axios';

export default function Todo() {
  const [todo, setTodo] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [editMode, setEditMode] = useState(false);

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
    .catch(error => {
      console.log("hi", error);
    })
    .then(response => {
      console.log(response.data.todos);
      setTodo(response.data.todos);
    })
  }, []);

  // Every time the backend does something, it will
  // give us the updated todo list.

  // Add Todo
  function handleAddTodo(input) {
    axios.post(
      "http://localhost:3000/add-todo",
      {todo: input}
    )
    .then(response => {
      console.log(response.data.todos);
      setTodo(response.data.todos);
    });
  }

  // Update Todo (text)
  function handleUpdateText(input) {
    axios.put(
      `http://localhost:3000/update-todo/${selectedTodo.id}`,
      {todo: input}
    )
    .then(response => {
      console.log(response.data.todos);
      setTodo(response.data.todos);
      let new_selected_todo = selectedTodo;
      new_selected_todo.todo = input;
      setSelectedTodo(new_selected_todo);
      setShowInput(false);
    });
  }
  
  // Update Todo (isDone)
  function handleUpdateIsDone() {
    axios.put(
      `http://localhost:3000/update-todo/${selectedTodo.id}`,
      {isDone: !selectedTodo.isDone}
    )
    .then(response => {
      console.log(response.data.todos);
      setTodo(response.data.todos);
      let new_selected_todo = selectedTodo;
      new_selected_todo.isDone = !new_selected_todo.isDone;
      setSelectedTodo(new_selected_todo);
    });
  }
  


  // Delete Todo
  function handleDeleteTodo() {
    axios.delete(`http://localhost:3000/delete-todo/${selectedTodo.id}`)
    .then(response => {
      console.log(response.data.todos);
      setTodo(response.data.todos);
      setShowInput(false);
      setSelectedTodo({});
    });
  }

  return (
    <div className="todo-grid">
      <div className="header">Todo:</div>
      <TodoList
        todo_list={todo}
        selectedTodo={selectedTodo}
        editMode={editMode}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateIsDone={handleUpdateIsDone}
        setShowInput={setShowInput}
        setSelectedTodo={setSelectedTodo}
        setEditMode={setEditMode}
      />
      { showInput ?
      <TodoInput
        handleAddTodo={handleAddTodo}
        handleUpdateText={handleUpdateText}
        setShowInput={setShowInput}
        editMode={editMode}
        selectedTodo={selectedTodo}
      /> :
      <div></div> }
    </div>
  )
}
