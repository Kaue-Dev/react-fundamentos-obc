import { useState } from 'react'

export const App = () => {

  const [isVisible, setIsVisible] = useState(true)

  return (
    <div>
      {isVisible ? (
        <h1>Is Visible</h1>
      ) : (
        <h1>Is Not Visible</h1>
      )}

      <button onClick={() => setIsVisible(!isVisible)}></button>
    </div>
  )
}