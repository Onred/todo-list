import React, { useEffect, useState } from 'react'
import Button from '../../common/Button'

export default function TodoInput(props) {

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const text_area_element = document.querySelector("#todo_text");
    if(props.editMode === true) {
      text_area_element.value = props.selectedTodo.todo;
    } else {
      text_area_element.value = "";
    }
  });
  

  function handleClick() {
    let value = document.querySelector("#todo_text").value;
    try {
      if(value === "") throw "Cannot submit empty todo.";
      if(value.length < 5) throw "Todo item too short!";
      if(props.editMode) {
        props.handleUpdateText(value);
      }
      else {
        props.handleAddTodo(value);
      }
      document.querySelector("#todo_text").value = "";
    }
    catch(error) {
      console.log("hi", error);
      setErrorMessage(error);
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
      <div className="input-submit-row"> 
        <span className="error-text">{errorMessage}</span>
        <div className="button-tray">
          <Button text="Cancel" onClick={() => props.setShowInput(false)}/>
          <Button text="Submit" onClick={() => handleClick()} />
        </div>
      </div>
      
    </div>
  )
}
