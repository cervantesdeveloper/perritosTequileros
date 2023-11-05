import PropTypes from "prop-types";

export default function Burger({burgerClick, open}){
    return(
        <div className={`burger ${open && "times"}`} onClick={burgerClick}>
            <span></span><span></span><span></span>
        </div>
    )
}

Burger.propTypes = {
    burgerClick: PropTypes.func,
    open: PropTypes.bool
}