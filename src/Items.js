import React from 'react'
import './Items.css'

function Items({ image, title, price }) {
  return (
    <div className="items">
        <div className="details">
            <img src={image} alt="" />
            <h4>{title}</h4>
            <h6>${price}</h6>
        </div>
    </div>
  )
}

export default Items