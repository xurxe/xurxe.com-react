import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

const Header = ({ title, subtitle }) => {

    const jsx = (
        <header 
        className='Header'
        >

        <h1>{Parser(title)}</h1>
        {subtitle && <h2>{Parser(subtitle)}</h2>}

        </header>
    );

    return jsx;
};

export default Header;