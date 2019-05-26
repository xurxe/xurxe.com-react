import React from 'react';

import './styles.css';

import SkillCategory from '../../entries/SkillCategory';
import Email from '../../entries/Email';
import SocialMediaProfile from '../../entries/SocialMediaProfile';


const EntryDiv = ({ entry }) => {

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
            <div 
            key={entry.node.id}
            className='Entry'
            >
    
                <p>{entry.node.title}</p>
    
            </div>
        );
    }

    return jsx;
};

export default EntryDiv;