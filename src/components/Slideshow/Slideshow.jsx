import { useState } from 'react'
import ArrowForward from '../../assets/arrow-forward.png'
import ArrowBack from '../../assets/arrow-back.png'
import './slideshow.css'

export default function Slideshow({ slides }) {
  const [currentPosition, setCurrentPosition] = useState(0)

  const nextSlide = () => {
    setCurrentPosition(currentPosition === slides.length - 1 ? 0 :currentPosition+ 1)
  }

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
    return(

    <div className="slider">
    <img src={slides[currentPosition]} alt={slides.description} />
      <span className="slide-number">
        {currentPosition + 1} / {slides.length}
      </span>
    </div>
    )
  }
}
