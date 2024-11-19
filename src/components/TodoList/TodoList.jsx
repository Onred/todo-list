import React from 'react'
import './TodoList.css'
import Button from '../../common/Button'

export default function TodoList(props) {

  return (
    <div>
      <div className="button-tray">
        <Button text="Delete" isDisabled={true} />
        <Button text="Edit" isDisabled={true} />
        <Button text="Add New"/>
      </div>
      { props.todo_list.map(todo_item =>
      <label key={todo_item.id} className='todo-item'>
        <input type="radio" name="todo" id="" /> {todo_item.todo}
      </label>)}
    </div>
  )
}
