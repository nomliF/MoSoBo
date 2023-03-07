import Logo from "../assets/logo2.svg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import React from 'react';

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={Logo} alt={Logo}/>
                <div className="hiddenLinks">
                    
                    <Link to="/"> Home </Link>                   
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
}

export default Navbar;