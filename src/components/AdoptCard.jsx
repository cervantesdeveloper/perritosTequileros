import PropTypes from "prop-types";

export default function AdoptCard({name, picture, age, size, genre, id}){
    let date = new Date;
    let calculatedAge = date.getFullYear() - parseInt(age);
    
    return(
        <div className="card-adoption">
            <div className="card-adoption__title">
                <h4>Nombre: {name}</h4>
            </div>
            <img src={picture}/>
            <ul className="card-adoption__suporting-text">
                <li>Edad: <span>{calculatedAge} años</span></li>
                <li>Tamaño: <span>{size}</span></li>
                <li>Sexo: <span>{genre}</span></li>
                <li>ID: <span>{id}</span></li>
            </ul>
        </div>
    )
}

AdoptCard.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string,
    age: PropTypes.string,
    size: PropTypes.string,
    genre: PropTypes.string,
    id: PropTypes.string,
    link: PropTypes.string,
}