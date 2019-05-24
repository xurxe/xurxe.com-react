import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

import EntryDiv from '../EntryDiv';

const Main = ({ html, entries }) => {

    const jsx = (
        <main
        className='Main'>

            {Parser(html)}

            {entries && entries.map(entry => 
                <EntryDiv 
                entry={entry} 
                key={entry.id}
                ></EntryDiv>
            )}

        </main>
    );

    return jsx;
};

export default Main;