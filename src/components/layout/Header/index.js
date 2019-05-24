import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

const Header = ({ html }) => {

    const jsx = (
        <header 
        className='Header'
        >

        {Parser(html)}

        </header>
    );

    return jsx;
};

export default Header;