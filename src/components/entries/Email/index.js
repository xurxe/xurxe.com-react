import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

const Email = (props) => {

    const { entry } = props;
    const { id, name, address, fontAwesomeIcon } = entry;

    const jsx = (
        <div 
        key={id}
        className='Entry Entry___email'
        >


            <a 
            href={`mailto: ${address}`}
            className='EmailA'
            >

                {Parser(fontAwesomeIcon)}
                {name}

            </a>

        </div>
    );

    return jsx;
};

export default Email;