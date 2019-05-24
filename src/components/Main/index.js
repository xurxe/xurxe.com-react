import React from 'react';

import './styles.css';

const Main = ({ children }) => {

    const jsx = (
        <main
        className='Main'>

            {children}

        </main>
    );

    return jsx;
};

export default Main;