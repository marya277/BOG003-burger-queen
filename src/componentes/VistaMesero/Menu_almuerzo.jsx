import React from 'react'
import lunch from '../../data/restodeldia.js'

const MenuLunch = () => {
    return(
        <>
         <section>
        {
          lunch.items.map(item => {
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

export default MenuLunch;
