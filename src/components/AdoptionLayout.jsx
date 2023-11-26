import React from "react";
import { Outlet } from "react-router-dom";

export default function AdoptionLayout(){
    return(
        <>
            <h1>Adoption layout</h1>
            <Outlet />
        </>
    )
}