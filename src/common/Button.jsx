import React, { useContext } from 'react'
import { ThemeContext } from '../Contexts'

export default function Button(props) {
  const theme = useContext(ThemeContext);
  return (
    <button
        disabled={props.isDisabled}
        className={props.isDisabled ? 'btn-disabled' : ''}
        onClick={props.onClick}
        style={theme === "light" ? {backgroundColor: "rgba(0,0,0,0)", borderColor: "white"} : null }
    >
        {props.text}
    </button>
  )
}
