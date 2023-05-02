import { useState } from 'react'
import ArrowForward from '../../assets/arrow-forward.png'
import ArrowBack from '../../assets/arrow-back.png'
import './slideshow.css'

export default function Slideshow({ slides }) {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  if (slides.length > 1) {
    return (
      <section className="slider">
        <img className="slider-img" src={slides[current]} alt={slides.description} />
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
          {current + 1} / {slides.length}
        </span>
      </section>
    )
  } else {
    return(

    <section className="slider">
    <img src={slides[current]} alt={slides.description} />
      <span className="slide-number">
        {current + 1} / {slides.length}
      </span>
    </section>
    )
  }
}
