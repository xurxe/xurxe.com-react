import React from 'react';

import './styles.css';

import SkillDiv from './SkillDiv';

const SkillCategory = ({ entry }) => {

    const {id, name, skills} = entry;

    const jsx = (
        <div 
        key={id}
        className='Entry SkillCategory'
        >

            <h3>{name}</h3>
            {skills.map(skill => 
                <SkillDiv
                key={skill.id}
                name={skill.name}
                level={skill.level}
                ></SkillDiv>
            )}

        </div>
    );

    return jsx;
};

export default SkillCategory;