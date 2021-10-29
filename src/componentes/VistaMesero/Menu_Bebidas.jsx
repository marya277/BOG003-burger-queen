import React from 'react'
import drinks from '../../data/bebidas.js' 

const MenuDrinks = () => {
    return(
        <>
         <section>
        {
          drinks.items.map(item => {
            return (
              <div class= 'container-menu' key={item.id}>
                <div className='container-img'>
                  <img src={item.image} className="card-img-top" alt="..." rel="preload" />
                </div>
                <div className='container-food'>
                  <p className="card-text">{item.title}</p>
                </div>
                <div className='container-price'>
                  <p className="card-text">${item.cost}</p>
                </div>

              </div>
            );
          })
        }
      </section>
        </>
    )
}

export default MenuDrinks;
