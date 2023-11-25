import PropTypes from "prop-types";

export default function HeroPages({image, alt}){

    return(
        <div className="hero-pages">
            <img src={`http://localhost:5173/hero_${image}.jpg`} alt={alt}/>
            <h1>Noticias</h1>
        </div>
    )
}

HeroPages.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string
}