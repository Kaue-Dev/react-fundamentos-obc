import { Card } from "./components/Card"
import { Title } from "./components/Title"
import { useState } from "react"

const text = "Este é um texto"

export const App = () => {

  const [buttonText, setButtonText] = useState("Clique Aqui!")

  function handleClick() {
    setButtonText("Clicou!")
  }

  return (
    <div>
      <Title />
      <p>{text}</p>
      <p>Its easy, like 1 + 1 is {1 + 1}</p>

      <Card posterImage="./poster.jpg" posterName="Pôster: Star Wars (1977)" />
      <Card posterImage="./poster-2.jpg" posterName="Pôster: Return Of The Jedi" />

      <Title>
        Aqui vai o Children...
      </Title>

      <button onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  )
}