import React from 'react';
import { items } from '../data';
import Rating from './Rating';

function Productcart(value) {
    // Fetching data from external source (e.g., API)
    const electronic = items;

    return (
        <div className='productcart'>
            {electronic.map((item, index) => (
                <div className='product' key={index}>
                    <img src={item.img} alt={item.name} />
                    <h3>{item.discount}</h3> {/* Display discount if available */}
                    <h2>{item.name}</h2>
                    <h3>{item.company}</h3>
                    {/* <h3>{item.contact}</h3> */}
                    <Rating value={item.rating} />
                </div>
            ))}
        </div>
    );
}

export default Productcart;
