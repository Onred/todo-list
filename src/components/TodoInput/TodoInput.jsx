import React from 'react'
import './TodoInput.css'
import Button from '../../common/Button'

export default function TodoInput() {
  return (
    <div>
      <textarea className="text-area" name="" id="">

      </textarea>
      <div className="button-tray">
        <Button text="Cancel" />
        <Button text="Submit" />
      </div>
      
    </div>
  )
}
