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
        <div onSubmit={handleSubmit}>
            <h3>Pedido</h3>
            <section>
                <div>
                    <h4>Productos</h4>
                    <h4>Valor</h4>
                </div>
                <aside>
                    {state.products.map((item) =>(
                    <OrderProduct
                    key={item.id}
                    item={item}
                    handleQuantity={handleQuantity}
                    handleRemove={handleRemove}
                    />
                    ))}
                    <h3> Total: $ {SumTotal(state.products)}</h3>
                    {
                        state.products > 0 ?
                        <h3>Total: $ {SumTotal(state.products)}</h3>
                        :
                        ""
                    }
                </aside>
            </section>

            <button>Enviar a cocina</button>
            <button>Cancelar Pedido</button>
        </div>
    );
};

export default ContainerOrder;
