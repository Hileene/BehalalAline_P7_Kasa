import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Lodgings from '../../datas/lodgings.json'
import ArrowForward from '../../assets/arrow_forward.png'
import ArrowBack from '../../assets/arrow_back.png'
import './slideshow.css'

function Slideshow({ slides }) {
  const { id } = useParams()
  const foundLodgings = Lodgings.find((object) => object.id === id)
  const pictures = foundLodgings.pictures

  const [current, setCurrent] = useState(0)
  

  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className="slider">
      <ArrowBack className="left-arrow" onClick={prevSlide} />
      <ArrowForward className="right-arrow" onClick={nextSlide} />
      {pictures.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img
                src={slide}
                alt="Intérieur appartement"
                className="lodgings-pictures"
              />
            )}
            {index === current && (
              <strong className="pictures-count">
                {current + 1}/{pictures.length}
              </strong>
            )}
          </div>
        )
      })}
    </section>
  )
}

export default Slideshow
