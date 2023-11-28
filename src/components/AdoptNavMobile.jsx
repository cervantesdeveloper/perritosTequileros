import { Link } from "react-router-dom";

import chevron from "../assets/chevronDown.svg";
import { useState } from "react";

export default function AdoptNavMobile(){
    const [isOpen, setIsOpen] = useState(false)

    const revealLinks = ()=>{
        setIsOpen(isOpen=> !isOpen)
    }

    return(
        <nav className={`adopt-nav-mobile ${isOpen ? "open" : "closed"}`}>
            <div className="adopt-nav-mobile__summary">
                <Link to="/adopt">Adoptar</Link>
                <img className={isOpen ? "open" : "closed"} src={chevron} alt="" onClick={revealLinks}/>
            </div>
            <div className="adopt-nav-mobile__links">
                <Link to="/adopt/process">Proceso de adopción</Link>
                <Link to="/adopt/dogs">Perros en adopción</Link>
            </div>
        </nav>
    )
}