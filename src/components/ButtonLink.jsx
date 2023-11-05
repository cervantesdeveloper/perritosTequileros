import { Link } from "react-router-dom"
import PropTypes from "prop-types";

export default function ButtonLink({text}){
    return(
        <Link to="/about">
            <div className="btn-cta">
                {text}
            </div>
        </Link>
    )
}

ButtonLink.propTypes = {
    text: PropTypes.string
}