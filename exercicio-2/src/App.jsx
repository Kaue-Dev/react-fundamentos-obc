import { container, card } from './App.module.css'

export const App = () => {
  return (
    <div className={container}>
      <div className={card}>
        <div>
          <img src="/poster.jpg" alt="Pôster" />
        </div>
        <div>
          <h1>Pôster: Star Wars (1997)</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis alias non quaerat reiciendis, quas molestias, corporis, ea obcaecati commodi incidunt distinctio dolores voluptate consectetur repellendus ab? Iure quo illum beatae.</p>
          <button>Comprar Agora</button>
        </div>
      </div>
    </div>
  )
}