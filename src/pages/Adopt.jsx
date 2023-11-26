import React from "react"
import { Outlet } from "react-router-dom"

export default function Adopt(){
    return (
        <>
            <h1>Adopt content</h1>
            <Outlet />
        </>
        
    )
}