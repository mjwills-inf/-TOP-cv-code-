import React from 'react'

export default function Button(props) {

  let { isEdit, toggle } = props

  return (
    <div>
      { isEdit === true ? 
        <button onClick={toggle.bind(this)}>Submit</button> 
        : <button onClick={toggle.bind(this)}>Edit</button>
      }
    </div>
  )
}
