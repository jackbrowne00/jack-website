import React from 'react'
import { NavigationData } from '../../NavigationData';
import { Link } from 'react-router-dom';
import '../../App.scss';
import './Footer.scss';


function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerTop">
                
                {/* {NavigationData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                })} */}
                <div className="socialIcons">

                </div>
                


            </div>
            <div className="footerBottom">
            <h4>Thanks for visiting 😁</h4>

            </div>
        </div>
    )
}

export default Footer
