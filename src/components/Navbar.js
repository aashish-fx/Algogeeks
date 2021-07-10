import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Frontpage from './Frontpage';

//import Main from './Main';
function Navbar(props){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
   // const closeMobileMenu = () => setClick(false);

    return(
        <div>
            <nav className='navbar'>
                <Link to ={<Frontpage/>} className='navbar-logo'>
                    <span>A</span>
                    <span>L</span>
                    <span>G</span>
                    <span>O</span>
                    <span>G</span>
                    <span>E</span>
                    <span>E</span>
                    <span>K</span>
                    <span>S</span>
                </Link>
                <div className='menu-icon' onClick = {handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/'  className='nav-links' >
                            HOME
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/graphs' className='nav-links' >
                            VSIUALIZE MATH GRAPHS
                        </Link>
                    </li>

                    <li className='nav-item' >
                        <Link to='/algorithms' className='nav-links' >
                            SORTING AlGOS
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' >
                            ABOUT US
                        </Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}
export default Navbar;