import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

const SocialMediaProfile = (props) => {

    const { entry } = props;
    const { id, name, profileUrl, fontAwesomeIcon } = entry;

    const jsx = (

        <a 
        key={id}
        href={profileUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='Entry SocialMediaProfile'
        >

            {Parser(fontAwesomeIcon)}

            {name}

        </a>

    );

    return jsx;
};

export default SocialMediaProfile;