import React, {useState} from 'react';
import HeaderLogo from '../header_logo';
import ContainerOrder from './ContainerOrder';
//import FormCustomer from './Form_cliente';
import ProductsContainer from './ProductsContainerMenu';


const ViewMesero = () => {

  const objOrder = {
    customer: "",
    table: "",
    products: [],
  
  }
  const [state, setState] = useState(objOrder)

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

    <article className="container-fluid">
      <div className="row mt-3" >
        <div className="col-6">
          <ProductsContainer
            selectProduct={selectProduct}
            state={state}
            handleQuantity={handleQuantity}
          />
        </div>

        <div className="resume-order col-6">
          <ContainerOrder
            state={state}
            setState={setState}
            handleQuantity={handleQuantity}
            handleRemove={handleRemove}
            objOrder={objOrder}
          />
        </div>
      </div>
    </article>
  </div>
)

}

export default ViewMesero;

