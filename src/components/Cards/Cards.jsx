import './cards.css'


function Cards({ id, cover, title }) {
  return (
    <div className="cards-items" id={id}>
            <img className="cards-cover" src={cover} alt="{title}"/>
            <div className="cards-darker"></div>
            <span className="cards-title">{title}</span>
        </div>
  )
}

export default Cards
