import PropTypes from "prop-types";

export default function HeroPages({image, alt, text}){

    return(
        <div className="hero-pages">
            <img src={`http://localhost:5173/hero_${image}.jpg`} alt={alt}/>
            <h1>{text}</h1>
        </div>
    )
}

HeroPages.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string
}