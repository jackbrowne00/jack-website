import React from 'react'
import { NavigationData } from '../../NavigationData';
import { SocialIcons, } from './FooterData'
import { Link } from 'react-router-dom';
import '../../App.scss';
import './Footer.scss';
import {  IconContext } from 'react-icons';



function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerTop">
                <div>
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
                </div>
                <IconContext.Provider value={{color: "white"}}>
                    <div className="socialIcons">
                        {SocialIcons.map((item, index)  => {
                            return (
                                <a key={item.key} className={item.cName} href={item.url} target="_blank">
                                        {item.icon}
                                </a>
                            )
                        })}
                    </div>
                </IconContext.Provider>
            </div>
            <div className="footerBottom">
            <h4>Thanks for visiting 😁</h4>

            </div>
        </div>
    )
}

export default Footer
