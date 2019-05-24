import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

const SkillDiv = ({ id, name, level }) => {

    let html = '';

    for (let i = 0; i < level; i++) {
        html += `<div class="levelDiv levelDiv___${i + 1}">x</div>`
    };

    const jsx = (
        <div
        key={id}
        className='SkillDiv'>

            <span
            className='SkillDiv_nameSpan'
            >
                {name}
            </span>

            <div
            className='SkillDiv_levelsDiv'
            >
                {Parser(html)}
            </div>

        </div>
    );

    return jsx;
};

export default SkillDiv;