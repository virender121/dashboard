import React from 'react'
import { cardData } from '../Data/Data'
const Cards = () => {
  return (
    <div>
      {
        cardData.map((item, index) => (
            <div key={index}>
              <h3>{item.Name}</h3>
               <p>{item.previousPrice}</p>
               <p>{item.Price}</p>
               <button>{item.button}</button>
               <hr/>
               <span>{item.desc}</span>
            </div>
        ))
      }
    </div>
  )
}

export default Cards
