import React from 'react';

import './styles.css';

import Skill from './Skill';

const SkillCategory = ({ entry }) => {

    const {id, name, skills} = entry;

    const jsx = (
        <div 
        key={id}
        className='Entry SkillCategory'
        >

            <h3
            className='H3___skills'
            >{name}</h3>
            <ul id={name}>
                {skills.map(skill => 
                    <Skill
                    key={skill.id}
                    skill={skill}
                    ></Skill>
                )}
            </ul>

        </div>
    );

    return jsx;
};

export default SkillCategory;