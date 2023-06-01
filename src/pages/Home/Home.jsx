import Banner from "../../components/Banner/Banner"
import HomeImg from "../../assets/home-img.png"
import Gallery from "../../components/Gallery/Gallery"
import "./home.css"

function Home() {
    return(
        <div className="homepage">
            <Banner className="banner-home-mob banner-img-mob" image={HomeImg} text= "Chez vous, partout et ailleurs" /> 
            <Gallery />  
        </div>
       

    )
}

export default Home