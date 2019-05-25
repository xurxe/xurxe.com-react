import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

const SkillDiv = ({ name, level }) => {

    let html = '';

    for (let i = 0; i < level; i++) {
        html += `<div class="SkillDiv_levelDiv SkillDiv_levelDiv___${i + 1}"></div>`
    };

    const jsx = (
        <div
        className='SkillDiv'>

            <p
            className='SkillDiv_nameP'
            >
                {name}

            </p>

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