import React from 'react';
import OrderProduct from './SumaOrder.jsx';
import { createOrder } from '../../firebase/firestore.js'
import swal from 'sweetalert';

 const ContainerOrder = ({handleQuantity, handleRemove, state, setState, objOrder }) => {
    const sumTotal = (products) => {
        const total = products.reduce((acc, item) => acc + item.price * item.amount, 0)
        return total
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({...state, [name] : value})
      };
    
      const dataStore = async(state) => {
        createOrder(state);
        await setState(objOrder);
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        dataStore(state);
    };

    return (
        <div>
        <form className="orderList" onSubmit={handleSubmit}>
         {/*  Sección para input cliente y mesa */}
          <div className="row">
            <div className="col-5 m-3">
              <input
                type="text"
                name="customer"
                onChange={handleInputChange}
                value={state.customer}
                placeholder="Nombre cliente"
                required
              />
            </div>
            <div className="col-5 m-3">
              <input
                type="number"
                name="table"
                onChange={handleInputChange}
                value={state.table}
                placeholder="Número de mesa"
                required
              />
            </div>
          </div>
          <h3>Resumen del pedido</h3>
          <section className="orderDetails">
            <div className="titles">
              <h4>Productos</h4>
              <h4>Precio</h4>
            </div>
            <aside className="sumary">
              {state.products.map((item) => (
                <OrderProduct
                  key={item.id}
                  item={item}
                  handleQuantity={handleQuantity}
                  handleRemove={handleRemove}
                />
              ))}
              <h3>Total:  $ {sumTotal(state.products)} </h3>
              
            </aside>
          </section>
          
          <button className="submitButton" onClick={() =>{
            if(!state.customer.trim()){
              swal("Falta completar el nombre del cliente", "", "error");
            } else if(!state.table){
              swal("Falta completar número de mesa", "", "error");
            }
            else{
              swal("Excelente", "Orden registrada", "success");
            }
          }} >
            Enviar a cocina
          </button> 
          </form>
          
         {/*  Boton para cancelar pedido */}
        <form>
          <button  className="submitButton"  onClick={() =>{
           
          }} >
           Cancelar Pedido
          </button>  
        </form>
        </div>
      );
    };


export default ContainerOrder;

