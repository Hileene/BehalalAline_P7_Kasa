import Banner from "../../components/Banner/Banner"
import HomeImg from "../../assets/home-img.png"

function Home() {
    return(
        <div>
            <Banner image={HomeImg} text= "Chez vous, partout et ailleurs" />   
        </div>
    )
}

export default Home