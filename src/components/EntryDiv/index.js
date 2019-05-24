import React from 'react';

import './styles.css';

import SkillCategory from '../SkillCategory';

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

    else {
        jsx = (
            <div 
            className='Entry'>
    
                <p>{entry.id}</p>
    
            </div>
        );
    }

    return jsx;
};

export default EntryDiv;