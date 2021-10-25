import React from 'react';
import HeaderLogo from './header_logo.jsx'
import { Link } from "react-router-dom";
import mesero from '../img/mesero.png';
import chef from '../img/chef1.png'
//import './components.css';

const PagInicio = () => {
    return (
        <div className="container">
            <HeaderLogo/>
            <section className="question">
                <p>¿Cuál es tu cargo?</p>
            </section>
            <section className="home_icons">
                <div className="button-mesero">
                    <h2>Meserx</h2>
                    <Link to="/meserxs">
                        <img className="meseroImg" src={mesero} alt="img_mesero" />
                    </Link>
                </div>
                <div className="button-chef">
                    <h2>Jefe de Cocina</h2>
                    <Link to="/chef">
                        <img className="chefImg" src={chef} alt="img_chef" />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default PagInicio;