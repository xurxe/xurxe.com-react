import React from 'react';
import Parser from 'html-react-parser';
import ReactResizeDetector from 'react-resize-detector';
import { SpringGrid, makeResponsive } from 'react-stonecutter';

import './styles.css';

import Entry from '../Entry';

class Main extends React.Component {

    state = {
        gridDefaultColumns: 3,
    };

    componentDidMount = () => {
        if (window.matchMedia('(max-width: 870px)').matches) {
            this.setState(() => ({
                gridDefaultColumns: 1,
            }));            
        }

        else if (window.matchMedia('(max-width: 1170px)').matches) {
            this.setState(() => ({
                gridDefaultColumns: 2,
            }));          
        }

        else if (window.matchMedia('(max-width: 1470px)').matches) {
            this.setState(() => ({
                gridDefaultColumns: 3,
            }));          
        }

        else if (window.matchMedia('(max-width: 1770px)').matches) {
            this.setState(() => ({
                gridDefaultColumns: 4,
            }));          
        }

        else {
            this.setState(() => ({
                gridDefaultColumns: 5,
            })); 
        };
    };

    render() {

        const { page, html, entries } = this.props;

        const Grid = makeResponsive(SpringGrid, { maxWidth: 1920, minPadding: 250, defaultColumns: this.state.gridDefaultColumns})

        let jsx;

        if (
        page === 'index' 
        || page === 'stillness'
        || page === 'movement'
        || page === 'interactivity'
        ) {
            jsx = (
    
                <ReactResizeDetector
                handleWidth
                refreshMode='throttle'
                refreshRate={100}
                >
    
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
                </ReactResizeDetector>
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
};

export default Main;