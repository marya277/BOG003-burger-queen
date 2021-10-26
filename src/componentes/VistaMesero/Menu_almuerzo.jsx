import React from 'react'
import lunch from '../../data/restodeldia.js'

const MenuLunch = () => {
    return(
        <>
         <section>
        {
          lunch.items.map(item => {
            return (
              <div key={item.id}>
                <img src={item.image} className="card-img-top" alt="..." rel="preload" />
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

export default MenuLunch;
