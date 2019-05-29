import React from 'react';

import './styles.css';

const Header = ({ title, subtitle }) => {

    const jsx = (
        <header 
        className='Header'
        >

        <h1>{title}</h1>
        <h2>{subtitle}</h2>

        </header>
    );

    return jsx;
};

export default Header;