import React from 'react';

import './styles.css';

import Nav from '../Nav';

const RootDiv = ({ children }) => {

    const jsx = (
        <div 
        className='RootDiv'>

            <div
            className='HeaderMainWrapper'
            >

                <Nav></Nav>

                {children}

            </div>

        </div>
    );

    return jsx;
};

export default RootDiv;