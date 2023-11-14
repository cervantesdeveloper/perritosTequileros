import PropTypes from "prop-types";
import TextLink from "./TextLink";

export default function NewsCard({picture, title, date, hour}){
    return(
        <figure className="news-card">
            <div className="news-card__media">
                <img src={picture}/>
            </div>
            <div className="news-card__title">
                <h4>{title}</h4>
            </div>
            <div className="news-card__date">
                <p>Día: {date}</p>
                <p>Hora: {hour}</p>
            </div>
            
            <TextLink text="Leer Más" link="/#"/>
        </figure>
    )
}

NewsCard.propTypes = {
    picture: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    hour: PropTypes.string
}