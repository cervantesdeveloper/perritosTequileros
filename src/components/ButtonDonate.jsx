import { Link } from "react-router-dom"
import heart from "../assets/heart.svg"

export default function ButtonDonate(){
    return(
        <Link to="donate">
            
            <div className="btn-cta">
                <img src={heart}></img>
                Donar
            </div>
        </Link>
    )
}