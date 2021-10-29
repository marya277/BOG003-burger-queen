//import  { useState } from 'react';
//import db from './firebaseconfig'
//import swal from 'sweetalert';
import HeaderLogo from '../header_logo.jsx';
import FormCustomer from './Form_cliente.jsx';
import data from '../../data/menu.json';


const WaitersView = () =>  {

  const dataJson = data.products;
  

  return (
    <div className="container">
      <header>
        <HeaderLogo></HeaderLogo>
      </header>
      <FormCustomer/>

      {dataJson}

    </div>
  );
}

export default WaitersView;