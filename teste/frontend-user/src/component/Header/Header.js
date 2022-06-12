import './Header.css'
import React from "react";
import logo from "../../assets/cps-logo.png"

export function Header(){
    return (
        <div class="header">
            <img src={logo}/>
        </div>
    )
}