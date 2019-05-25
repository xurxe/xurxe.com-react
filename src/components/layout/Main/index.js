import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

import EntryDiv from '../EntryDiv';

const Main = ({ page, html, entries }) => {

    const jsx = (
        <main
        className='Main'>

            {Parser(html)}

            {entries && 
            <div
            className={`Main_entries Main_entries___${page}`}>
                {entries.map(entry => 
                    <EntryDiv 
                    key={entry.id}
                    entry={entry} 
                    ></EntryDiv>
                )}
            </div>}

        </main>
    );

    return jsx;
};

export default Main;