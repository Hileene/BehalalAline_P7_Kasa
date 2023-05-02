import Slideshow from '../../components/Slideshow/Slideshow'
import Lodgings from '../../datas/lodgings.json'
import { useParams } from 'react-router-dom'


export default function Lodging() {
  const { id } = useParams()
  const foundLodgings = Lodgings.find((object) => object.id === id)
  const pictures = foundLodgings.pictures
  

  return (
    <>
      <Slideshow slides={pictures} />
      <main className='lodgings'>
        
      </main>
    </>
  )
}
