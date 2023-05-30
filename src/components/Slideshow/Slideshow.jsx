import { useState } from 'react'
import ArrowForward from '../../assets/arrow-forward.png'
import ArrowBack from '../../assets/arrow-back.png'
import './slideshow.css'

export default function Slideshow({ slides }) {
  // Utilisation du hook useState pour suivre la position actuelle du slideshow 
  //et mettre à jour cette position
  const [currentPosition, setCurrentPosition] = useState(0)

  //Fonction pour passer à l'image suivante
  //Elle vérifie currentPosition est égale à la longeur du nombre de diapo et qu'on soit à la dernière image(-1)
  //Si oui revient à la 1ère image (0) sinon elle incrémente currentPosition de 1
  const nextSlide = () => {
    setCurrentPosition(currentPosition === slides.length - 1 ? 0 :currentPosition+ 1)
  }


 //Fonction pour revenir à l'image précedente
 //Elle vérifie que currentPosition est égale à 0 (c'est-à-dire la 1ère image)
 //Si oui elle passe à la dernière image en soustrayant -1, sinon elle décrémente currenPosition de 1
  const prevSlide = () => {
    setCurrentPosition(currentPosition === 0 ? slides.length - 1 : currentPosition - 1)
  }

  if (slides.length > 1) {
    return (
      <div className="slider">
        <img className="slider-img" src={slides[currentPosition]} alt={slides.description} />
        <img
          className="arrow-back"
          src={ArrowBack}
          alt="Slide précédente"
          /*Ecouteur d'évènement*/ 
          onClick={prevSlide}
        />
        <img
          className="arrow-forward"
          src={ArrowForward}
          alt="Slide suivante"
          onClick={nextSlide}
        />
        <span className="slide-number">
          {currentPosition + 1} / {slides.length}
        </span>
      </div>
    )
  } else {
    /*Pour appartement avec seulement 1 image*/
    return(
    <div className="slider">
    <img  className="slider-img" src={slides[currentPosition]} alt={slides.description} />
      <span className="slide-number">
        {currentPosition + 1} / {slides.length}
      </span>
    </div>
    )
  }
}
