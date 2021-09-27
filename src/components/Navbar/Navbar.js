import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.scss';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { SidebarData } from './SidebarData';
import './Navbar.scss';
import {  IconContext } from 'react-icons';


function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color: "white"}}>
        <div className="navbar">
            <Link to="#" className={sidebar ? 'menu-bars active' : 'menu-bars'}>
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>

        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to="#" className="menu-bars">
                       <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>


        </>
        // <nav>


        //     {/* <h3>Logo/Home</h3>
        //     <ul>
        //         <Link to='projects'>
        //             <li>Projects</li>
        //         </Link>  

        //         <Link to='/contact'>
        //             <li>Contact</li>
        //         </Link>  
        //     </ul> */}
        // </nav>
    )
}

export default Navbar