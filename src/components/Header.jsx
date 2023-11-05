import { Link } from "react-router-dom"
import { useContext} from "react";

import MenuContext from "../context/MenuContext";
import DeviceContext from "../context/DeviceContext";

import Nav from "./Nav";
import Burger from "./Burger";
import ButtonDonate from "./ButtonDonate";


export default function Header(){
    
    const {burgerClick, isOpen} = useContext(MenuContext);
    const {isMobil} = useContext(DeviceContext);
    
    return(
        <header className="header">
            <Link to="/">
                <img src="logo.png" alt="Perritos Tequileros" onClick={burgerClick}/>
            </Link>
            {isMobil 
                ? <Burger burgerClick={burgerClick} open={isOpen}/> 
                : <Nav />}
            {!isMobil && <ButtonDonate />}
        </header>
    )
}