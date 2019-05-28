import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

const Email = (props) => {

    const { entry } = props;
    const { id, name, address, fontAwesomeIcon } = entry;

    const jsx = (
        <a 
        key={id}
        href={`mailto: ${address}`}
        className='Entry Email'
        aria-label={`Xurxe's ${name}`}
        >

            {Parser(fontAwesomeIcon)}
            {address}

        </a>
    );

    return jsx;
};

export default Email;