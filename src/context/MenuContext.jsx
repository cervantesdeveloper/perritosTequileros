import { createContext, useState } from "react";

const MenuContext =  createContext();

// eslint-disable-next-line react/prop-types
const MenuProvider = ({children})=>{

    const [isOpen, setIsOpen] = useState(false);

    const burgerClick = ()=>{
        setIsOpen(!isOpen)
    }

    const data = {isOpen, burgerClick}

    return(
        <MenuContext.Provider value={data}>{children}</MenuContext.Provider>
    )
}

export {MenuProvider};
export default MenuContext;