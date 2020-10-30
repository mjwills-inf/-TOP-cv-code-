import React from 'react'

export default function Button(props) {

  let { isEdit, toggle } = props

  

  return (
    <div>
      {isEdit 
      ? <button
          className="submit-button"
          onClick={toggle}
        >Submit</button>
      : <button
          className="submit-button"
          onClick={toggle}
        >Edit</button> }
    </div>
  )
}
