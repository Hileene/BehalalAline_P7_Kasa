import Banner from "../../components/Banner/Banner"
import AboutImg from "../../assets/about-img.png"
import {ValuesDatas} from "../../datas/ValuesDatas.jsx"
import Collapse from "../../components/Collapse/Collapse"
import "./about.css"

 function About() {
  
  return (
    <div>
      <Banner image={AboutImg} title="" />
      <main className="about">
        {ValuesDatas.map((data) => {
          return (
            <div key={data.id} className="about_main_collapse">
              <Collapse title={data.title} text={data.text} />
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default About