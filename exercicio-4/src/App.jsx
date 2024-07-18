import { useState } from 'react'

export const App = () => {
  
  const [password, setPassword] = useState('')

  const generatePassword = () => {
    const length = 10
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let password = ''

    while (password.length < length) {
      const randomIndex = Math.floor(Math.random() * charset.length)
      password += charset[randomIndex]
    }

    setPassword(password)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
  }
  
  return (
    <div>
      <h1>Password Generator</h1>

      <div>
        <button onClick={generatePassword}>Generate Password</button>
        <button onClick={copyToClipboard}>Copy to Clipboard</button>
      </div>

      <span>{password}</span>
    </div>
  )
}
