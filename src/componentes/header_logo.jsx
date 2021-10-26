import {Link} from "react-router-dom";
import React from 'react';
import logo from '../assets/img/logoKK.png';
import veinte from '../assets/img/veinte.png';


const HeaderLogo = () => {
    return (
        <div className="headerContainer">
            <img className="header_logo" src={veinte}  alt="logo24"/>
            <h1>KRUSTY KRAB FOOD</h1>
            <Link to="/">
                <img className="header_logo" src={logo} alt="logo_Pagina"/>
            </Link>
        </div>
    );
}

export default HeaderLogo;