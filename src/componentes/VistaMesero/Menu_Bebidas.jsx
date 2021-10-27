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
                <p className="card-text">{item.title}</p>
                <p className="card-text">${item.cost}</p>

              </div>
            );
          })
        }
      </section>
        </>
    )
}

export default MenuDrinks;
