import React from "react";
import { Outlet } from "react-router-dom";

import Header from './Header'
import NavMobil from './NavMobil'

import { MenuProvider } from '../context/MenuContext'

export default function Layout(){
    return(
        <>  
            <MenuProvider>
                <Header />
                <NavMobil />
            </MenuProvider>
            <Outlet />
        </>
    )
}