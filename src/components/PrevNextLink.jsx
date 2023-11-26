import PropTypes from "prop-types";

import arrow from "../assets/arrow.svg";
import arrowLeft from "../assets/arrowLeft.svg"

import {Link} from "react-router-dom";

export default function PrevNextLink({text, link, direction, className}){
    return(
        <Link to={link}>
            <div className={`btn-text__prev-next ${className}`}>
                {direction === "left" && <img src={arrowLeft} className="arrow-left"/>}
                {text}
                {direction === "right" && <img src={arrow}/>}
            </div>
        </Link>
    )
}

PrevNextLink.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    direction: PropTypes.string
}