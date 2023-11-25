import PropTypes from "prop-types";
import { useContext } from "react";

import DeviceContext from "../context/DeviceContext";

import ButtonDonate from "./ButtonDonate";

export default function Hero({image, alt}){
    const {isMobil} = useContext(DeviceContext);

    return(
        <div className="hero">
            
            <img src={`http://localhost:5173/hero_${image}.jpg`} alt={alt}/>
            
            {isMobil && <ButtonDonate />}
        </div>
    )
}

Hero.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string
}