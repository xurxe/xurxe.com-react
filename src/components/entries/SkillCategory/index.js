import React from 'react';

import './styles.css';

import SkillDiv from './SkillDiv';

const SkillCategory = ({ entry }) => {

    const {name, skills} = entry;

    const jsx = (
        <div 
        className='Entry Entry___skillCategory'>

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