//Importamos todo lo que se require para la construcción del componente
import React, {useState} from 'react';
import dataJson from '../../data/menu.json';
import Product from './ProductMenu.jsx';

const ProductsContainer = ({selectProduct, state, handleQuantity }) => {
    const data = dataJson.products;

    const mainView = data.filter((element) => element.type === "Desayuno");
    const [products, setproducts] = useState(mainView);

    const productsType = (option) => {
        // eslint-disable-next-line default-case
        switch(option){
            case "Desayuno":
            const breakFast = data.filter((element) => element.type === option);
            setproducts(breakFast);
            break;
            case "Hamburguesas":
            const burgers = data.filter((element) => element.type === option);
            setproducts(burgers);
            break;
            case "Acompañamientos":
            const sidedish = data.filter((element) => element.type === option);
            setproducts(sidedish);
            break;
            case "Bebidas":
            const drinks = data.filter((element) => element.type === option);
            setproducts(drinks);
            break;
        }
    };

    return(
       <section>
           <nav>
               <div>
                   <li onClick={() => productsType("Desayuno")}>Desayuno</li>
                   <li onClick={() => productsType("Hamburguesas")}>Hamburguesas</li>
                   <li onClick={() => productsType("Acompañamientos")}>Acompañamientos</li>
                   <li onClick={() => productsType("Bebidas")}>Bebidas</li>
               </div>
               <section>
                   <ul>
                       {products.map((product) => (
                        <Product
                        product={product}
                        selectProduct={selectProduct}
                        key={product.id}
                        state={state}
                        handleQuantity={handleQuantity} />
                       ))}
                   </ul>
               </section>
           </nav>
       </section>
    )
}

export default ProductsContainer;

