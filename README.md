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

