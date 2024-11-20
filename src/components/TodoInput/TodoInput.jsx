import React, { useState } from 'react'
import './TodoInput.css'
import Button from '../../common/Button'
import axios from 'axios'

export default function TodoInput(props) {


  // function add_todo_item() {
  //   console.log("test")
  //   let test_post = axios.post("http://localhost:3000/add-todo", {todo: input});
  //   console.log(test_post);
  // }

  function handleClick() {
    let value = document.querySelector("#todo_text").value;
    if(value !== "") {
      props.handleAddTodo(value);
      document.querySelector("#todo_text").value = "";
    }
  }

  return (
    <div>
      <textarea className="text-area" id="todo_text">
      </textarea>
      <div className="button-tray">
        <Button text="Cancel" onClick={() => props.setShowInput(false)}/>
        <Button text="Submit" onClick={() => handleClick()} />
      </div>
    </div>
  )
}
