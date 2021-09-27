import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.scss'

function Nav() {
    return (
        <nav>
            <h3>Logo/Home</h3>
            <ul>
                <Link to='projects'>
                    <li>Projects</li>
                </Link>  

                <Link to='/contact'>
                    <li>Contact</li>
                </Link>  
            </ul>
        </nav>
    )
}

export default Nav