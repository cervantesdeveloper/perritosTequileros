import React from "react";
import { Outlet } from "react-router-dom";

import HeroPages from "../components/HeroPages"

export default function NewsLayout(){
    return(
        <>
            <HeroPages image="news" text="Noticias"/>
            <Outlet />
        </>
    )
}