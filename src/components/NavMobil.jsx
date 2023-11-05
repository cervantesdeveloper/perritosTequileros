import { Link } from "react-router-dom"
import { useContext } from "react"
import MenuContext from "../context/MenuContext"
import DeviceContext from "../context/DeviceContext";

export default function NavMobil(){
    const {isOpen, burgerClick} = useContext(MenuContext);
    const {isMobil} = useContext(DeviceContext);
    return(
        isMobil 
        ? (
            <nav className={`navMobil ${isOpen && "navOpen"}` } onClick={burgerClick}>
            <Link to="/adopt">Adoptar</Link>
            <Link to="/about">Acerca de nosotros</Link>
            <Link to="/news">Noticias</Link>
        </nav>
        )
        : <></>
    )
}