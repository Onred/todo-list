import React from 'react'
import Button from '../../common/Button'

export default function TodoList(props) {

  return (
    <div>
      <div className="button-tray">
        <Button
          text="Delete"
          onClick={() => props.handleDeleteTodo()}
          isDisabled={props.selectedTodo.id ? false : true}
        />
        <Button
          text={props.selectedTodo.isDone ? "Unmark Complete" : "Mark Complete"}
          onClick={() => props.handleUpdateIsDone()}
          isDisabled={props.selectedTodo.id ? false : true}
        />
        <Button
          text="Edit"
          isDisabled={props.selectedTodo.id ? false : true}
          onClick={() => {
            props.setEditMode(true);
            props.setShowInput(true);
          }}
        />
        <Button
          text="Add New"
          onClick={() => {
            props.setEditMode(false);
            props.setShowInput(true);
            props.setSelectedTodo({});
          }}
        />
      </div>
      { props.todo_list.map(todo_item =>
      <label key={todo_item.id} className='todo-item'>
        <input
          type="radio"
          name="todo"
          className="radio-button"
          id=""
          onChange={() => {
            props.setSelectedTodo(todo_item);
            if(!props.editMode) {
              props.setShowInput(false);
            }
          }}

          // If you want to change the input based on state,
          // you must USE the state to set the input.
          // In other words, the input wont reset or react
          // unless it's hooked up to a state somehow.
          checked={props.selectedTodo.id === todo_item.id ? true : false}
        />
        <span className={todo_item.isDone ? "done" : ""}>
          {todo_item.todo}
        </span>
      </label>)}
    </div>
  )
}
