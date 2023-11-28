import { Link } from "react-router-dom";


export default function AdoptNav(){
    

    return(
        <nav className="adopt-nav">
            <div className="adopt-nav__summary">
                <Link to="/adopt">Adoptar</Link>
            </div>
            <div className="adopt-nav__links">
                <Link to="/adopt/process">Proceso de adopción</Link>
                <Link to="/adopt/dogs">Perros en adopción</Link>
            </div>
        </nav>
    )
}