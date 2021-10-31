import React, {useState} from 'react';
import HeaderLogo from '../header_logo';
import ContainerOrder from './ContainerOrder';
import FormCustomer from './Form_cliente';
import ProductsContainer from './ProductsContainerMenu';

const ViewMesero = () => {

  const initialVlrs = {
    products: []
  }
  const [state, setState] = useState(initialVlrs)

const selectProduct = (product) => {
  setState((prev) =>({...prev, products: [...prev.products, product]}))
}

const handleQuantity = (id, option) => {
  const filter = state.products.map((item) => {
    if(item.id === id){
      if(option === "+"){
        return{...item, amount: item.amount + 1};
      }else if(option === "-" && item.amount > 1){
        return{...item, amount: item.amount - 1};
      }
    }
    return item;
  });
  setState((prev) => ({...prev, products: filter}))
};

const handleRemove = (id) =>{
  const newList = state.products.filter(item => item.id !== id)
  setState((prev) => ({...prev, products: newList}))
}

return(
  <div>
     <header>
    <HeaderLogo/>
    </header>
    <section>
      <FormCustomer/>
    </section>
    <article>
      <ProductsContainer
      selectProduct={selectProduct}
      state={state}
      handleQuantity={handleQuantity}  />
      <ContainerOrder
      state={state}
      setState={setState}
      handleQuantity={handleQuantity}
      handleRemove={handleRemove}
      />
    </article>

  </div>
)

}

export default ViewMesero;

