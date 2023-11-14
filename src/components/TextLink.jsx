import PropTypes from "prop-types";

import arrow from "../assets/arrow.svg";

import {Link} from "react-router-dom";

export default function TextLink({text, link}){
    return(
        <Link to={link}>
            <div className="btn-text">
                {text}
                <img src={arrow}/>
            </div>
        </Link>
    )
}

TextLink.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string
}