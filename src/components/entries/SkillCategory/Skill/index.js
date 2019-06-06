import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

const Skill = ({ skill }) => {

    const { id, name, level } = skill;

    let html = '';

    for (let i = 0; i < level; i++) {
        html += `<div class="Skill_levelDiv Skill_levelDiv___${i + 1}"></div>`
    };

    const jsx = (
        <li
        key={id}
        className='Skill'>

            <p
            className='Skill_nameP'
            >
                {name}

            </p>

            <div
            className='Skill_levelsDiv'
            >

                {Parser(html)}
                
            </div>

        </li>
    );

    return jsx;
};

export default Skill;