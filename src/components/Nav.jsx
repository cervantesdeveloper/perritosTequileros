import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <nav className="navMain">
            <Link to="/adopt">Adoptar</Link>
            <Link to="/about">Acerca de nosotros</Link>
            <Link to="/news">Noticias</Link>
        </nav>
    )
}