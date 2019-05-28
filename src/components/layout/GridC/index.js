import React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import { CSSGrid, layout } from 'react-stonecutter';

import './styles.css';

import Entry from '../Entry';

class GridC extends React.Component {

    state = {
        columns: 2,
    }

    calculateColumns = () => {
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
                columnWidth={360}
                itemHeight={30}
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

export default GridC;