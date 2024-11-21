import React, { useEffect, useState } from 'react'
import './TodoInput.css'
import Button from '../../common/Button'
import axios from 'axios'

export default function TodoInput(props) {

  useEffect(() => {
    const text_area_element = document.querySelector("#todo_text");
    if(props.editMode === true) {
      text_area_element.value = props.selectedTodoText;
    } else {
      text_area_element.value = "";
    }
  });
  

  function handleClick() {
    let value = document.querySelector("#todo_text").value;
    if(value !== "") {
      props.handleAddTodo(value);
      document.querySelector("#todo_text").value = "";
    }
  }

  return (
    <div>
      <label
        htmlFor="todo_text"
        className="text-area-label"
      >
        { props.editMode ? "Edit" : "Add New" }
      </label>
      <textarea className="text-area" id="todo_text">
      </textarea>
      <div className="button-tray">
        <Button text="Cancel" onClick={() => props.setShowInput(false)}/>
        <Button text="Submit" onClick={() => handleClick()} />
      </div>
    </div>
  )
}
