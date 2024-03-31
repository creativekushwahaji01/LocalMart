import React from 'react'
import { items } from '../../data'
import Rating from '../Rating'

function Todaysdeal() {
    return (
        <div className='todaydeal'>
            <h2 className="todayh2 heading">deal of the day</h2>
            <div className='deal_1'>
                {items.slice(0,2).map((item, index) => (
                    <div className='deal_product product' key={index}>
                        <img className='dealimg' id='deallimghg' src={item.img} alt={item.name} />
                        <div className='deal_product_description'>
                            <h3>discount</h3>
                            <h2>{item.name}</h2>
                            <h3>{item.company}</h3>
                            <h3>{item.contact}</h3>
                            <Rating value={item.rating}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Todaysdeal
