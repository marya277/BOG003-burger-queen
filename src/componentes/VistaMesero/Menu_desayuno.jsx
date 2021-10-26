import React from 'react'
import breakfast from '../../data/desayuno.js'

const MenuBreakfast = () => {
    return(
        <>
         <section>
        {
          breakfast.items.map(item => {
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

export default MenuBreakfast;

