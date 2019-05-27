import React from 'react';
import Parser from 'html-react-parser';
import { CSSGrid, layout } from 'react-stonecutter';
import ReactResizeDetector from 'react-resize-detector';

import './styles.css';

import Entry from '../Entry';

class Main extends React.Component {

    state = {
        columns: 3,
    }

    calculateColumnsA = () => {
        if (window.matchMedia('(max-width: 900px)').matches) {
            this.setState(() => ({
                columns: 1,
            }));
        }

        else if (window.matchMedia('(max-width: 1200px)').matches) {
            this.setState(() => ({
                columns: 2,
            }));
        }

        else if (window.matchMedia('(max-width: 1500px)').matches) {
            this.setState(() => ({
                columns: 3,
            }));
        }

        else if (window.matchMedia('(max-width: 1800px)').matches) {
            this.setState(() => ({
                columns: 4,
            }));
        }

        else {
            this.setState(() => ({
                columns: 5,
            }));
        }
    }

    calculateColumnsB = () => {
        if (window.matchMedia('(max-width: 960px)').matches) {
            this.setState(() => ({
                columns: 1,
            }));
        }

        else if (window.matchMedia('(max-width: 1320px)').matches) {
            this.setState(() => ({
                columns: 2,
            }));
        }

        else if (window.matchMedia('(max-width: 1680px)').matches) {
            this.setState(() => ({
                columns: 3,
            }));
        }

        else {
            this.setState(() => ({
                columns: 4,
            }));
        }
    }

    componentDidMount = () => {
        if (
        this.props.page === 'index' 
        || this.props.page === 'stillness'
        || this.props.page === 'movement'
        || this.props.page === 'interactivity'
        ) {
            this.calculateColumnsA();
        }

        else if (this.props.page === 'skills') {
            this.calculateColumnsA();
        }
    };

    render() {

        const { page, mainHtml, entries } = this.props;

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
                width={this.width}
                onResize={this.calculateColumnsA}
                refreshMode='throttle'
                refreshRate={100}
                >
    
                    <main
                    className='Main'>
            
                        <div
                        className='Main_text'
                        >
            
                            {mainHtml && Parser(mainHtml)}
            
                        </div>
        
                        <CSSGrid
                        columns={this.state.columns}
                        columnWidth={300}
                        itemHeight={300}
                        gutterWidth={18}
                        gutterHeight={18}
                        layout={layout.simple}
                        duration={500}
                        className={`Main_entries Main_entries___${page}`}
                        >
                            {entries && entries.map(entry => 
                                <div
                                key={entry.id}
                                >
                                    <Entry 
                                    entry={entry} 
                                    ></Entry>
                                </div>
                            )}

                        </CSSGrid>
            
                    </main>

                </ReactResizeDetector>

            );
        }

        else if (page === 'skills') {
            
            jsx = (

                <ReactResizeDetector
                handleWidth
                width={this.width}
                onResize={this.calculateColumnsB}
                refreshMode='throttle'
                refreshRate={100}
                >
    
                    <main
                    className='Main'>
            
                        <div
                        className='Main_text'
                        >
            
                            {mainHtml && Parser(mainHtml)}
            
                        </div>
        
                        <CSSGrid
                        columns={this.state.columns}
                        columnWidth={360}
                        gutterWidth={18}
                        gutterHeight={18}
                        layout={layout.pinterest}
                        duration={500}
                        className={`Main_entries Main_entries___${page}`}
                        >

                            {entries && entries.map((entry, index) => 
                                <div
                                key={entry.id}
                                itemHeight={(300 - (index % 2) * 100)}
                                >
                                    <Entry 
                                    entry={entry} 
                                    ></Entry>
                                </div>
                            )}
        
                        </CSSGrid>
            
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
        
                        {mainHtml && Parser(mainHtml)}
        
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