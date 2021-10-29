import React from 'react';
import deleteImg from '../../assets/img/delete.png';

const OrderProduct = ({item, handleQuantity, handleRemove}) => {

    return(
        <section>
            <div>
            <div>
                <p>{item.name}</p>
            </div>
            <button onClick={(e) => {
                e.preventDefault() 
                handleQuantity(item.id, "-")}}>-</button>
                <p>{item.amount}</p>
            <button onClick={(e) => {
                e.preventDefault()
                handleQuantity(item.id, "+")}}>+</button>
            <button>
                <img src={deleteImg} alt="" onClick={(e) => {
                e.preventDefault()
                handleRemove(item.id)}}
                />
            </button>
            </div>
        </section>
    )
}

export default OrderProduct;
