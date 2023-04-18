import Banner from "../../components/Banner/Banner"
import HomeImg from "../../assets/home-img.png"
import Gallery from "../../components/Gallery/Gallery"

function Home() {
    return(
        <div className="homepage">
            <Banner image={HomeImg} text= "Chez vous, partout et ailleurs" /> 
            <Gallery />  
        </div>
       

    )
}

export default Home