import React from 'react'
import breakfast from '../../data/desayuno.js'

const MenuBreakfast = () => {
    return(
        <>
         <section>
        {
          breakfast.items.map(item => {
            return (
              <div className= 'container-menu' key={item.id}>
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

export default MenuBreakfast;

