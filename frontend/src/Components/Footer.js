import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_links'>
            <div className='footer_1'>
                <ul>
                    <li className='footer_link'>
                        <Link className='link' to="/">Home</Link>
                    </li>
                    <li className='footer_link'>
                        <Link className='link' to="/About">About</Link>
                    </li>
                    <li className='footer_link'>
                        <Link className='link' to="/Contact">Contact</Link>
                    </li>

                </ul>
            </div>
            <div className='footer_1'>
                <ul>
                    <li className='footer_link'>
                        <Link className='link' to="/">
                            <span><img src='' alt="" />
                            </span><span>Instagram</span>
                        </Link>
                    </li>
                    <li className='footer_link'>
                        <Link className='link' to="/">
                            <span><img src='' alt="" /></span>
                            <span>twitter</span>
                        </Link>
                    </li>
                    <li className='footer_link'>
                        <Link className='link' to="/">
                            <span><img src='' alt="" /></span>
                            <span>facebook</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='footer_1'>
                <ul>
                    <li>
                        <Link className='link' to="/orders">View order</Link>
                    </li>
                    <li>
                        <Link className="link" to="/orders">order cancellation</Link>
                    </li>
                    <li>
                        <Link className="link" to="/ordered">previece Orders</Link>
                    </li>
                </ul>
            </div>
            </div>
            <div className='footer_discription'>
                <p>&copy; {new Date().getFullYear()} Local Mart. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
