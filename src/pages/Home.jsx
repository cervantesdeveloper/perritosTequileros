import AdoptHome from "../components/AdoptHome"
import Hero from "../components/Hero"
import Mision from "../components/Mision"
import NewsHome from "../components/NewsHome"
import Stats from "../components/Stasts"

export default function Home(){
    return (
        <>
            <Hero image="home" alt="Solo cientos de perros felices" />
            <div className="container quote">
                <div className="contain">
                    <h2>Amamos a los perros y les damos <span>esperanza</span></h2>
                    <blockquote>
                        “Las personas sensibles siempre tienen el corazón al revés, el alma al revés... 
                        <br/>
                        Una lágrima lista para caer, una sonrisa en los labios lista para explotar. 
                        <br/>
                        Viven en un equilibrio entre las alegrías y los dolores de la vida. 
                        <br/>
                        No son perfectos, al contrario. A veces incluso se autodestruyen porque respiran a través del pecho, nunca a través de sus pulmones... 
                        
                    </blockquote>
                    <p>Emile Savitry</p>
                </div>
            </div>
            <Mision />
            <Stats />
            <AdoptHome />
            <NewsHome />
        </>
        
    )
}