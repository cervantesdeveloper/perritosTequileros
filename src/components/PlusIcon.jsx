import PropTypes from "prop-types";

export default function PlusIcon({plusIconClick, open, color}){
    const styles = {
        backgroundColor: color === "white" ? "#BF5630" : "#6D7345)"
    }
    return(
        <div 
            className={`plus-icon ${open && "minus-icon"}`} 
            onClick={plusIconClick} 
        >
            <span style={styles}></span>
            <span style={styles}></span>
        </div>
    )
}

PlusIcon.propTypes = {
    plusIconClick: PropTypes.func,
    open: PropTypes.bool,
    color: PropTypes.string
}