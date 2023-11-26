import PropTypes from "prop-types";

export default function Stat({ number, text, image, alt}){
    return(
        <div className="stat">
            <img src={`http://localhost:5173/public/${image}.jpg`} alt={alt} />
            <div className="data">
                <b>{number}</b>
                <p>{text}</p>
            </div>
        </div>
    )
}

Stat.propTypes = {
    number: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string
}

