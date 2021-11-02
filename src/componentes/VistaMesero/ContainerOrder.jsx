import React from 'react';
import OrderProduct from './SumaOrder.jsx';

 const ContainerOrder = ({handleQuantity, handleRemove, state}) => {
    const SumTotal = (products) => {
        const total = products.reduce((acc, item) => acc + item.price * item.amount, 0)
        return total
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <div className="container" onSubmit={handleSubmit}>
            <h3 className="border-bottom border-light">Resumen del pedido</h3>
            <section>
                <div className="row">
                    <h4 className="col-4 border border-white">Productos</h4>
                    <h4 className="col-5 border border-white">Cantidad</h4>
                    <h4 className="col-3 border border-white">Valor</h4>
                </div>
                <aside className="row">
                    <div className="col-6">

                    </div>
                    {state.products.map((item) =>(
                    <OrderProduct
                    key={item.id}
                    item={item}
                    handleQuantity={handleQuantity}
                    handleRemove={handleRemove}
                    />
                    ))}
                    <h3 className="total-value"> Total: $ {SumTotal(state.products)}</h3>
                    {
                        state.products > 0 ?
                        <h3>Total: $ {SumTotal(state.products)}</h3>
                        :
                        ""
                    }
                </aside>
            </section>

            <div className="button-container">
                <button type="button" className="btn btn-warning">Enviar a cocina</button>
                <button type="button" className="btn btn-danger" >Cancelar Pedido</button>
            </div>
        </div>
    );
};

export default ContainerOrder;

