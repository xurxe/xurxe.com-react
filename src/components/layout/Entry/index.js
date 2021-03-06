import React from 'react';

import './styles.css';

import SkillCategory from '../../entries/SkillCategory';
import Email from '../../entries/Email';
import SocialMediaProfile from '../../entries/SocialMediaProfile';
import CreationLink from '../../entries/CreationLink';


const Entry = ({ entry }) => {

    const { __typename } = entry;

    let jsx;

    if (__typename === 'ContentfulSkillCategory') {

        jsx = (
            <SkillCategory
            entry={entry}
            ></SkillCategory>
        );
    }

    else if (__typename === 'ContentfulEmail') {

        jsx = (
            <Email
            entry={entry}
            ></Email>
        );
    }

    else if (__typename === 'ContentfulSocialMediaProfile') {

        jsx = (
            <SocialMediaProfile
            entry={entry}
            ></SocialMediaProfile>
        );
    }

    else if (__typename) {
        jsx = (
            <div
            key={entry.id}
            className='Entry'
            >
    
                <p>{__typename}</p>
    
            </div>
        );
    }

    else {

        jsx = (
            <CreationLink
            entry={entry}
            ></CreationLink>
        );
    }

    return jsx;
};

export default Entry;