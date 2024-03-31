import React from 'react'
import Banner1 from "./imgs/banner1.png"
import Productcart from './Productcart'
import Topdeals from './homecomponents/Topdeals'
import Offers from './homecomponents/Offers'
import Todaysdeal from './homecomponents/Todaysdeal'

function Home() {
  return (
    <div className='home'>
      <div className='banner'>
        <img className='banner_img' src='https://i.ibb.co/smcZMqb/2.png' alt='error loading banner'></img>
      </div>
      <Topdeals/>
      <Offers/>
      <Todaysdeal/>
    </div>
  )
}

export default Home
