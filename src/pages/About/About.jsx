import Banner from "../../components/Banner/Banner"
import AboutImg from "../../assets/about-img.png"
import {ValuesDatas} from "../../datas/ValuesDatas.jsx"
import Collapse from "../../components/Collapse/Collapse"
import "./about.css"

 function About() {
  
  return (
    <div>
      <Banner image={AboutImg} title="" />
      <main className="about-container">
        {/*une boucle sur le tableau ValuesDatas qui contient des données pour les sections de la page)*/} 
        {/*et rend un élément pour chaque élément de ce tableau. */}
        {ValuesDatas.map((data) => {
          return (
            //La clé (key) est utilisée pour aider React à identifier 
            //de manière unique chaque élément dans la boucle.
            <div key={data.id} className="about-collapse">
              {/* Cela rend le composant Collapse pour chaque section de la page */}
              <Collapse title={data.title} text={data.text} />
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default About