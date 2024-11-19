import React from 'react'

export default function Button(props) {
  return (
    <button
        disabled={props.isDisabled}
        className={props.isDisabled ? 'btn-disabled' : ''}
        onClick={props.onClick}
    >
        {props.text}
    </button>
  )
}
