import { useState } from 'react'
import { Input } from './components/Input'

export const App = () => {

  const [name, setName] = useState('')

  return (
    <div>
      <label htmlFor="nameInput">Name:</label>
      <Input setName={setName} />

      {name && <p>Hello, {name}!</p>}
    </div>
  )
}
