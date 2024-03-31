import React from 'react'
import { items } from '../../data'
function Offers() {
    // const offerp = items.filter(item=> items.discount ==='90');
    // const offerp = itemsS
    return (
        <div className='offers'>
            <h2 className='heading'>here you get biggest offers and deals from sales</h2>
            <div className='offersmain'>
                <div className='offeritemcart'>
                    <h3>Electronics up to 75%</h3>
                    <div>
                        {items.map((item, index) => (
                            <div className='offeritem' key={index}>
                                <img src={item.img} alt={item.name} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='offeritemcart'>
                    <h3>Fashion up to 75%</h3>
                    <div>
                        {items.map((item, index) => (
                            <div className='offeritem' key={index}>
                                <img src={item.img} alt={item.name} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='offeritemcart'>
                    <h3>Starting at 99 only</h3>
                    <div>
                        {items.map((item, index) => (
                            <div className='offeritem' key={index}>
                                <img src={item.img} alt={item.name} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='offeritemcart'>
                    <h3>Kitchen and home upto 60%</h3>
                    <div>
                        {items.map((item, index) => (
                            <div className='offeritem' key={index}>
                                <img src={item.img} alt={item.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers
