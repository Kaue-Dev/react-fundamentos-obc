import { useCounter } from './hooks/useCounter'

export const App = () => {

  const { count, increment } = useCounter()
  
  return (
    <div>
      <h1>Conhecendo Hooks</h1>

      <button onClick={increment}>
        Incrementar
      </button>
      <p>{count}</p>
    </div>
  )
}