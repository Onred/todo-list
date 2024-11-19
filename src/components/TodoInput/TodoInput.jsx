import React, { useState } from 'react'
import './TodoInput.css'
import Button from '../../common/Button'
import axios from 'axios'

export default function TodoInput() {
  const [input, setInput] = useState("")

  function add_todo_item() {
    console.log("test")
    let test_post = axios.post("http://localhost:3000/add-todo", {todo: input});
    console.log(test_post);
  }

  return (
    <div>
      <textarea className="text-area" id="todo_text" onChange={(e) => setInput(e.target.value)}>
      </textarea>
      <div className="button-tray">
        <Button text="Cancel" />
        <Button text="Submit" callback={() => add_todo_item()} />
      </div>
      
    </div>
  )
}
