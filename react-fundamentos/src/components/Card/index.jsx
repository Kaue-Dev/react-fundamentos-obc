import { container, card } from './styles.module.css'
import PropTypes from 'prop-types';

export const Card = ({ posterImage, posterName }) => {
  return (
    <div className={container}>
      <div className={card}>
        <div>
          <img src={posterImage} alt="Pôster" />
        </div>
        <div>
          <h1>{posterName}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis alias non quaerat reiciendis, quas molestias, corporis, ea obcaecati commodi incidunt distinctio dolores voluptate consectetur repellendus ab? Iure quo illum beatae.</p>
          <button>Comprar Agora</button>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  posterImage: PropTypes.string.isRequired,
  posterName: PropTypes.string.isRequired
}