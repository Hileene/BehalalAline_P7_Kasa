import Slideshow from '../../components/Slideshow/Slideshow'
import Lodgings from '../../datas/lodgings.json'
import { useParams } from 'react-router-dom'
import Error from '../Error/Error'
import Tags from '../../components/Tags/Tags'
import StarActive from '../../assets/star-red.png'
import StarInactive from '../../assets/star-grey.png'
import Collapse from '../../components/Collapse/Collapse'
import './lodging.css'

export default function Lodging() {
  /* Récupère l'id de chaque appartement*/
  const { id } = useParams()

/* Méthode find recherche les données pour chaque appartement dans le tableau lodgings.json */
  const foundLodgings = Lodgings.find((e) => e.id === id)

  if (foundLodgings) {
    /*Méthode map récupère la liste des équipements pour chaque appartement*/
    const equipments = foundLodgings.equipments.map((equipment, index) => {
      return <li key={index}>{equipment}</li>
  })

    return (
      <>
        {/*Infos Logements*/}
        <div className="lodgings-container">
          <Slideshow slides={foundLodgings.pictures} />
          <section className="lodgings-content">
            <div className="lodgings-title-tags">
              <h1 className="lodgings-title">{foundLodgings.title}</h1>
              <span className="lodgings-location">
                {foundLodgings.location}
              </span>
              {/*Tags*/}
              <div className="tags">
                {foundLodgings.tags.map((tags, index) => (
                  <Tags key={index} name={tags} />
                ))}
              </div>
            </div>

            {/*Hôtes*/}
            <div className="lodgings-host">
              <div className="lodgings-host-info">
                <span className="host">
                  {foundLodgings.host.name}
                </span>
                <img
                  className="host-picture"
                  src={foundLodgings.host.picture}
                  alt="hôte"
                />
              </div>
              <div className="lodgings-ratings">
                {/*Création d'un tableau qui va itérer 5 fois avec la fonction map */}
              {[...Array(5)].map((star, index) => {
                /*Ici on ajoute 1 parce que la valeur de départ dans les array est 0 */
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= foundLodgings.rating ? StarActive : StarInactive} alt="star" />
								)
							})}
                </div>
            </div>
          </section>
          {/*Description et équipements*/}
          <div className="lodgings-description">
        <Collapse text={foundLodgings.description} title="Description" />
        <Collapse text={equipments} title="Equipements" />
      </div>

        </div>
      </>
    )
  } else {
    return <Error />
  }
}
