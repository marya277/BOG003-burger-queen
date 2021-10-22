import {Link} from "react-router-dom";
import React from 'react';
import logo from '../img/logoKK.png'


const HeaderLogo = () => {
    return (
        <div>
            <Link to="/">
                <img className="header_logo" src={logo} alt="logo_Pagina"/>
            </Link>
        </div>
    );
}

export default HeaderLogo;