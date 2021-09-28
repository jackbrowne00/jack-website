import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';

export const NavigationData = [
    {
        title: 'Home',
        path: '/',
        icon: <BiIcons.BiHomeAlt />,
        cName: 'nav-text',
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <RiIcons.RiStackLine/>,
        cName: 'nav-text',
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <BiIcons.BiEnvelope />,
        cName: 'nav-text',
    },
]