import React from 'react'
import TodoList from '../TodoList/TodoList'
import TodoInput from '../TodoInput/TodoInput'
import './Todo.css'

export default function Todo() {

  const todo = [
    {
      objective: "Clean Office",
      isComplete: false,
      id: 1
    },
    {
      objective: "Goto Bank",
      isComplete: true,
      id: 2
    },
    {
      objective: "Wash Car",
      isComplete: false,
      id: 3
    },
    {
      objective: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aut delectus corrupti odit harum eos nemo expedita tempore quae dolorum qui repellendus laudantium neque iusto suscipit natus, ea hic amet assumenda! Doloribus, adipisci at. Rerum minus vitae voluptates ad nobis. Recusandae facilis doloremque ea modi harum totam non, quidem minima!",
      isComplete: false,
      id: 4
    }
  ];

  return (
    <div className="todo-grid">
      <div className="header">Todo:</div>
      <TodoList todo_list={todo} />
      <TodoInput/>
    </div>
  )
}
