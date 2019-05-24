import React from 'react';

import './styles.css';

import SkillCategory from '../../entries/SkillCategory';

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

    else if (__typename) {
        jsx = (
            <div
            className='Entry'>
    
                <p>{__typename}</p>
    
            </div>
        );
    }

    else {

        jsx = (
            <div 
            className='Entry'>
    
                <p>{entry.node.title}</p>
    
            </div>
        );
    }

    return jsx;
};

export default EntryDiv;