## O que é React

- Biblioteca para criação de interfaces

- Desenvolvido pelo Facebook e Open Source em 2013

- As interfaces são construídas a partir de componentes

## Vantagens do React

- É mais simples

- É mais produtivo

- Facilita a manutenção

## Virtual DOM

> Se trata de uma cópia virtual do DOM, onde são feitas todas as alterações na interface, após isso o React faz uma comparação entre o DOM virtual e o DOM real e renderiza todas as alterações

## Primeira Página React

> Essa é uma forma não recomendada ⚠️

```html
<body>
  <div id="app"></div>

  <script 
    crossorigin 
    src="https://unpkg.com/react@18/umd/react.development.js">
  </script>

  <script 
    crossorigin 
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
  </script>

  <script>
    const { createElement } = React;

    const appDiv = document.getElementById('app');
    const root = ReactDOM.createRoot(appDiv)
    
    const h1 = createElement('h1', {}, 'Hello, React!');
    
    root.render(h1);
  </script>
</body>
```

## Conhecendo o JSX

- É uma extensão do Javascript

- Precisa ser compilado para poder ser interpretado pelo navegador

- É uma formato usado pelo React para representar elementos do DOM

- Facilita escrever o que deve ser renderizado na tela

- É Javascript junto com HTML

```jsx
const element = <h1>Olá, React!</h1>;

const div = (
  <div>
    <h1>Olá, React!</h1>
  </div>
)
```

## Conhecendo os Componentes

> Componentes são pequenos blocos que compõem uma interface

```jsx
function Button () {
  return <button>...</button>
}

function Container () {
  return (
    <div>
      <Button />
    </div>
  )
}
```

## Conhecendo o Vite

- Vite é uma ferramenta que ajuda o processo de Build de aplicações web

- O Vite possui um servidor de desenvolvimento

- O Vite também possui um empacotador pré-configurado para gerar assets otimizados para produção

- Cumpre um papel semelhante ao do Webpack

```bash
npm create vite@latest
```

## Dados Dinâmicos no JSX

> Um dado dinâmico é um dado que pode ser manipulado ou fornecido pelo próprio Javascript

```jsx
const text = "Este é um texto"

return (
  <div>
    <h1>Olá, React!</h1>
    <p>{text}</p>
  </div>
)
```

```jsx
<p>It's easy, like 1 + 1 is {1 + 1}</p>
```

## Criando Componentes

> Componentes devem ser nomeados utilizando PascalCase

> Componentes devem ficar dentro de uma pasta chamada "components"

```jsx
export const Title = () => {
  return <h1>Olá, React!</h1>
}
```

```jsx
import { Title } from "./components/Title"

export const App = () => {
  return <Title />
}
```

## Conhecendo o Fragment

> Existe uma regra nos componentes React, onde os componentes podem retornar apenas um elemento "pai"

- Para resolver isso e evitar uma poluição no HTML, existe um componente do React chamado Fragment, que deve ser usado ao redor de todo o conteúdo

```jsx
import { Fragment } from "react"

export const App = () => {
  return (
    <Fragment>
      <h1>Hello, React!</h1>
      <p>Its easy, like 1 + 1 is {1 + 1}</p>
    </Fragment>
  )
}
```

> Atualmente não é mais necessário importar o Fragment para utilizá-lo

```jsx
export const App = () => {
  return (
    <>
      <h1>Hello, React!</h1>
      <p>Its easy, like 1 + 1 is {1 + 1}</p>
    </>
  )
}
```

## Props no React

```jsx
export const Card = ({ posterImage, posterName }) => {
  return (
    <div>
      <h1>{posterName}</h1>
      <img src={posterImage} alt="Pôster" />
    </div>
  )
}
```

```jsx
export const App = () => {
  return (
    <div>
      <Card posterImage="./poster-1.jpg" posterName="Pôster 1" />
      <Card posterImage="./poster-2.jpg" posterName="Pôster 2" />
    </div>
  )
}
```

