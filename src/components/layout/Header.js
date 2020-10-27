import React from 'react'

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'centre',
  padding: '20px' 
}

export default function Header() {
  return (
    <header style={ headerStyle }>
      <h1>The Odin Project C.V.</h1>
    </header>
  )
}
