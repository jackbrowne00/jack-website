import React from 'react';
import { AboutMeData } from '../../pages/Home/AboutMeData';
// import '../../pages/Home/Home.scss';
import '../../global.scss';
import '../../App.scss';
import './ListIconBlock.scss'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as SiIcons from 'react-icons/si';
import * as DiIcons from 'react-icons/di';

function ListIconBlock(props) {
    return (
        <div className="ListIconBlock">
            <div className="ListIconBlockContainer">
                <h3 className="ListIconBlockTitle">{props.title}</h3>
                <div className="ListIconBlockContent">
                    {AboutMeData.map((item, index) => {
                        return (
                            <div className={item.contentCName}>
                                <a className={item.iconCName} href="https://javascript.com">
                                {item.icon}
                                </a>
                                <div className={item.textCName}>
                                {item.text}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ListIconBlock

// <div className="aboutMe">
// <div className="aboutMeContainer">
// <h3 className="aboutMeTitle">About Me</h3>
// <div className="aboutMeContent">
//     {AboutMeData.map((item, index) => {
    //         return (
        //             <div className={item.aboutContentCName}>
        //                 <a className={item.iconCName} href="https://javascript.com">
        //                 {item.icon}
        //                 </a>
        //                 <div className={item.textCName}>
        //                 {item.text}
        //                 </div>
        //             </div>
        //         )
        //     })}
        // </div>
        // </div>
        // </div>
        
