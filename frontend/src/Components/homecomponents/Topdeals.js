import React from 'react'
import { items } from '../../data';
import Rating from '../Rating';

function Topdeals() {

    const electronic = items;

    return (
        <div className='topdeals'>
            <h2 className='heading'>Top of the Weaks</h2>
            <div className='top2'>
                <div className='productcart'>
                    {electronic.slice(0, 4).map((item, index) => (
                        <div className='product' key={index}>
                            <img src={item.img} alt={item.name} />
                            {/* <h3>discount</h3> */}
                            <h2>{item.name}</h2>
                            <h3>&#8377;{item.price}</h3>
                            <h3>{item.company}</h3>
                            <h3>{item.contact}</h3>
                            <Rating value={item.rating} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Topdeals