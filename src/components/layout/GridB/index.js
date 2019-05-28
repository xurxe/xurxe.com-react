import React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import { CSSGrid, layout } from 'react-stonecutter';

import './styles.css';

import Entry from '../Entry';

class GridB extends React.Component {

    state = {
        columns: 2,
    }

    calculateColumns = () => {
        if (window.matchMedia('(max-width: 990px)').matches) {
            this.setState(() => ({
                columns: 1,
            }));
        }

        else if (window.matchMedia('(max-width: 1350px)').matches) {
            this.setState(() => ({
                columns: 2,
            }));
        }

        else if (window.matchMedia('(max-width: 1710px)').matches) {
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
                gutterWidth={18}
                gutterHeight={36}
                layout={layout.pinterest}
                duration={500}
                className={`Grid___${page}`}
                >
    
                    {entries && entries.map((entry) => 
                        <div
                        key={entry.id}
                        itemHeight={(310 - 30 * (8 - entry.skills.length))}
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

export default GridB;