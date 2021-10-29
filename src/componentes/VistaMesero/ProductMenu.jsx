import React from 'react';

const Product = ({state, handleQuantity,selectProduct, product}) => {

    const addProducts = (id) => {
        const findProduct = state.products.find(item => item.id === id)
        if(findProduct){
            return handleQuantity(id, "+")
        }else{
            return selectProduct({...product, amount: 1});
        }
    }

    return(
        <div>
            <img src={product.img} alt=""/>
            <div>
                <li>{product.name}</li>
                <p>$ {product.price}</p>
            </div>
            <button onClick={() => addProducts(product.id)}>Agregar</button>
        </div>
    )

}

export default Product;
