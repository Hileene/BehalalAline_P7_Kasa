import "./gallery.css";
import Cards from "../Cards/Cards";
import Lodgings from "../../datas/lodgings.json"

export default function Gallery() {
    return (
        <section className='home-gallery'>
            {Lodgings.map(lodging => {
                return (
                    <Cards
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