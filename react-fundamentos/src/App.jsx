import { Card } from "./components/Card"
import { Title } from "./components/Title"

export const App = () => {

  const text = "Este é um texto"

  return (
    <div>
      <Title />
      <p>{text}</p>
      <br />
      <p>Its easy, like 1 + 1 is {1 + 1}</p>

      <Card posterImage="./poster.jpg" posterName="Pôster: Star Wars (1977)" />
      <Card posterImage="./poster-2.jpg" posterName="Pôster: Return Of The Jedi" />
    </div>
  )
}