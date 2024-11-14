import React from 'react'

export default function Button(props) {
  return (
    <button
        disabled={props.isDisabled}
        className={props.isDisabled ? 'btn-disabled' : ''}
    >
        {props.text}
    </button>
  )
}
