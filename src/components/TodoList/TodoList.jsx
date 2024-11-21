import React from 'react'
import './TodoList.css'
import Button from '../../common/Button'

export default function TodoList(props) {

  return (
    <div>
      <div className="button-tray">
        <Button
          text="Delete"
          onClick={() => props.handleDeleteTodo()}
          isDisabled={props.selectedTodoId ? false : true}
        />
        <Button
          text="Edit"
          isDisabled={props.selectedTodoId ? false : true}
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
          }}
        />
      </div>
      { props.todo_list.map(todo_item =>
      <label key={todo_item.id} className='todo-item'>
        <input
          type="radio"
          name="todo"
          id=""
          onChange={() => {
            props.setSelectedTodoId(todo_item.id);
            props.setSelectedTodoText(todo_item.todo);
          }}
        />
        {todo_item.todo}
      </label>)}
    </div>
  )
}
