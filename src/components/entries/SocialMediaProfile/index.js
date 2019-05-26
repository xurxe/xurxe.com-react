import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

const SocialMediaProfile = (props) => {

    const { entry } = props;
    const { id, name, profileUrl, fontAwesomeIcon } = entry;

    const jsx = (
        <div 
        key={id}
        className='Entry Entry___socialMediaProfile'
        >

            <a 
            href={profileUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='SocialMediaProfileA'
            >

                {Parser(fontAwesomeIcon)}

                {name}

            </a>

        </div>
    );

    return jsx;
};

export default SocialMediaProfile;