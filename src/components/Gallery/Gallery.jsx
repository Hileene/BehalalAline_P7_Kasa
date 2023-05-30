import "./gallery.css";
import Cards from "../Cards/Cards";
import Lodgings from "../../datas/lodgings.json"

export default function Gallery() {
    return (
        <section className='home-gallery'>
            {Lodgings.map(lodging => {
                return (
                    <Cards
                    //Cards reçoit plusieurs props qui sont extraits de l'objet lodging
                    //Ces props sont utilisé pour afficher les détails du logement
                        key={lodging.id}
                        id={lodging.id}
                        title={lodging.title}
                        cover={lodging.cover}
                    />
                )
            })}
        </section>
    )
}