import React from 'react';
import { useLocation } from 'react-router-dom';
import { items } from '../../data';
import Rating from '../Rating';

function Productdisplay() {
  const handleSendValue = (value) => {
    // Handle sending the value to another component or performing any other action
    console.log("Value sent from Navbar2:", value);
  };

  const location = useLocation();
  const category = location.state ? location.state.category : null;
  console.log(category)
  const data = category ? items.filter(item => item.category === category) : [];

  return (
    <div className='productdisplay'>
      <div className='deal_1'>
        {data.map((item, index) => (
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
  );
}

export default Productdisplay;
