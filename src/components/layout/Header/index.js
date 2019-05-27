import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

const Header = ({ headerHtml }) => {

    const jsx = (
        <header 
        className='Header'
        >

        {Parser(headerHtml)}

        </header>
    );

    return jsx;
};

export default Header;