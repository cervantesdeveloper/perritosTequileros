import PropTypes from "prop-types";
import PlusIcon from "./PlusIcon";
import { useState } from "react";

export default function AdoptCard({name, picture, age, size, genre, id, excerpt, color, plusIconColor}){
    let date = new Date;
    let calculatedAge = date.getFullYear() - parseInt(age);

    const [moreInfo, setMoreInfo]= useState(false);

    const manageClick = ()=>{
        setMoreInfo(moreInfo => !moreInfo)
        console.log(moreInfo)
    }
    
    return(
        <div className={`card-adoption ${color}`}>
            <div className="card-adoption__title">
                <h4>{name}</h4>
            </div>
            <img src={picture}/>
            <div className="card-adoption__suporting-text">
                <ul >
                    <li>Edad: <span>{calculatedAge} años</span></li>
                    <li>Tamaño: <span>{size}</span></li>
                    <li>Sexo: <span>{genre}</span></li>
                    <li>ID: <span>{id}</span></li>
                </ul>
                <p className={`excerpt ${moreInfo && "excerpt-opened"}`}>{excerpt}</p>
                <PlusIcon 
                    plusIconClick={manageClick} 
                    open={moreInfo}
                    color={plusIconColor}
                />
            </div>
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
    excerpt: PropTypes.string,
}