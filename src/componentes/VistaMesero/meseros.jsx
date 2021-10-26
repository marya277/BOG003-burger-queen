import  { useState } from 'react';
//import db from './firebaseconfig'
//import swal from 'sweetalert';
import HeaderLogo from '../header_logo.jsx';
import MenuBreakfast from './Menu_desayuno.jsx';
import MenuLunch from './Menu_almuerzo.jsx';
import MenuDrinks from './Menu_Bebidas.jsx';


const WaitersView = () =>  {
  
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <header>
        <HeaderLogo></HeaderLogo>
      </header>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Desayuno
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Almuerzo-Cena
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Bebidas
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"} >
         <MenuBreakfast/>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          <MenuLunch/>
        </div>

        <div className={toggleState === 3 ? "content  active-content" : "content"}>
          <MenuDrinks/>
        </div>
      </div>
    </div>
  );
}

export default WaitersView;