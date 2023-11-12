import { Link } from "react-router-dom"
import PropTypes from "prop-types";

export default function ButtonLink({text, link}){
    return(
        <Link to={link}>
            <div className="btn-cta">
                {text}
            </div>
        </Link>
    )
}

ButtonLink.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string
}