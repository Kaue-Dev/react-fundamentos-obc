import { useState } from 'react'

export const App = () => {

  const [name, setName] = useState('')

  return (
    <div>
      <label htmlFor="nameInput">Name:</label>
      <input 
        type="text" 
        id="nameInput" 
        onChange={(ev) => setName(ev.target.value)}
      />

      {name && <p>Hello, {name}!</p>}
    </div>
  )
}
