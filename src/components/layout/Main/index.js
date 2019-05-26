import React from 'react';
import Parser from 'html-react-parser';
import { SpringGrid, makeResponsive } from 'react-stonecutter';

import './styles.css';

import Entry from '../Entry';

const Main = ({ page, html, entries }) => {

    const Grid = makeResponsive(SpringGrid, { maxWidth: 1920, minPadding: 250})

    let jsx;

    if (page === 'index') {
        jsx = (
            <main
            className='Main'>
    
                <div
                className='Main_text'
                >
    
                    {html && Parser(html)}
    
                </div>

                <Grid
                columns={3}
                columnWidth={300}
                gutterWidth={18}
                gutterHeight={18}
                itemHeight={300}
                springConfig={{ stiffness: 170, damping: 26 }}
                className={`Main_entries Main_entries___${page}`}
                >
                    {entries.map(entry => 
                        <div
                        key={entry.id}
                        >
                            <Entry 
                            entry={entry} 
                            ></Entry>
                        </div>
                    )}

                    {entries.map(entry => 
                        <div
                        key={entry.id}
                        >
                            <Entry 
                            entry={entry} 
                            ></Entry>
                        </div>
                    )}

                </Grid>
    
            </main>
        );
    }

    else {
        jsx = (
            <main
            className='Main'>
    
                <div
                className='Main_text'
                >
    
                    {html && Parser(html)}
    
                </div>
    
                {entries && 
                <div
                className={`Main_entries Main_entries___${page}`}>
                    {entries.map(entry => 
                        <Entry 
                        key={entry.id}
                        entry={entry} 
                        ></Entry>
                    )}
                </div>}
    
            </main>
        );
    }

 

    return jsx;
};

export default Main;