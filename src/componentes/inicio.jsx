import React from 'react';
import HeaderLogo from './header_logo.jsx'
import { Link } from "react-router-dom";
import mesero from '../img/mesero.png';
import chef from '../img/chef1.png'
//import './components.css';

const PagInicio = () => {
    return (
        <div className="Container">
        <header className="header">
            <HeaderLogo/>
        </header>
        <section className="home_icons mt-3">
            <div className="">
                <Link to="/meserxs">
                    <img src={mesero} alt="img_mesero" />
                </Link>
            </div>
            <div>
                <Link to="/chef">
                    <img src={chef} alt="img_chef"/>
                </Link>
            </div>

        </section>
        </div>
    )
}

export default PagInicio;