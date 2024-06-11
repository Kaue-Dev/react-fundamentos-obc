import { Title } from "./components/Title"

export const App = () => {

  const text = "Este é um texto"

  return (
    <div>
      <Title />
      <p>{text}</p>

      <br />

      <p>Its easy, like 1 + 1 is {1 + 1}</p>
    </div>
  )
}