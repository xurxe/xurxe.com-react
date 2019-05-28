import React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import { CSSGrid, layout } from 'react-stonecutter';

import './styles.css';

import Entry from '../Entry';

class GridA extends React.Component {

    state = {
        columns: 3,
    }

    calculateColumns = () => {
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

    componentDidMount = () => {
        this.calculateColumns();
    }

    render(){

        const { page, entries } = this.props;
        
        const jsx = (

            <ReactResizeDetector
            handleWidth
            width={this.width}
            onResize={this.calculateColumns}
            refreshMode='throttle'
            refreshRate={100}
            >
                <CSSGrid
                columns={this.state.columns}
                columnWidth={300}
                itemHeight={300}
                gutterWidth={18}
                gutterHeight={18}
                layout={layout.simple}
                duration={500}
                className={`Grid___${page}`}
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
            </ReactResizeDetector>
        );

        return jsx;
    };
};

export default GridA;