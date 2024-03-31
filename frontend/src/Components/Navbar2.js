import React from 'react'
import { Link } from "react-router-dom";
function Navbar2() {
    return (
        <div className='navbar2 Navbar'>
            <ul>
                <li>
                    <Link className='link' to={{ pathname: '/productdisplay', state: { category: 'Category A' } }}>
                        mens wear
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/womenswear">womens wear</Link>
                </li>
                <li>
                    <Link className="link" to="/kids">kids</Link>
                </li>
                <li>
                    <Link className="link" to="/homekitchen">home&kitchen</Link>
                </li>
                <li>
                    <Link className="link" to="/health">beauty&Healths</Link>
                </li>
                <li>
                    <Link className="link" to="/footwear">footwear</Link>
                </li>
                <li>
                    <Link className="link" to="/accessories">accessories</Link>
                </li>
                <li>
                    <Link className="link" to="/electronics">electronics</Link>
                </li>
                <li>
                    <Link className="link" to="/books">Books&Stationary</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar2
