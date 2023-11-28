import {React, useContext} from "react";
import { Outlet } from "react-router-dom";
import DeviceContext from "../context/DeviceContext";

import AdoptNavMobile from "./AdoptNavMobile";
import HeroPages from "./HeroPages";
import AdoptNav from "./AdoptNav";

export default function AdoptionLayout(){
    const {isMobil} = useContext(DeviceContext);

    return(
        <>
            <HeroPages image="adopt" alt="Adopta" text="Adopta"/>
            <main className="adopt-main">
                {isMobil 
                    ? <AdoptNavMobile /> 
                    : <AdoptNav />
                }
                <Outlet />
            </main>
            
        </>
    )
}