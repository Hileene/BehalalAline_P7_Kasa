import './cards.css'
import {Link} from "react-router-dom"

/*Création des cartes pour la Gallerie*/
function Cards({ id, cover, title }) {
  return (
    <Link to={`/lodging/${id}`}>
    <div className="cards-items" id={id}>
            <img className="cards-cover" src={cover} alt="{title}"/>
            <div className="cards-darker"></div>
            <span className="cards-title">{title}</span>
        </div>
    </Link>
  )
}

export default Cards
